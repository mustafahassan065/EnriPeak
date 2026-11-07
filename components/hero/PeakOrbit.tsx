"use client";

import { useMemo, useRef, type MutableRefObject, type RefObject } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const CYAN = "#00FFFF";
const AMBER = "#FFBF00";
const BUILD_TIME = 3.8; // seconds for the ascent animation

// mountain dimensions (taller than before: H was 3.2)
const H = 5.4; // height of the main peak
const R = 2.4; // base radius
const GROUND = -2.55; // y of the mountain base
const TOTAL = H + 0.1; // base → summit light

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

/* ---------- drives the build progress 0 → 1, then holds ---------- */
function BuildDriver({
  progressRef,
  reduceMotion,
  onBuilt,
}: {
  progressRef: MutableRefObject<number>;
  reduceMotion: boolean;
  onBuilt?: () => void;
}) {
  const done = useRef(false);
  useFrame((_, dt) => {
    if (done.current) return;
    if (reduceMotion) {
      progressRef.current = 1;
      done.current = true;
      onBuilt?.();
      return;
    }
    progressRef.current = Math.min(1, progressRef.current + Math.min(dt, 0.1) / BUILD_TIME);
    if (progressRef.current >= 1) {
      done.current = true;
      onBuilt?.();
    }
  });
  return null;
}

/* ---------- the mountain: taller, with ONE glowing light at the summit ---------- */
function Mountain({
  progressRef,
  summitRef,
}: {
  progressRef: MutableRefObject<number>;
  summitRef: RefObject<THREE.Mesh>;
}) {
  const g = useRef<THREE.Group>(null!);
  const matMain = useRef<THREE.MeshBasicMaterial>(null!);
  const matInner = useRef<THREE.MeshBasicMaterial>(null!);
  const matShoulder = useRef<THREE.MeshBasicMaterial>(null!);
  const halo = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    const p = progressRef.current;
    const grown = easeOutCubic(Math.min(p, 1));
    const t = clock.elapsedTime;

    // the mountain rises from the ground
    g.current.scale.set(0.6 + grown * 0.4, Math.max(grown, 0.001), 0.6 + grown * 0.4);
    matMain.current.opacity = grown * 0.6;
    matInner.current.opacity = grown * 0.22;
    matShoulder.current.opacity = grown * 0.18;

    // summit ignites near completion, then gently breathes
    const ignite = THREE.MathUtils.smoothstep(p, 0.85, 1);
    const pulse = 1 + Math.sin(t * 2) * 0.12 * ignite;
    summitRef.current.scale.setScalar((0.4 + ignite * 0.6) * pulse);
    halo.current.scale.setScalar((0.6 + ignite * 0.9) * (1 + Math.sin(t * 2 + 0.6) * 0.15 * ignite));
    (halo.current.material as THREE.MeshBasicMaterial).opacity = 0.05 + ignite * 0.22;

    // settled state: a very slow drift — nothing orbits
    g.current.rotation.y = t * 0.05;
  });

  return (
    <group ref={g} position={[0, GROUND, 0]}>
      {/* main peak */}
      <mesh position={[0, H / 2, 0]}>
        <coneGeometry args={[R, H, 4, 4, true]} />
        <meshBasicMaterial ref={matMain} color={CYAN} wireframe transparent opacity={0} />
      </mesh>
      {/* inner ridge */}
      <mesh position={[0, 2.35, 0]} scale={0.55} rotation={[0, Math.PI / 4, 0]}>
        <coneGeometry args={[R, H, 4, 1, true]} />
        <meshBasicMaterial ref={matInner} color={CYAN} wireframe transparent opacity={0} />
      </mesh>
      {/* secondary shoulder peak */}
      <mesh position={[-1.5, 1.4, 0.8]} scale={0.55}>
        <coneGeometry args={[R, H, 4, 1, true]} />
        <meshBasicMaterial ref={matShoulder} color="#7ff7f7" wireframe transparent opacity={0} />
      </mesh>
      {/* summit light — the only golden light now */}
      <mesh ref={summitRef} position={[0, TOTAL, 0]}>
        <sphereGeometry args={[0.15, 24, 24]} />
        <meshBasicMaterial color={AMBER} />
      </mesh>
      <mesh ref={halo} position={[0, TOTAL, 0]}>
        <sphereGeometry args={[0.45, 24, 24]} />
        <meshBasicMaterial color={AMBER} transparent opacity={0.05} blending={THREE.AdditiveBlending} depthWrite={false} />
      </mesh>
    </group>
  );
}

/* ---------- data streams: particles of tech flowing up to the summit ---------- */
function DataStreams({ progressRef, count = 28 }: { progressRef: MutableRefObject<number>; count?: number }) {
  const ref = useRef<THREE.Points>(null!);

  const { positions, lanes, phases, speeds } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const lanes = new Float32Array(count);
    const phases = new Float32Array(count);
    const speeds = new Float32Array(count);
    const laneCount = 5;
    for (let i = 0; i < count; i++) {
      lanes[i] = ((i % laneCount) / laneCount) * Math.PI * 2 + (i % 2) * 0.25;
      phases[i] = Math.random();
      speeds[i] = 0.09 + Math.random() * 0.07;
    }
    return { positions, lanes, phases, speeds };
  }, [count]);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    const ignite = THREE.MathUtils.smoothstep(progressRef.current, 0.9, 1);
    const pos = ref.current.geometry.attributes.position as THREE.BufferAttribute;
    const arr = pos.array as Float32Array;
    for (let i = 0; i < count; i++) {
      const h = (t * speeds[i] + phases[i]) % 1; // 0 at base → 1 at summit, looping
      const r = (1 - h) * (R * 0.86) + 0.12; // narrows as it climbs
      arr[i * 3] = Math.cos(lanes[i]) * r;
      arr[i * 3 + 1] = GROUND + h * (TOTAL + 0.3);
      arr[i * 3 + 2] = Math.sin(lanes[i]) * r;
    }
    pos.needsUpdate = true;
    (ref.current.material as THREE.PointsMaterial).opacity = 0.15 + ignite * 0.6;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.055} color={CYAN} transparent opacity={0.15} sizeAttenuation depthWrite={false} />
    </points>
  );
}

/* ---------- particles stream upward and assemble the mountain (build phase) ---------- */
function AscentParticles({
  progressRef,
  count = 600,
}: {
  progressRef: MutableRefObject<number>;
  count?: number;
}) {
  const ref = useRef<THREE.Points>(null!);
  const BASE0 = GROUND - 0.05;

  const { positions, seeds } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const seeds = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const h = Math.random();
      const r = (1 - h) * (R * 0.8) + 0.15;
      const a = Math.random() * Math.PI * 2;
      seeds[i * 3] = Math.cos(a) * r;
      seeds[i * 3 + 1] = GROUND + h * TOTAL; // target y
      seeds[i * 3 + 2] = Math.sin(a) * r;
      positions[i * 3] = seeds[i * 3];
      positions[i * 3 + 1] = GROUND - 0.05;
      positions[i * 3 + 2] = seeds[i * 3 + 2];
    }
    return { positions, seeds };
  }, [count]);

  useFrame(() => {
    const p = progressRef.current;
    const pos = ref.current.geometry.attributes.position as THREE.BufferAttribute;
    const arr = pos.array as Float32Array;
    for (let i = 0; i < count; i++) {
      const d = (seeds[i * 3 + 1] - BASE0) / (TOTAL + 0.05);
      const lp = THREE.MathUtils.clamp((p * 1.15 - d * 0.9) / 0.25, 0, 1);
      const e = easeOutCubic(lp);
      arr[i * 3] = seeds[i * 3] * (0.3 + 0.7 * e);
      arr[i * 3 + 1] = BASE0 + (seeds[i * 3 + 1] - BASE0) * e;
      arr[i * 3 + 2] = seeds[i * 3 + 2] * (0.3 + 0.7 * e);
    }
    pos.needsUpdate = true;
    // after the build, the assembly particles fade into the background
    (ref.current.material as THREE.PointsMaterial).opacity = 0.25 + p * 0.35;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#9fffff" transparent opacity={0.25} sizeAttenuation depthWrite={false} />
    </points>
  );
}

/* ---------- gentle camera parallax (pulls back on small screens) ---------- */
function Rig() {
  const { size } = useThree();
  useFrame(({ camera, pointer }) => {
    const z = size.width < 640 ? 9.6 : size.width < 1024 ? 9.2 : 8.8;
    camera.position.x += (pointer.x * 0.7 - camera.position.x) * 0.04;
    camera.position.y += (pointer.y * 0.4 + 0.45 - camera.position.y) * 0.04;
    camera.position.z += (z - camera.position.z) * 0.08;
    camera.lookAt(0, 0.2, 0);
  });
  return null;
}

/* ---------- keeps the HTML banner pinned to the summit light (2D screen position) ---------- */
function SummitTracker({
  summitRef,
  anchorRef,
}: {
  summitRef: RefObject<THREE.Mesh>;
  anchorRef: RefObject<HTMLDivElement | null>;
}) {
  const v = useMemo(() => new THREE.Vector3(), []);
  useFrame(({ camera, size }) => {
    const el = anchorRef.current;
    const s = summitRef.current;
    if (!el || !s) return;
    s.updateWorldMatrix(true, false);
    s.getWorldPosition(v);
    camera.updateMatrixWorld();
    v.project(camera);
    const x = (v.x * 0.5 + 0.5) * size.width;
    const y = (-v.y * 0.5 + 0.5) * size.height;
    el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
  });
  return null;
}

type Props = {
  inView: boolean;
  reduceMotion: boolean;
  anchorRef: RefObject<HTMLDivElement | null>;
  onBuilt?: () => void;
};

export default function PeakOrbit({ inView, reduceMotion, anchorRef, onBuilt }: Props) {
  const progress = useRef(reduceMotion ? 1 : 0);
  const summit = useRef<THREE.Mesh>(null!);

  return (
    <Canvas
      camera={{ position: [0, 0.5, 8.8], fov: 45 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true }}
      frameloop={reduceMotion ? "demand" : inView ? "always" : "never"}
      eventSource={typeof document !== "undefined" ? document.body : undefined}
      eventPrefix="client"
      style={{ width: "100%", height: "100%" }}
    >
      <BuildDriver progressRef={progress} reduceMotion={reduceMotion} onBuilt={onBuilt} />
      <Rig />
      <Mountain progressRef={progress} summitRef={summit} />
      <DataStreams progressRef={progress} />
      <AscentParticles progressRef={progress} />
      <SummitTracker summitRef={summit} anchorRef={anchorRef} />
    </Canvas>
  );
}