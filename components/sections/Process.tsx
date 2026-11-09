"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import SectionHeading from "@/components/ui/SectionHeading";

const STEPS = [
  {
    t: "Discover",
    d: "We start by listening. We learn about your business, audience, goals and constraints, then define the problem, project scope and the outcomes we will work toward.",
    cue: "Clarity before commitment",
  },
  {
    t: "Shape the solution",
    d: "We map the experience and technical direction together. You get a clear plan, key screens or workflow maps, and a shared view of what we are building before development begins.",
    cue: "A plan you can see",
  },
  {
    t: "Build together",
    d: "We develop in focused iterations, whether that means a web experience, an AI agent or connected automation. You see progress through regular reviews and can give feedback while it is still easy to act on.",
    cue: "Visible progress, shared decisions",
  },
  {
    t: "Launch with confidence",
    d: "We prepare the solution for real use, check the important details and guide the handover or deployment. The goal is a smooth release—not a last-minute surprise.",
    cue: "Ready for real users",
  },
  {
    t: "Improve and grow",
    d: "After launch, we can monitor performance, learn from real usage and identify the next improvements. Your digital solution can keep evolving as your business changes.",
    cue: "A partnership beyond launch",
  },
];

function ProcessSketch({ index }: { index: number }) {
  const base = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg
      viewBox="0 0 480 350"
      className={`process-scene process-scene-${index} h-auto w-full`}
      aria-hidden="true"
    >
      <defs>
        <pattern id="pr-grid" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r=".9" fill="rgba(255,255,255,.09)" />
        </pattern>
      </defs>

      {/* 01 */}
      {index === 0 && (
        <g {...base}>
          <rect x="36" y="34" width="408" height="270" rx="15" className="pr-window" />
          <path d="M36 72 H444" className="pr-window-line" />
          <circle cx="59" cy="53" r="4" fill="#F5B84B" stroke="none" />
          <circle cx="75" cy="53" r="4" fill="#39E7EF" stroke="none" />
          <circle cx="91" cy="53" r="4" fill="white" opacity=".4" stroke="none" />
          <text x="113" y="57" className="pr-ui-label">DISCOVERY CALL</text>
          <text x="384" y="57" textAnchor="end" className="pr-ui-label">LISTENING</text>
          <rect x="394" y="46" width="4" height="14" rx="2" className="s0-eq s0-eq1" fill="#39E7EF" stroke="none" />
          <rect x="402" y="46" width="4" height="14" rx="2" className="s0-eq s0-eq2" fill="#39E7EF" stroke="none" />
          <rect x="410" y="46" width="4" height="14" rx="2" className="s0-eq s0-eq3" fill="#F5B84B" stroke="none" />

          <circle cx="104" cy="160" r="22" />
          <path d="M82 158 C82 140 94 134 105 134 C118 134 127 144 126 158 C118 150 94 148 82 158Z" />
          <path d="M95 163 H96 M112 163 H113" strokeWidth="3" />
          <path d="M95 171 Q104 177 114 171" />
          <path d="M97 182 V192 M111 182 V192" />
          <path d="M60 262 C62 218 82 192 104 192 C126 192 146 218 148 262" />
          <path d="M91 194 L104 210 L117 194" />
          <path d="M52 262 H156" className="pr-window-line" />
          <text x="104" y="282" textAnchor="middle" className="pr-ui-caption">YOUR BUSINESS</text>

          <path d="M92 122 L100 134 L112 122Z" className="pr-bub-tail" />
          <rect x="44" y="88" width="120" height="34" rx="10" className="pr-bub" />
          <g className="s0-w s0-w1"><path d="M56 113 V98 H68 V113 M53 113 H71 M59 103 H65 M59 108 H65" stroke="#39E7EF" /><text x="78" y="109" className="pr-say">BUSINESS</text></g>
          <g className="s0-w s0-w2"><circle cx="62" cy="100" r="4.5" stroke="#39E7EF" /><path d="M54 113 C54 105 70 105 70 113" stroke="#39E7EF" /><text x="78" y="109" className="pr-say">AUDIENCE</text></g>
          <g className="s0-w s0-w3"><circle cx="62" cy="105" r="9" stroke="#F5B84B" /><circle cx="62" cy="105" r="4.5" stroke="#F5B84B" /><circle cx="62" cy="105" r="1.4" fill="#F5B84B" stroke="none" /><text x="78" y="109" className="pr-say">GOALS</text></g>
          <g className="s0-w s0-w4"><circle cx="62" cy="105" r="8.5" stroke="#F5B84B" /><path d="M62 99.5 V105 L66.5 108" stroke="#F5B84B" /><text x="78" y="109" className="pr-say">CONSTRAINTS</text></g>

          <rect x="232" y="86" width="192" height="176" rx="10" className="pr-ui-card" />
          <text x="246" y="106" className="pr-ui-label">DISCOVERY BRIEF</text>
          <path d="M232 114 H424" className="pr-window-line" />
          <circle cx="252" cy="134" r="8" className="pr-ui-card" />
          <circle cx="252" cy="134" r="8" className="s0-fill s0-fill0" />
          <path d="M248 134 L251 137 L257 130" className="s0-ck s0-ck0" />
          <text x="268" y="138.5" className="pr-row s0-row0">Business</text>
          <path pathLength="1" d="M346 134 H412" className="pr-d s0-bar s0-bar0" />
          <circle cx="252" cy="164" r="8" className="pr-ui-card" />
          <circle cx="252" cy="164" r="8" className="s0-fill s0-fill1" />
          <path d="M248 164 L251 167 L257 160" className="s0-ck s0-ck1" />
          <text x="268" y="168.5" className="pr-row s0-row1">Audience</text>
          <path pathLength="1" d="M346 164 H412" className="pr-d s0-bar s0-bar1" />
          <circle cx="252" cy="194" r="8" className="pr-ui-card" />
          <circle cx="252" cy="194" r="8" className="s0-fill s0-fill2" />
          <path d="M248 194 L251 197 L257 190" className="s0-ck s0-ck2" />
          <text x="268" y="198.5" className="pr-row s0-row2">Goals</text>
          <path pathLength="1" d="M346 194 H412" className="pr-d s0-bar s0-bar2" />
          <circle cx="252" cy="224" r="8" className="pr-ui-card" />
          <circle cx="252" cy="224" r="8" className="s0-fill s0-fill3" />
          <path d="M248 224 L251 227 L257 220" className="s0-ck s0-ck3" />
          <text x="268" y="228.5" className="pr-row s0-row3">Constraints</text>
          <path pathLength="1" d="M346 224 H412" className="pr-d s0-bar s0-bar3" />
          <g className="s0-chips">
            <rect x="244" y="240" width="54" height="16" rx="8" className="pr-chip" /><text x="271" y="251.5" textAnchor="middle" className="pr-chip-t">PROBLEM</text>
            <rect x="302" y="240" width="54" height="16" rx="8" className="pr-chip" /><text x="329" y="251.5" textAnchor="middle" className="pr-chip-t">SCOPE</text>
            <rect x="360" y="240" width="54" height="16" rx="8" className="pr-chip" /><text x="387" y="251.5" textAnchor="middle" className="pr-chip-t">OUTCOME</text>
          </g>
          <g transform="translate(164 105)"><g className="s0-pk s0-pk0"><circle r="5.5" fill="#39E7EF" stroke="none" /></g></g>
          <g transform="translate(164 105)"><g className="s0-pk s0-pk1"><circle r="5.5" fill="#39E7EF" stroke="none" /></g></g>
          <g transform="translate(164 105)"><g className="s0-pk s0-pk2"><circle r="5.5" fill="#F5B84B" stroke="none" /></g></g>
          <g transform="translate(164 105)"><g className="s0-pk s0-pk3"><circle r="5.5" fill="#F5B84B" stroke="none" /></g></g>
          <g className="s0-outcome">
            <rect x="170" y="272" width="140" height="24" rx="12" className="pr-outcome-pill" />
            <circle cx="187" cy="284" r="4" fill="#39E7EF" stroke="none" />
            <text x="199" y="288" className="pr-outcome-text">CLEAR DIRECTION</text>
          </g>
        </g>
      )}

      {/* 02 */}
      {index === 1 && (
        <g {...base}>
          <rect x="36" y="34" width="408" height="270" rx="15" className="pr-window" />
          <path d="M36 72 H444" className="pr-window-line" />
          <circle cx="59" cy="53" r="4" fill="#F5B84B" stroke="none" />
          <circle cx="75" cy="53" r="4" fill="#39E7EF" stroke="none" />
          <circle cx="91" cy="53" r="4" fill="white" opacity=".4" stroke="none" />
          <text x="113" y="57" className="pr-ui-label">SOLUTION BLUEPRINT</text>
          <rect x="37" y="73" width="406" height="230" rx="14" fill="url(#pr-grid)" stroke="none" />

          <text x="52" y="100" className="pr-ui-caption">SITE MAP</text>
          <g className="s1-root"><rect x="200" y="86" width="80" height="26" rx="7" className="pr-node-box" /><text x="240" y="103" textAnchor="middle" className="pr-t">Home</text></g>
          <path pathLength="1" d="M240 112 V123 M136 123 H344 M136 123 V134 M240 123 V134 M344 123 V134" className="pr-d s1-d1 pr-conn" />
          <g className="s1-kids">
            <rect x="98" y="134" width="76" height="26" rx="7" className="pr-node-box" /><text x="136" y="151" textAnchor="middle" className="pr-t">About</text>
            <rect x="202" y="134" width="76" height="26" rx="7" className="pr-node-box" /><text x="240" y="151" textAnchor="middle" className="pr-t">Services</text>
            <rect x="306" y="134" width="76" height="26" rx="7" className="pr-node-box" /><text x="344" y="151" textAnchor="middle" className="pr-t">Contact</text>
          </g>
          <g transform="translate(302 99)"><g className="s1-b1"><circle r="8" className="pr-badge" /><path d="M-3.5 0 L-1 2.6 L4 -3" className="pr-badge-ck" /></g></g>

          <text x="62" y="186" className="pr-ui-caption">KEY SCREENS</text>
          <g className="s1-fillw"><rect x="168" y="214" width="54" height="42" rx="4" fill="rgba(245,184,75,.2)" stroke="none" /><rect x="72" y="242" width="34" height="9" rx="3" fill="rgba(57,231,239,.55)" stroke="none" /></g>
          <g className="pr-wire">
            <rect pathLength="1" x="62" y="192" width="170" height="92" rx="6" className="pr-d s1-d2" />
            <path pathLength="1" d="M62 206 H232 M72 199 H96 M190 199 H204 M210 199 H222" className="pr-d s1-d2" />
            <path pathLength="1" d="M72 224 H150 M72 233 H130" className="pr-d s1-d2" />
            <rect pathLength="1" x="72" y="242" width="34" height="9" rx="3" className="pr-d s1-d2" />
            <rect pathLength="1" x="168" y="214" width="54" height="42" rx="4" className="pr-d s1-d2" />
            <path pathLength="1" d="M174 250 L188 233 L197 242 L208 227 L218 250" className="pr-d s1-d2" />
            <path pathLength="1" d="M72 262 H112 M122 262 H162 M172 262 H222 M72 272 H100 M122 272 H150 M172 272 H200" className="pr-d s1-d2" />
          </g>
          <g transform="translate(232 192)"><g className="s1-b2"><circle r="8" className="pr-badge" /><path d="M-3.5 0 L-1 2.6 L4 -3" className="pr-badge-ck" /></g></g>

          <text x="250" y="196" className="pr-ui-caption">WORKFLOW MAP</text>
          <g className="s1-nodes">
            <rect x="250" y="208" width="48" height="28" rx="6" className="pr-node-box" /><text x="274" y="226" textAnchor="middle" className="pr-tn">Trigger</text>
            <rect x="316" y="208" width="48" height="28" rx="6" className="pr-node-box" /><text x="340" y="226" textAnchor="middle" className="pr-tn">AI step</text>
            <rect x="382" y="208" width="48" height="28" rx="6" className="pr-node-box" /><text x="406" y="226" textAnchor="middle" className="pr-tn">Action</text>
          </g>
          <path pathLength="1" d="M298 222 H316 M312 218 L316 222 L312 226 M364 222 H382 M378 218 L382 222 L378 226" className="pr-d s1-d3 pr-conn" />
          <g className="s1-flow"><circle cx="250" cy="222" r="3.8" fill="#39E7EF" stroke="none" className="s1-flowdot" /></g>
          <g transform="translate(430 196)"><g className="s1-b3"><circle r="8" className="pr-badge" /><path d="M-3.5 0 L-1 2.6 L4 -3" className="pr-badge-ck" /></g></g>

          <g className="s1-stamp">
            <rect x="250" y="252" width="180" height="30" rx="15" className="pr-outcome-pill" />
            <circle cx="268" cy="267" r="5" fill="#39E7EF" stroke="none" />
            <text x="280" y="271" className="pr-outcome-text">PLAN SHARED &amp; AGREED</text>
          </g>

          <g transform="translate(110 176)"><g className="s1-cA"><path d="M0 0 L0 16 L4.5 11.5 L8.5 20 L12 18.4 L8 10 L14 10Z" fill="#fff" stroke="#08141a" strokeWidth="1.2" /><rect x="12" y="14" width="34" height="15" rx="7.5" fill="#39E7EF" stroke="none" /><text x="29" y="24.5" textAnchor="middle" className="pr-cur-t">YOU</text></g></g>
          <g transform="translate(400 168)"><g className="s1-cB"><path d="M0 0 L0 16 L4.5 11.5 L8.5 20 L12 18.4 L8 10 L14 10Z" fill="#fff" stroke="#08141a" strokeWidth="1.2" /><rect x="12" y="14" width="40" height="15" rx="7.5" fill="#F5B84B" stroke="none" /><text x="32" y="24.5" textAnchor="middle" className="pr-cur-t">TEAM</text></g></g>
        </g>
      )}

      {/* 03 */}
      {index === 2 && (
        <g {...base}>
          <rect x="36" y="34" width="408" height="270" rx="15" className="pr-window" />
          <path d="M36 72 H444" className="pr-window-line" />
          <circle cx="59" cy="53" r="4" fill="#F5B84B" stroke="none" />
          <circle cx="75" cy="53" r="4" fill="#39E7EF" stroke="none" />
          <circle cx="91" cy="53" r="4" fill="white" opacity=".4" stroke="none" />
          <text x="113" y="57" className="pr-ui-label">BUILDING IN ITERATIONS</text>
          <rect x="52" y="88" width="228" height="178" rx="8" className="pr-ui-card" />
          <path d="M52 106 H280" className="pr-window-line" />
          <circle cx="63" cy="97" r="2.8" fill="#F5B84B" stroke="none" /><circle cx="73" cy="97" r="2.8" fill="#39E7EF" stroke="none" />
          <g className="s2-it1">
            <rect x="62" y="112" width="12" height="10" rx="3" className="pr-wire-s" />
            <path d="M84 117 H110 M214 117 H230 M238 117 H258" className="pr-ui-line" />
            <rect x="62" y="130" width="208" height="52" rx="5" className="pr-hero" />
            <path d="M74 144 H160 M74 154 H138" className="pr-ui-line" />
            <rect className="s2-btn" x="74" y="164" width="40" height="10" rx="3" />
            <rect x="196" y="138" width="62" height="36" rx="4" className="pr-img" />
            <path d="M202 168 L216 152 L226 162 L238 147 L254 168" className="pr-ui-line" strokeWidth="1.8" />
          </g>
          <g className="s2-it2">
            <rect x="62" y="190" width="64" height="50" rx="5" className="pr-card-s" />
            <rect x="134" y="190" width="64" height="50" rx="5" className="pr-card-s" />
            <rect x="206" y="190" width="64" height="50" rx="5" className="pr-card-s" />
            <rect x="68" y="196" width="52" height="20" rx="3" className="pr-img" />
            <rect x="140" y="196" width="52" height="20" rx="3" className="pr-img" />
            <rect x="212" y="196" width="52" height="20" rx="3" className="pr-img" />
            <path d="M68 226 H110 M68 233 H98 M140 226 H182 M140 233 H170 M212 226 H254 M212 233 H242" className="pr-ui-line" strokeWidth="1.6" />
          </g>
          <g className="s2-it3">
            <rect x="190" y="204" width="84" height="56" rx="9" className="pr-chat" />
            <circle cx="204" cy="218" r="6" fill="rgba(57,231,239,.25)" stroke="#39E7EF" />
            <text x="215" y="221.5" className="pr-chip-t" style={{ fill: "#39E7EF" }}>AI AGENT</text>
            <path d="M198 232 H258" className="pr-ui-line" strokeWidth="1.8" />
            <circle cx="203" cy="246" r="2.3" className="s2-dot s2-dot1" fill="#39E7EF" stroke="none" />
            <circle cx="211" cy="246" r="2.3" className="s2-dot s2-dot2" fill="#39E7EF" stroke="none" />
            <circle cx="219" cy="246" r="2.3" className="s2-dot s2-dot3" fill="#39E7EF" stroke="none" />
            <path d="M242 246 L246 250 L254 241" stroke="#F5B84B" strokeWidth="2" />
          </g>
          <text x="52" y="288" className="pr-ui-caption">YOUR PRODUCT TAKES SHAPE · REVIEWED EVERY ITERATION</text>
          <rect x="296" y="94" width="132" height="40" rx="9" className="pr-ui-card" />
          <rect x="296" y="94" width="132" height="40" rx="9" className="pr-hl s2-act1" />
          <circle cx="313" cy="111" r="8" className="pr-ring" />
          <circle cx="313" cy="111" r="12" className="pr-spin s2-spin1" />
          <path d="M309 111 L312 114 L318 107" className="s2-ck s2-ck1" />
          <text x="331" y="111" className="pr-t" style={{ fontSize: 11.5 }}>Iteration 1</text>
          <text x="331" y="122" className="pr-tm" style={{ letterSpacing: 0, fontWeight: 600 }}>Web experience</text>
          <path d="M331 129 H420" className="pr-track" />
          <path pathLength="1" d="M331 129 H420" className="pr-d s2-bar s2-bar1" />
          <rect x="296" y="142" width="132" height="40" rx="9" className="pr-ui-card" />
          <rect x="296" y="142" width="132" height="40" rx="9" className="pr-hl s2-act2" />
          <circle cx="313" cy="159" r="8" className="pr-ring" />
          <circle cx="313" cy="159" r="12" className="pr-spin s2-spin2" />
          <path d="M309 159 L312 162 L318 155" className="s2-ck s2-ck2" />
          <text x="331" y="159" className="pr-t" style={{ fontSize: 11.5 }}>Iteration 2</text>
          <text x="331" y="170" className="pr-tm" style={{ letterSpacing: 0, fontWeight: 600 }}>Review & refine</text>
          <path d="M331 177 H420" className="pr-track" />
          <path pathLength="1" d="M331 177 H420" className="pr-d s2-bar s2-bar2" />
          <rect x="296" y="190" width="132" height="40" rx="9" className="pr-ui-card" />
          <rect x="296" y="190" width="132" height="40" rx="9" className="pr-hl s2-act3" />
          <circle cx="313" cy="207" r="8" className="pr-ring" />
          <circle cx="313" cy="207" r="12" className="pr-spin s2-spin3" />
          <path d="M309 207 L312 210 L318 203" className="s2-ck s2-ck3" />
          <text x="331" y="207" className="pr-t" style={{ fontSize: 11.5 }}>Iteration 3</text>
          <text x="331" y="218" className="pr-tm" style={{ letterSpacing: 0, fontWeight: 600 }}>AI + automation</text>
          <path d="M331 225 H420" className="pr-track" />
          <path pathLength="1" d="M331 225 H420" className="pr-d s2-bar s2-bar3" />
          <g className="s2-fb s2-fb1"><rect x="296" y="244" width="132" height="34" rx="9" className="pr-bub pr-bub-amber" />
            <circle cx="312" cy="261" r="8" fill="rgba(57,231,239,.18)" stroke="#39E7EF" /><circle cx="312" cy="258" r="2.6" stroke="#39E7EF" /><path d="M306.5 267 C306.5 262.5 317.5 262.5 317.5 267" stroke="#39E7EF" />
            <text x="327" y="265" className="pr-say" style={{ fontSize: 10 }}>Looks good, go on!</text></g>
          <g className="s2-fb s2-fb2"><rect x="296" y="244" width="132" height="34" rx="9" className="pr-bub pr-bub-amber" />
            <circle cx="312" cy="261" r="8" fill="rgba(57,231,239,.18)" stroke="#39E7EF" /><circle cx="312" cy="258" r="2.6" stroke="#39E7EF" /><path d="M306.5 267 C306.5 262.5 317.5 262.5 317.5 267" stroke="#39E7EF" />
            <text x="327" y="265" className="pr-say" style={{ fontSize: 10 }}>Make the button pop</text></g>
          <g className="s2-fb s2-fb3"><rect x="296" y="244" width="132" height="34" rx="9" className="pr-bub pr-bub-amber" />
            <circle cx="312" cy="261" r="8" fill="rgba(57,231,239,.18)" stroke="#39E7EF" /><circle cx="312" cy="258" r="2.6" stroke="#39E7EF" /><path d="M306.5 267 C306.5 262.5 317.5 262.5 317.5 267" stroke="#39E7EF" />
            <text x="327" y="265" className="pr-say" style={{ fontSize: 10 }}>Approved. Ship it!</text></g>
        </g>
      )}

      {/* 04 */}
      {index === 3 && (
        <g {...base}>
          <rect x="36" y="34" width="408" height="270" rx="15" className="pr-window" />
          <path d="M36 72 H444" className="pr-window-line" />
          <circle cx="59" cy="53" r="4" fill="#F5B84B" stroke="none" />
          <circle cx="75" cy="53" r="4" fill="#39E7EF" stroke="none" />
          <circle cx="91" cy="53" r="4" fill="white" opacity=".4" stroke="none" />
          <text x="113" y="57" className="pr-ui-label">LAUNCH DAY</text>
          <rect x="52" y="88" width="176" height="176" rx="10" className="pr-ui-card" />
          <text x="64" y="108" className="pr-ui-label">PRE-LAUNCH CHECKS</text>
          <path d="M52 116 H228" className="pr-window-line" />
          <rect x="64" y="126" width="16" height="16" rx="4" className="pr-ring" />
          <rect x="64" y="126" width="16" height="16" rx="4" className="s3-fill s3-fill0" />
          <path d="M67.5 134 L71 137.5 L77.5 129.5" className="s3-ck s3-ck0" />
          <text x="92" y="138.5" className="pr-row s3-row0">Speed</text>
          <rect x="64" y="152" width="16" height="16" rx="4" className="pr-ring" />
          <rect x="64" y="152" width="16" height="16" rx="4" className="s3-fill s3-fill1" />
          <path d="M67.5 160 L71 163.5 L77.5 155.5" className="s3-ck s3-ck1" />
          <text x="92" y="164.5" className="pr-row s3-row1">Security</text>
          <rect x="64" y="178" width="16" height="16" rx="4" className="pr-ring" />
          <rect x="64" y="178" width="16" height="16" rx="4" className="s3-fill s3-fill2" />
          <path d="M67.5 186 L71 189.5 L77.5 181.5" className="s3-ck s3-ck2" />
          <text x="92" y="190.5" className="pr-row s3-row2">Mobile</text>
          <rect x="64" y="204" width="16" height="16" rx="4" className="pr-ring" />
          <rect x="64" y="204" width="16" height="16" rx="4" className="s3-fill s3-fill3" />
          <path d="M67.5 212 L71 215.5 L77.5 207.5" className="s3-ck s3-ck3" />
          <text x="92" y="216.5" className="pr-row s3-row3">Content</text>
          <rect x="64" y="232" width="152" height="26" rx="8" className="pr-ui-card" />
          <rect x="64" y="232" width="152" height="26" rx="8" className="s3-prog" />
          <rect x="64" y="232" width="152" height="26" rx="8" className="s3-press" />
          <text x="140" y="249" textAnchor="middle" className="pr-t s3-t1">DEPLOY</text>
          <text x="140" y="249" textAnchor="middle" className="pr-t s3-t2">DEPLOYING…</text>
          <text x="140" y="249" textAnchor="middle" className="pr-t s3-t3" style={{ fill: "#39E7EF" }}>LIVE ✓</text>

          <path d="M228 245 H248" className="pr-conn s3-beam" />
          <rect x="248" y="88" width="180" height="176" rx="10" className="pr-ui-card" />
          <path d="M248 106 H428" className="pr-window-line" />
          <circle cx="259" cy="97" r="2.8" fill="#F5B84B" stroke="none" /><circle cx="269" cy="97" r="2.8" fill="#39E7EF" stroke="none" />
          <rect x="280" y="91" width="92" height="12" rx="6" className="pr-chip" />
          <text x="288" y="100.3" className="pr-chip-t" style={{ letterSpacing: 0 }}>enripeak.com</text>
          <rect x="258" y="116" width="160" height="50" rx="5" className="pr-hero" />
          <path d="M270 130 H350 M270 140 H322" className="pr-ui-line" />
          <rect x="270" y="152" width="40" height="9" rx="3" className="pr-wire-s" />
          <rect x="350" y="124" width="56" height="34" rx="4" className="pr-img" />
          <path d="M356 152 L368 138 L376 146 L386 134 L400 152" className="pr-ui-line" strokeWidth="1.8" />
          <rect x="258" y="176" width="44" height="40" rx="5" className="pr-card-s" />
          <rect x="316" y="176" width="44" height="40" rx="5" className="pr-card-s" />
          <rect x="374" y="176" width="44" height="40" rx="5" className="pr-card-s" />
          <path d="M264 204 H292 M322 204 H350 M380 204 H408" className="pr-ui-line" strokeWidth="1.6" />
          <g className="s3-visitors">
            <circle cx="268" cy="240" r="5" className="s3-vis s3-vis1" fill="#39E7EF" stroke="none" /><circle cx="283" cy="240" r="5" className="s3-vis s3-vis2" fill="#F5B84B" stroke="none" /><circle cx="298" cy="240" r="5" className="s3-vis s3-vis3" fill="#39E7EF" stroke="none" />
            <text x="312" y="244" className="pr-tm" style={{ letterSpacing: 0, fontWeight: 600 }}>first visitors arriving</text>
          </g>
          <g className="s3-staging"><rect x="249" y="107" width="178" height="156" rx="9" fill="rgba(8,20,24,.78)" stroke="none" /><text x="338" y="190" textAnchor="middle" className="pr-t" style={{ fill: "rgba(230,240,242,.55)", letterSpacing: ".18em" }}>STAGING</text></g>
          <g className="s3-live"><rect x="378" y="90" width="42" height="14" rx="7" fill="rgba(57,231,239,.18)" stroke="#39E7EF" /><circle cx="388" cy="97" r="2.8" fill="#39E7EF" stroke="none" className="s3-livedot" /><text x="395" y="100.5" className="pr-chip-t" style={{ fill: "#39E7EF" }}>LIVE</text></g>

          <g className="s3-handover">
            <rect x="120" y="272" width="240" height="26" rx="13" className="pr-outcome-pill" />
            <circle cx="140" cy="285" r="4.5" stroke="#F5B84B" /><path d="M144.5 285 H156 M152 285 V289.5" stroke="#F5B84B" />
            <text x="166" y="289" className="pr-outcome-text">HANDOVER · GUIDE + SUPPORT</text>
          </g>
        </g>
      )}

      {/* 05 */}
      {index === 4 && (
        <g {...base}>
          <rect x="36" y="34" width="408" height="270" rx="15" className="pr-window" />
          <path d="M36 72 H444" className="pr-window-line" />
          <circle cx="59" cy="53" r="4" fill="#F5B84B" stroke="none" />
          <circle cx="75" cy="53" r="4" fill="#39E7EF" stroke="none" />
          <circle cx="91" cy="53" r="4" fill="white" opacity=".4" stroke="none" />
          <text x="113" y="57" className="pr-ui-label">AFTER LAUNCH</text>
          <rect x="52" y="88" width="210" height="174" rx="10" className="pr-ui-card" />
          <text x="64" y="108" className="pr-ui-label">LIVE PERFORMANCE</text>
          <circle cx="248" cy="104" r="3.4" fill="#39E7EF" stroke="none" className="s4-live" />
          <path d="M66 240 H250 M66 120 V240" className="pr-window-line" />
          <path pathLength="1" d="M66 206 L92 196 L118 200 L144 188 L170 226" className="pr-d s4-lineA" />
          <path pathLength="1" d="M170 226 L196 222 L222 224 L248 220" className="pr-d s4-lineB" />
          <path pathLength="1" d="M170 226 L196 204 L222 176 L248 146" className="pr-d s4-lineC" />
          <circle cx="248" cy="146" r="4.5" fill="#F5B84B" stroke="none" className="s4-end" />

          <g className="s4-tag">
            <rect x="96" y="144" width="120" height="22" rx="7" className="pr-bub pr-bub-amber" />
            <text x="156" y="159" textAnchor="middle" className="pr-chip-t" style={{ fill: "#F5B84B" }}>USERS DROP OFF HERE</text>
            <path d="M162 166 L169 218" stroke="rgba(245,184,75,.7)" strokeDasharray="3 4" />
          </g>
          <g transform="translate(170 226)"><g className="s4-pin">
            <circle r="13" className="pr-lens" /><path d="M10 10 L19 19" stroke="#39E7EF" strokeWidth="2.6" />
          </g></g>
          <g className="s4-fixed">
            <rect x="96" y="144" width="120" height="22" rx="7" className="pr-chip" />
            <text x="156" y="159" textAnchor="middle" className="pr-chip-t" style={{ fill: "#39E7EF" }}>FIXED · GROWING ↗</text>
          </g>
          <g className="s4-update">
            <rect x="176" y="244" width="78" height="14" rx="7" fill="#F5B84B" stroke="none" />
            <text x="215" y="254" textAnchor="middle" className="pr-cur-t">UPDATE v1.1</text>
          </g>
          <text x="52" y="288" className="pr-ui-caption">LEARNING FROM REAL USAGE</text>
          <rect x="284" y="94" width="144" height="32" rx="9" className="pr-ui-card" />
          <rect x="284" y="94" width="144" height="32" rx="9" className="pr-hl s4-chip1" />
          <circle cx="301" cy="110" r="9" className="pr-ring" />
          <text x="301" y="113.8" textAnchor="middle" className="pr-chip-t" style={{ fontSize: 10 }}>1</text>
          <text x="319" y="114" className="pr-t">MONITOR</text>
          <rect x="284" y="138" width="144" height="32" rx="9" className="pr-ui-card" />
          <rect x="284" y="138" width="144" height="32" rx="9" className="pr-hl s4-chip2" />
          <circle cx="301" cy="154" r="9" className="pr-ring" />
          <text x="301" y="157.8" textAnchor="middle" className="pr-chip-t" style={{ fontSize: 10 }}>2</text>
          <text x="319" y="158" className="pr-t">LEARN</text>
          <rect x="284" y="182" width="144" height="32" rx="9" className="pr-ui-card" />
          <rect x="284" y="182" width="144" height="32" rx="9" className="pr-hl s4-chip3" />
          <circle cx="301" cy="198" r="9" className="pr-ring" />
          <text x="301" y="201.8" textAnchor="middle" className="pr-chip-t" style={{ fontSize: 10 }}>3</text>
          <text x="319" y="202" className="pr-t">IMPROVE</text>
          <path d="M428 194 H438 V110 H430 M434 106 L430 110 L434 114" className="pr-loop s4-loop" />
          <text x="284" y="238" className="pr-ui-caption">NEXT UP</text>
          <g className="s4-n1"><circle cx="290" cy="254" r="3.4" fill="#39E7EF" stroke="none" /><text x="302" y="258" className="pr-say" style={{ fontSize: 11 }}>Faster checkout</text></g>
          <g className="s4-n2"><circle cx="290" cy="270" r="3.4" fill="#F5B84B" stroke="none" /><text x="302" y="274" className="pr-say" style={{ fontSize: 11 }}>New landing page</text></g>
          <g className="s4-n3"><circle cx="290" cy="286" r="3.4" fill="#39E7EF" stroke="none" /><text x="302" y="290" className="pr-say" style={{ fontSize: 11 }}>AI follow-up</text></g>
        </g>
      )}
    </svg>
  );
}

export default function Process() {
  const root = useRef<HTMLElement>(null);

  useGSAP(() => {
    let activeIndex = -1;

    const activate = (index: number) => {
      const safeIndex = Math.max(0, Math.min(STEPS.length - 1, index));

      root.current?.querySelectorAll(".process-step").forEach((step, i) => {
        step.classList.toggle("is-active", i === safeIndex);
        step.classList.toggle("is-complete", i < safeIndex);
      });

      root.current?.querySelectorAll(".process-visual").forEach((visual, i) => {
        visual.classList.toggle("is-visible", i === safeIndex);
        visual.setAttribute("aria-hidden", i === safeIndex ? "false" : "true");
      });

      const fill = root.current?.querySelector<HTMLElement>(".process-fill");

      if (fill) {
        gsap.to(fill, {
          height: `${(safeIndex / (STEPS.length - 1)) * 100}%`,
          duration: 0.55,
          ease: "power2.out",
          overwrite: true,
        });
      }

      if (safeIndex !== activeIndex) {
        activeIndex = safeIndex;

        const activeVisual =
          root.current?.querySelectorAll<HTMLElement>(".process-visual")[safeIndex];

        if (activeVisual) {
          gsap.fromTo(
            activeVisual,
            { y: 22, scale: 0.965 },
            { y: 0, scale: 1, duration: 0.68, ease: "power3.out", overwrite: true }
          );
        }
      }
    };

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
      activate(0);

      ScrollTrigger.create({
        trigger: ".process-pin-stage",
        start: "top top+=8",
        end: () => `+=${window.innerHeight * STEPS.length * 0.82}`,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        scrub: false,
        onUpdate: (self) =>
          activate(Math.min(STEPS.length - 1, Math.floor(self.progress * STEPS.length))),
      });

      activate(0);
    });

    mm.add("(max-width: 1023px), (prefers-reduced-motion: reduce)", () => activate(0));

    return () => mm.revert();
  }, { scope: root });

  return (
    <section id="process" ref={root} className="relative overflow-hidden px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="How we work"
          title={<>A thoughtful path from idea to <span className="font-serif font-normal italic text-gradient">what’s next.</span></>}
        />

        <p className="mt-6 max-w-2xl text-base leading-7 text-white/55">
          A good result comes from a clear process and a close working relationship. Here is how we take an idea from the first conversation through launch and beyond.
        </p>

        {/* Desktop: pinned scroll journey */}
        <div className="process-pin-stage relative mt-12 hidden min-h-[min(78vh,760px)] items-center lg:grid lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
          <div className="process-list relative py-5 pl-[4.5rem]">
            <span className="absolute bottom-7 left-[23px] top-7 w-px bg-white/10" />
            <span
              className="process-fill absolute left-[23px] top-7 w-px bg-gradient-to-b from-brand-cyan via-brand-cyan to-brand-amber"
              style={{ height: "0%", boxShadow: "0 0 16px rgba(57,231,239,.55)" }}
            />

            {STEPS.map((step, i) => (
              <div
                key={step.t}
                className={`process-step relative flex min-h-[116px] flex-col justify-center border-b border-white/[.06] py-4 last:border-0 ${i === 0 ? "is-active" : ""}`}
              >
                <span className="process-node absolute -left-[4.5rem] top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-[#0b1114] font-heading text-sm font-bold text-white/45 transition-all duration-500">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <p className="text-[10px] font-semibold uppercase tracking-[.2em] text-brand-cyan/70">
                  {step.cue}
                </p>

                <h3 className="mt-2 font-heading text-xl font-extrabold text-white xl:text-2xl">
                  {step.t}
                </h3>

                <p className="mt-2 max-w-xl text-xs leading-6 text-white/45 xl:text-sm">
                  {step.d}
                </p>
              </div>
            ))}
          </div>

          <div className="process-visual-stage relative flex min-h-[min(70vh,620px)] items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-white/[.025] p-8">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(57,231,239,.10),transparent_58%)]" />
            <div className="pointer-events-none absolute inset-5 rounded-2xl border border-white/[.045]" />

            {STEPS.map((step, i) => (
              <div
                key={step.t}
                className={`process-visual absolute inset-8 flex flex-col items-center justify-center ${i === 0 ? "is-visible" : ""}`}
                aria-hidden={i !== 0}
              >
                <div className="w-full max-w-[470px]">
                  <ProcessSketch index={i} />
                </div>

                <div className="mt-2 text-center">
                  <p className="text-[10px] font-semibold uppercase tracking-[.22em] text-brand-cyan">
                    Step {String(i + 1).padStart(2, "0")} / 05
                  </p>

                  <h4 className="mt-2 font-heading text-2xl font-bold text-white">
                    {step.t}
                  </h4>

                  <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-white/45">
                    {step.cue}
                  </p>
                </div>
              </div>
            ))}

            <div className="absolute bottom-5 right-6 text-[9px] uppercase tracking-[.2em] text-white/25">
              EnriPeak / Working together
            </div>
          </div>

          <p className="absolute -bottom-9 left-0 text-[9px] uppercase tracking-[.2em] text-white/25">
            Scroll to explore each stage <span className="ml-2 text-brand-cyan">↓</span>
          </p>
        </div>

        {/* Mobile/tablet: natural-flow version */}
        <div className="mt-12 grid gap-5 lg:hidden">
          {STEPS.map((step, i) => (
            <article key={step.t} className="rounded-2xl border border-white/10 bg-white/[.025] p-5 sm:p-7">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full border border-brand-cyan/30 bg-brand-cyan/10 font-heading text-xs font-bold text-brand-cyan">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[.18em] text-brand-cyan/70">
                    {step.cue}
                  </p>
                  <h3 className="mt-1 font-heading text-xl font-bold text-white">
                    {step.t}
                  </h3>
                </div>
              </div>

              <p className="mt-4 text-sm leading-7 text-white/55">
                {step.d}
              </p>

              <div className="process-mobile-art mx-auto mt-5 max-w-[360px]">
                <ProcessSketch index={i} />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-brand-cyan/20 bg-brand-cyan/[.04] p-6">
          <p className="text-xs font-semibold uppercase tracking-[.2em] text-brand-cyan">
            Our promise
          </p>
          <p className="mt-2 font-heading text-xl font-bold text-white">
            No black boxes. No disappearing after launch.
          </p>
          <p className="mt-2 text-sm leading-6 text-white/55">
            You know what is happening, why it matters and what comes next at every stage.
          </p>
        </div>
      </div>

      <style jsx global>{`
        .process-step .process-node {
          box-shadow: 0 0 0 0 rgba(57,231,239,0);
        }

        .process-step.is-active .process-node {
          color: #061114;
          border-color: #39e7ef;
          background: #39e7ef;
          box-shadow: 0 0 0 7px rgba(57,231,239,.08), 0 0 24px rgba(57,231,239,.42);
        }

        .process-step.is-active h3 {
          color: #fff;
          transform: translateX(4px);
        }

        .process-step.is-complete .process-node {
          color: #f5b84b;
          border-color: rgba(245,184,75,.55);
          background: rgba(245,184,75,.08);
        }

        .process-step:not(.is-active) h3 {
          color: rgba(255,255,255,.55);
          transition: color .4s ease;
        }

        .process-visual {
          visibility: hidden;
          transition: opacity .55s ease, visibility .55s;
        }

        .process-visual.is-visible {
          opacity: 1;
          visibility: visible;
          transform: translateY(0) scale(1);
        }

        .process-visual:not(.is-visible) {
          transform: translateY(18px) scale(.97);
          pointer-events: none;
        }

        .process-scene {
          color: rgba(225,235,238,.82);
          overflow: visible;
        }

        .process-scene path,
        .process-scene circle,
        .process-scene rect,
        .process-scene text {
          vector-effect: non-scaling-stroke;
        }

        /* Shared UI styling */
        .pr-window {
          fill: rgba(8,20,24,.8);
          stroke: rgba(255,255,255,.17);
        }

        .pr-window-line {
          stroke: rgba(255,255,255,.14);
        }

        .pr-ui-label {
          fill: rgba(225,235,238,.55);
          stroke: none;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: .17em;
        }

        .pr-ui-caption {
          fill: rgba(225,235,238,.38);
          stroke: none;
          font-size: 8px;
          font-weight: 700;
          letter-spacing: .12em;
        }

        .pr-ui-card {
          fill: rgba(255,255,255,.035);
          stroke: rgba(255,255,255,.2);
        }

        .pr-ui-line {
          stroke: rgba(255,255,255,.3);
          stroke-width: 2;
        }

        /* shared scene styling */
        .process-scene .pr-d { vector-effect: none; }
        .pr-d { stroke-dasharray: 1; stroke-dashoffset: 0; }
        .pr-t { fill: rgba(236,244,246,.9); stroke: none; font-size: 12px; font-weight: 700; }
        .pr-tn { fill: rgba(236,244,246,.9); stroke: none; font-size: 9.5px; font-weight: 700; }
        .pr-tm { fill: rgba(230,240,242,.5); stroke: none; font-size: 10px; font-weight: 700; letter-spacing: .1em; }
        .pr-say { fill: #E9F2F4; stroke: none; font-size: 11px; font-weight: 700; }
        .pr-row { fill: rgba(236,244,246,.92); stroke: none; font-size: 12px; font-weight: 700; }
        .pr-cur-t { fill: #08141a; stroke: none; font-size: 9px; font-weight: 800; letter-spacing: .04em; }
        .pr-chip { fill: rgba(57,231,239,.1); stroke: rgba(57,231,239,.5); }
        .pr-chip-t { fill: rgba(236,244,246,.9); stroke: none; font-size: 9px; font-weight: 800; letter-spacing: .1em; }
        .pr-bub { fill: rgba(16,25,29,.96); stroke: rgba(57,231,239,.55); stroke-width: 1.6; }
        .pr-bub-amber { stroke: rgba(245,184,75,.7); }
        .pr-bub-tail { fill: rgba(16,25,29,.96); stroke: rgba(57,231,239,.55); stroke-width: 1.6; }
        .pr-ring { fill: none; stroke: rgba(255,255,255,.32); stroke-width: 1.8; }
        .pr-node-box { fill: rgba(57,231,239,.07); stroke: rgba(57,231,239,.5); }
        .pr-conn { stroke: #39E7EF; stroke-width: 1.8; }
        .pr-badge { fill: rgba(57,231,239,.18); stroke: #39E7EF; stroke-width: 1.6; }
        .pr-badge-ck { stroke: #39E7EF; stroke-width: 2.2; }
        .pr-wire { stroke: rgba(225,235,238,.8); }
        .pr-wire-s { fill: rgba(57,231,239,.25); stroke: #39E7EF; }
        .pr-hero { fill: rgba(57,231,239,.09); stroke: rgba(255,255,255,.2); }
        .pr-img { fill: rgba(245,184,75,.2); stroke: rgba(245,184,75,.55); }
        .pr-card-s { fill: rgba(255,255,255,.035); stroke: rgba(255,255,255,.2); }
        .pr-chat { fill: rgba(8,20,24,.97); stroke: rgba(57,231,239,.65); stroke-width: 1.6; }
        .pr-track { stroke: rgba(255,255,255,.14); stroke-width: 3; }
        .pr-hl { fill: rgba(57,231,239,.1); stroke: #39E7EF; stroke-width: 1.8; opacity: 0; }
        .pr-spin { fill: none; stroke: #39E7EF; stroke-width: 1.8; stroke-dasharray: 5 6; opacity: 0; transform-box: fill-box; transform-origin: center; }
        .pr-outcome-pill { fill: rgba(57,231,239,.1); stroke: rgba(57,231,239,.5); }
        .pr-outcome-text { fill: #39E7EF; stroke: none; font-size: 10.5px; font-weight: 800; letter-spacing: .12em; }
        .pr-lens { fill: rgba(57,231,239,.08); stroke: #39E7EF; stroke-width: 2.4; }
        .pr-loop { fill: none; stroke: #F5B84B; stroke-width: 2; }

        /* base = the finished picture (also what reduced-motion users see) */
        .s0-w1, .s0-w2, .s0-w3, .s0-pk0, .s0-pk1, .s0-pk2, .s0-pk3 { opacity: 0; }
        .s0-ck0, .s0-ck1, .s0-ck2, .s0-ck3 { stroke: #39E7EF; stroke-width: 2.2; }
        .s0-fill0, .s0-fill1, .s0-fill2, .s0-fill3 { fill: rgba(57,231,239,.22); stroke: #39E7EF; }
        .s0-bar0, .s0-bar1, .s0-bar2, .s0-bar3 { stroke: rgba(57,231,239,.55); stroke-width: 3; }
        .s0-eq { transform-box: fill-box; transform-origin: 50% 100%; }
        .s1-flow, .s1-cA, .s1-cB { opacity: 0; }
        .s1-flowdot { opacity: 1; }
        .s2-ck { stroke: #39E7EF; stroke-width: 2.2; }
        .s2-bar { stroke: #39E7EF; stroke-width: 3; }
        .s2-spin1, .s2-spin2, .s2-spin3, .s2-fb1, .s2-fb2 { opacity: 0; }
        .s2-btn { fill: rgba(245,184,75,.85); stroke: #F5B84B; }
        .s3-ck { stroke: #39E7EF; stroke-width: 2.2; }
        .s3-fill { fill: rgba(57,231,239,.22); stroke: #39E7EF; }
        .s3-prog { fill: rgba(57,231,239,.3); stroke: #39E7EF; transform-box: fill-box; transform-origin: 0% 50%; }
        .s3-press, .s3-t1, .s3-t2, .s3-staging, .s3-beam { opacity: 0; }
        .s3-beam { stroke-dasharray: 3 4; }
        .s4-lineA { stroke: rgba(225,235,238,.85); stroke-width: 2.4; }
        .s4-lineB { stroke: rgba(225,235,238,.85); stroke-width: 2.4; opacity: .18; }
        .s4-lineC { stroke: #39E7EF; stroke-width: 3.2; }
        .s4-tag, .s4-pin, .s4-update { opacity: 0; }
        .s4-pin, .s4-tag { transform-box: fill-box; transform-origin: center; }
        .s4-loop { opacity: .3; }

        /* each scene's story plays from its first step whenever that scene becomes the active one */
        .process-visual.is-visible .s0-w1,
        .process-mobile-art .s0-w1 { animation: s0W1 10s ease-in-out infinite; }
        .process-visual.is-visible .s0-pk0,
        .process-mobile-art .s0-pk0 { animation: s0Pk0 10s ease-in-out infinite; }
        .process-visual.is-visible .s0-ck0,
        .process-mobile-art .s0-ck0 { animation: s0Ck0 10s ease-in-out infinite; }
        .process-visual.is-visible .s0-fill0,
        .process-mobile-art .s0-fill0 { animation: s0Fill0 10s ease-in-out infinite; }
        .process-visual.is-visible .s0-row0,
        .process-mobile-art .s0-row0 { animation: s0Row0 10s ease-in-out infinite; }
        .process-visual.is-visible .s0-bar0,
        .process-mobile-art .s0-bar0 { animation: s0Bar0 10s ease-in-out infinite; }
        .process-visual.is-visible .s0-w2,
        .process-mobile-art .s0-w2 { animation: s0W2 10s ease-in-out infinite; }
        .process-visual.is-visible .s0-pk1,
        .process-mobile-art .s0-pk1 { animation: s0Pk1 10s ease-in-out infinite; }
        .process-visual.is-visible .s0-ck1,
        .process-mobile-art .s0-ck1 { animation: s0Ck1 10s ease-in-out infinite; }
        .process-visual.is-visible .s0-fill1,
        .process-mobile-art .s0-fill1 { animation: s0Fill1 10s ease-in-out infinite; }
        .process-visual.is-visible .s0-row1,
        .process-mobile-art .s0-row1 { animation: s0Row1 10s ease-in-out infinite; }
        .process-visual.is-visible .s0-bar1,
        .process-mobile-art .s0-bar1 { animation: s0Bar1 10s ease-in-out infinite; }
        .process-visual.is-visible .s0-w3,
        .process-mobile-art .s0-w3 { animation: s0W3 10s ease-in-out infinite; }
        .process-visual.is-visible .s0-pk2,
        .process-mobile-art .s0-pk2 { animation: s0Pk2 10s ease-in-out infinite; }
        .process-visual.is-visible .s0-ck2,
        .process-mobile-art .s0-ck2 { animation: s0Ck2 10s ease-in-out infinite; }
        .process-visual.is-visible .s0-fill2,
        .process-mobile-art .s0-fill2 { animation: s0Fill2 10s ease-in-out infinite; }
        .process-visual.is-visible .s0-row2,
        .process-mobile-art .s0-row2 { animation: s0Row2 10s ease-in-out infinite; }
        .process-visual.is-visible .s0-bar2,
        .process-mobile-art .s0-bar2 { animation: s0Bar2 10s ease-in-out infinite; }
        .process-visual.is-visible .s0-w4,
        .process-mobile-art .s0-w4 { animation: s0W4 10s ease-in-out infinite; }
        .process-visual.is-visible .s0-pk3,
        .process-mobile-art .s0-pk3 { animation: s0Pk3 10s ease-in-out infinite; }
        .process-visual.is-visible .s0-ck3,
        .process-mobile-art .s0-ck3 { animation: s0Ck3 10s ease-in-out infinite; }
        .process-visual.is-visible .s0-fill3,
        .process-mobile-art .s0-fill3 { animation: s0Fill3 10s ease-in-out infinite; }
        .process-visual.is-visible .s0-row3,
        .process-mobile-art .s0-row3 { animation: s0Row3 10s ease-in-out infinite; }
        .process-visual.is-visible .s0-bar3,
        .process-mobile-art .s0-bar3 { animation: s0Bar3 10s ease-in-out infinite; }
        .process-visual.is-visible .s0-chips,
        .process-mobile-art .s0-chips { animation: s0Chips 10s ease-in-out infinite; }
        .process-visual.is-visible .s0-outcome,
        .process-mobile-art .s0-outcome { animation: s0Outcome 10s ease-in-out infinite; }
        .process-visual.is-visible .s0-eq1,
        .process-mobile-art .s0-eq1 { animation: s0Eq .9s ease-in-out infinite; }
        .process-visual.is-visible .s0-eq2,
        .process-mobile-art .s0-eq2 { animation: s0Eq .9s ease-in-out infinite .3s; }
        .process-visual.is-visible .s0-eq3,
        .process-mobile-art .s0-eq3 { animation: s0Eq .9s ease-in-out infinite .6s; }
        .process-visual.is-visible .s1-root,
        .process-mobile-art .s1-root { animation: s1Root 11s ease-in-out infinite; }
        .process-visual.is-visible .s1-kids,
        .process-mobile-art .s1-kids { animation: s1Kids 11s ease-in-out infinite; }
        .process-visual.is-visible .s1-nodes,
        .process-mobile-art .s1-nodes { animation: s1Nodes 11s ease-in-out infinite; }
        .process-visual.is-visible .s1-stamp,
        .process-mobile-art .s1-stamp { animation: s1Stamp 11s ease-in-out infinite; }
        .process-visual.is-visible .s1-flow,
        .process-mobile-art .s1-flow { animation: s1Flow 11s ease-in-out infinite; }
        .process-visual.is-visible .s1-b1,
        .process-mobile-art .s1-b1 { animation: s1B1 11s ease-in-out infinite; }
        .process-visual.is-visible .s1-b2,
        .process-mobile-art .s1-b2 { animation: s1B2 11s ease-in-out infinite; }
        .process-visual.is-visible .s1-b3,
        .process-mobile-art .s1-b3 { animation: s1B3 11s ease-in-out infinite; }
        .process-visual.is-visible .s1-fillw,
        .process-mobile-art .s1-fillw { animation: s1Fillw 11s ease-in-out infinite; }
        .process-visual.is-visible .s1-d1,
        .process-mobile-art .s1-d1 { animation: s1D1 11s ease-in-out infinite; }
        .process-visual.is-visible .s1-d2,
        .process-mobile-art .s1-d2 { animation: s1D2 11s ease-in-out infinite; }
        .process-visual.is-visible .s1-d3,
        .process-mobile-art .s1-d3 { animation: s1D3 11s ease-in-out infinite; }
        .process-visual.is-visible .s1-flowdot,
        .process-mobile-art .s1-flowdot { animation: s1FlowDot 1.9s linear infinite; }
        .process-visual.is-visible .s1-cA,
        .process-mobile-art .s1-cA { animation: s1CA 11s ease-in-out infinite; }
        .process-visual.is-visible .s1-cB,
        .process-mobile-art .s1-cB { animation: s1CB 11s ease-in-out infinite; }
        .process-visual.is-visible .s2-it1,
        .process-mobile-art .s2-it1 { animation: s2It1 12s ease-in-out infinite; }
        .process-visual.is-visible .s2-bar1,
        .process-mobile-art .s2-bar1 { animation: s2Bar1 12s ease-in-out infinite; }
        .process-visual.is-visible .s2-spin1,
        .process-mobile-art .s2-spin1 { animation: s2Spin1 12s linear infinite; }
        .process-visual.is-visible .s2-ck1,
        .process-mobile-art .s2-ck1 { animation: s2Ck1 12s ease-in-out infinite; }
        .process-visual.is-visible .s2-fb1,
        .process-mobile-art .s2-fb1 { animation: s2Fb1 12s ease-in-out infinite; }
        .process-visual.is-visible .s2-act1,
        .process-mobile-art .s2-act1 { animation: s2Act1 12s ease-in-out infinite; }
        .process-visual.is-visible .s2-it2,
        .process-mobile-art .s2-it2 { animation: s2It2 12s ease-in-out infinite; }
        .process-visual.is-visible .s2-bar2,
        .process-mobile-art .s2-bar2 { animation: s2Bar2 12s ease-in-out infinite; }
        .process-visual.is-visible .s2-spin2,
        .process-mobile-art .s2-spin2 { animation: s2Spin2 12s linear infinite; }
        .process-visual.is-visible .s2-ck2,
        .process-mobile-art .s2-ck2 { animation: s2Ck2 12s ease-in-out infinite; }
        .process-visual.is-visible .s2-fb2,
        .process-mobile-art .s2-fb2 { animation: s2Fb2 12s ease-in-out infinite; }
        .process-visual.is-visible .s2-act2,
        .process-mobile-art .s2-act2 { animation: s2Act2 12s ease-in-out infinite; }
        .process-visual.is-visible .s2-it3,
        .process-mobile-art .s2-it3 { animation: s2It3 12s ease-in-out infinite; }
        .process-visual.is-visible .s2-bar3,
        .process-mobile-art .s2-bar3 { animation: s2Bar3 12s ease-in-out infinite; }
        .process-visual.is-visible .s2-spin3,
        .process-mobile-art .s2-spin3 { animation: s2Spin3 12s linear infinite; }
        .process-visual.is-visible .s2-ck3,
        .process-mobile-art .s2-ck3 { animation: s2Ck3 12s ease-in-out infinite; }
        .process-visual.is-visible .s2-fb3,
        .process-mobile-art .s2-fb3 { animation: s2Fb3 12s ease-in-out infinite; }
        .process-visual.is-visible .s2-act3,
        .process-mobile-art .s2-act3 { animation: s2Act3 12s ease-in-out infinite; }
        .process-visual.is-visible .s2-btn,
        .process-mobile-art .s2-btn { animation: s2Btn 12s ease-in-out infinite; }
        .process-visual.is-visible .s2-dot,
        .process-mobile-art .s2-dot { animation: s2Dot .9s ease-in-out infinite; }
        .process-visual.is-visible .s2-dot2,
        .process-mobile-art .s2-dot2 { animation-delay: .2s; }
        .process-visual.is-visible .s2-dot3,
        .process-mobile-art .s2-dot3 { animation-delay: .4s; }
        .process-visual.is-visible .s3-ck0,
        .process-mobile-art .s3-ck0 { animation: s3Ck0 10s ease-in-out infinite; }
        .process-visual.is-visible .s3-fill0,
        .process-mobile-art .s3-fill0 { animation: s3Fill0 10s ease-in-out infinite; }
        .process-visual.is-visible .s3-row0,
        .process-mobile-art .s3-row0 { animation: s3Row0 10s ease-in-out infinite; }
        .process-visual.is-visible .s3-ck1,
        .process-mobile-art .s3-ck1 { animation: s3Ck1 10s ease-in-out infinite; }
        .process-visual.is-visible .s3-fill1,
        .process-mobile-art .s3-fill1 { animation: s3Fill1 10s ease-in-out infinite; }
        .process-visual.is-visible .s3-row1,
        .process-mobile-art .s3-row1 { animation: s3Row1 10s ease-in-out infinite; }
        .process-visual.is-visible .s3-ck2,
        .process-mobile-art .s3-ck2 { animation: s3Ck2 10s ease-in-out infinite; }
        .process-visual.is-visible .s3-fill2,
        .process-mobile-art .s3-fill2 { animation: s3Fill2 10s ease-in-out infinite; }
        .process-visual.is-visible .s3-row2,
        .process-mobile-art .s3-row2 { animation: s3Row2 10s ease-in-out infinite; }
        .process-visual.is-visible .s3-ck3,
        .process-mobile-art .s3-ck3 { animation: s3Ck3 10s ease-in-out infinite; }
        .process-visual.is-visible .s3-fill3,
        .process-mobile-art .s3-fill3 { animation: s3Fill3 10s ease-in-out infinite; }
        .process-visual.is-visible .s3-row3,
        .process-mobile-art .s3-row3 { animation: s3Row3 10s ease-in-out infinite; }
        .process-visual.is-visible .s3-vis1,
        .process-mobile-art .s3-vis1 { animation: s3Vis1 10s ease-out infinite; }
        .process-visual.is-visible .s3-vis2,
        .process-mobile-art .s3-vis2 { animation: s3Vis2 10s ease-out infinite; }
        .process-visual.is-visible .s3-vis3,
        .process-mobile-art .s3-vis3 { animation: s3Vis3 10s ease-out infinite; }
        .process-visual.is-visible .s3-press,
        .process-mobile-art .s3-press { animation: s3Press 10s ease-in-out infinite; }
        .process-visual.is-visible .s3-prog,
        .process-mobile-art .s3-prog { animation: s3Prog 10s ease-in-out infinite; }
        .process-visual.is-visible .s3-t1,
        .process-mobile-art .s3-t1 { animation: s3T1 10s ease-in-out infinite; }
        .process-visual.is-visible .s3-t2,
        .process-mobile-art .s3-t2 { animation: s3T2 10s ease-in-out infinite; }
        .process-visual.is-visible .s3-t3,
        .process-mobile-art .s3-t3 { animation: s3T3 10s ease-in-out infinite; }
        .process-visual.is-visible .s3-staging,
        .process-mobile-art .s3-staging { animation: s3Staging 10s ease-in-out infinite; }
        .process-visual.is-visible .s3-live,
        .process-mobile-art .s3-live { animation: s3Live 10s ease-in-out infinite; }
        .process-visual.is-visible .s3-handover,
        .process-mobile-art .s3-handover { animation: s3Handover 10s ease-in-out infinite; }
        .process-visual.is-visible .s3-visitors,
        .process-mobile-art .s3-visitors { animation: s3Visitors 10s ease-in-out infinite; }
        .process-visual.is-visible .s3-beam,
        .process-mobile-art .s3-beam { animation: s3Beam 10s ease-in-out infinite; }
        .process-visual.is-visible .s3-livedot,
        .process-mobile-art .s3-livedot { animation: s3Pulse 1s ease-in-out infinite; }
        .process-visual.is-visible .s4-lineA,
        .process-mobile-art .s4-lineA { animation: s4LineA 11s ease-in-out infinite; }
        .process-visual.is-visible .s4-lineB,
        .process-mobile-art .s4-lineB { animation: s4LineB 11s ease-in-out infinite; }
        .process-visual.is-visible .s4-lineC,
        .process-mobile-art .s4-lineC { animation: s4LineC 11s ease-in-out infinite; }
        .process-visual.is-visible .s4-tag,
        .process-mobile-art .s4-tag { animation: s4Tag 11s ease-in-out infinite; }
        .process-visual.is-visible .s4-pin,
        .process-mobile-art .s4-pin { animation: s4Pin 11s ease-in-out infinite; }
        .process-visual.is-visible .s4-fixed,
        .process-mobile-art .s4-fixed { animation: s4Fixed 11s ease-in-out infinite; }
        .process-visual.is-visible .s4-update,
        .process-mobile-art .s4-update { animation: s4Update 11s ease-in-out infinite; }
        .process-visual.is-visible .s4-end,
        .process-mobile-art .s4-end { animation: s4End 11s ease-in-out infinite; }
        .process-visual.is-visible .s4-chip1,
        .process-mobile-art .s4-chip1 { animation: s4Chip1 11s ease-in-out infinite; }
        .process-visual.is-visible .s4-chip2,
        .process-mobile-art .s4-chip2 { animation: s4Chip2 11s ease-in-out infinite; }
        .process-visual.is-visible .s4-chip3,
        .process-mobile-art .s4-chip3 { animation: s4Chip3 11s ease-in-out infinite; }
        .process-visual.is-visible .s4-loop,
        .process-mobile-art .s4-loop { animation: s4Loop 11s ease-in-out infinite; }
        .process-visual.is-visible .s4-n1,
        .process-mobile-art .s4-n1 { animation: s4N1 11s ease-in-out infinite; }
        .process-visual.is-visible .s4-n2,
        .process-mobile-art .s4-n2 { animation: s4N2 11s ease-in-out infinite; }
        .process-visual.is-visible .s4-n3,
        .process-mobile-art .s4-n3 { animation: s4N3 11s ease-in-out infinite; }
        .process-visual.is-visible .s4-live,
        .process-mobile-art .s4-live { animation: s4Live 1s ease-in-out infinite; }

        @keyframes s0W1 {
          0% { opacity:0;transform:translateY(6px); }
          2.5% { opacity:0;transform:translateY(6px); }
          4% { opacity:1;transform:none; }
          21% { opacity:1;transform:none; }
          23% { opacity:0;transform:translateY(-4px); }
          100% { opacity:0;transform:translateY(-4px); }
        }
        @keyframes s0Pk0 {
          0% { opacity:0;transform:none }
          10% { opacity:0;transform:none }
          11% { opacity:1;transform:none }
          17% { opacity:1;transform:translate(88px,29px) }
          18% { opacity:0;transform:translate(88px,29px) }
          100% { opacity:0;transform:translate(88px,29px) }
        }
        @keyframes s0Ck0 {
          0% { opacity:0 }
          17% { opacity:0 }
          18% { opacity:1 }
          97% { opacity:1 }
          100% { opacity:0 }
        }
        @keyframes s0Fill0 {
          0% { opacity:0 }
          17% { opacity:0 }
          18% { opacity:1 }
          97% { opacity:1 }
          100% { opacity:0 }
        }
        @keyframes s0Row0 {
          0% { opacity:.4 }
          17% { opacity:.4 }
          18% { opacity:1 }
          97% { opacity:1 }
          100% { opacity:.4 }
        }
        @keyframes s0Bar0 {
          0% { stroke-dashoffset:1;opacity:1 }
          18% { stroke-dashoffset:1;opacity:1 }
          23% { stroke-dashoffset:0;opacity:1 }
          97% { stroke-dashoffset:0;opacity:1 }
          100% { stroke-dashoffset:0;opacity:0 }
        }
        @keyframes s0W2 {
          0% { opacity:0;transform:translateY(6px); }
          21.5% { opacity:0;transform:translateY(6px); }
          23% { opacity:1;transform:none; }
          40% { opacity:1;transform:none; }
          42% { opacity:0;transform:translateY(-4px); }
          100% { opacity:0;transform:translateY(-4px); }
        }
        @keyframes s0Pk1 {
          0% { opacity:0;transform:none }
          29% { opacity:0;transform:none }
          30% { opacity:1;transform:none }
          36% { opacity:1;transform:translate(88px,59px) }
          37% { opacity:0;transform:translate(88px,59px) }
          100% { opacity:0;transform:translate(88px,59px) }
        }
        @keyframes s0Ck1 {
          0% { opacity:0 }
          36% { opacity:0 }
          37% { opacity:1 }
          97% { opacity:1 }
          100% { opacity:0 }
        }
        @keyframes s0Fill1 {
          0% { opacity:0 }
          36% { opacity:0 }
          37% { opacity:1 }
          97% { opacity:1 }
          100% { opacity:0 }
        }
        @keyframes s0Row1 {
          0% { opacity:.4 }
          36% { opacity:.4 }
          37% { opacity:1 }
          97% { opacity:1 }
          100% { opacity:.4 }
        }
        @keyframes s0Bar1 {
          0% { stroke-dashoffset:1;opacity:1 }
          37% { stroke-dashoffset:1;opacity:1 }
          42% { stroke-dashoffset:0;opacity:1 }
          97% { stroke-dashoffset:0;opacity:1 }
          100% { stroke-dashoffset:0;opacity:0 }
        }
        @keyframes s0W3 {
          0% { opacity:0;transform:translateY(6px); }
          40.5% { opacity:0;transform:translateY(6px); }
          42% { opacity:1;transform:none; }
          59% { opacity:1;transform:none; }
          61% { opacity:0;transform:translateY(-4px); }
          100% { opacity:0;transform:translateY(-4px); }
        }
        @keyframes s0Pk2 {
          0% { opacity:0;transform:none }
          48% { opacity:0;transform:none }
          49% { opacity:1;transform:none }
          55% { opacity:1;transform:translate(88px,89px) }
          56% { opacity:0;transform:translate(88px,89px) }
          100% { opacity:0;transform:translate(88px,89px) }
        }
        @keyframes s0Ck2 {
          0% { opacity:0 }
          55% { opacity:0 }
          56% { opacity:1 }
          97% { opacity:1 }
          100% { opacity:0 }
        }
        @keyframes s0Fill2 {
          0% { opacity:0 }
          55% { opacity:0 }
          56% { opacity:1 }
          97% { opacity:1 }
          100% { opacity:0 }
        }
        @keyframes s0Row2 {
          0% { opacity:.4 }
          55% { opacity:.4 }
          56% { opacity:1 }
          97% { opacity:1 }
          100% { opacity:.4 }
        }
        @keyframes s0Bar2 {
          0% { stroke-dashoffset:1;opacity:1 }
          56% { stroke-dashoffset:1;opacity:1 }
          61% { stroke-dashoffset:0;opacity:1 }
          97% { stroke-dashoffset:0;opacity:1 }
          100% { stroke-dashoffset:0;opacity:0 }
        }
        @keyframes s0W4 {
          0% { opacity:0;transform:translateY(6px); }
          59.5% { opacity:0;transform:translateY(6px); }
          61% { opacity:1;transform:none; }
          78% { opacity:1;transform:none; }
          80% { opacity:0;transform:translateY(-4px); }
          100% { opacity:0;transform:translateY(-4px); }
        }
        @keyframes s0Pk3 {
          0% { opacity:0;transform:none }
          67% { opacity:0;transform:none }
          68% { opacity:1;transform:none }
          74% { opacity:1;transform:translate(88px,119px) }
          75% { opacity:0;transform:translate(88px,119px) }
          100% { opacity:0;transform:translate(88px,119px) }
        }
        @keyframes s0Ck3 {
          0% { opacity:0 }
          74% { opacity:0 }
          75% { opacity:1 }
          97% { opacity:1 }
          100% { opacity:0 }
        }
        @keyframes s0Fill3 {
          0% { opacity:0 }
          74% { opacity:0 }
          75% { opacity:1 }
          97% { opacity:1 }
          100% { opacity:0 }
        }
        @keyframes s0Row3 {
          0% { opacity:.4 }
          74% { opacity:.4 }
          75% { opacity:1 }
          97% { opacity:1 }
          100% { opacity:.4 }
        }
        @keyframes s0Bar3 {
          0% { stroke-dashoffset:1;opacity:1 }
          75% { stroke-dashoffset:1;opacity:1 }
          80% { stroke-dashoffset:0;opacity:1 }
          97% { stroke-dashoffset:0;opacity:1 }
          100% { stroke-dashoffset:0;opacity:0 }
        }
        @keyframes s0Chips {
          0% { opacity:0;transform:translateY(6px); }
          78% { opacity:0;transform:translateY(6px); }
          80% { opacity:1;transform:none; }
          94% { opacity:1;transform:none; }
          98% { opacity:0; }
          100% { opacity:0; }
        }
        @keyframes s0Outcome {
          0% { opacity:0;transform:translateY(8px); }
          82.5% { opacity:0;transform:translateY(8px); }
          85% { opacity:1;transform:none; }
          94% { opacity:1;transform:none; }
          98% { opacity:0; }
          100% { opacity:0; }
        }
        @keyframes s0Eq {
          0% { transform:scaleY(.3) }
          25% { transform:scaleY(1) }
          50% { transform:scaleY(.45) }
          75% { transform:scaleY(.9) }
          100% { transform:scaleY(.3) }
        }
        @keyframes s1Root {
          0% { opacity:0;transform:scale(.85); }
          1% { opacity:0;transform:scale(.85); }
          3% { opacity:1;transform:none; }
          96% { opacity:1;transform:none; }
          100% { opacity:0; }
        }
        @keyframes s1Kids {
          0% { opacity:0;transform:translateY(8px); }
          6% { opacity:0;transform:translateY(8px); }
          8% { opacity:1;transform:none; }
          96% { opacity:1;transform:none; }
          100% { opacity:0; }
        }
        @keyframes s1D1 {
          0% { stroke-dashoffset:1;opacity:1 }
          6% { stroke-dashoffset:1;opacity:1 }
          14% { stroke-dashoffset:0;opacity:1 }
          97% { stroke-dashoffset:0;opacity:1 }
          100% { stroke-dashoffset:0;opacity:0 }
        }
        @keyframes s1D2 {
          0% { stroke-dashoffset:1;opacity:1 }
          26% { stroke-dashoffset:1;opacity:1 }
          42% { stroke-dashoffset:0;opacity:1 }
          97% { stroke-dashoffset:0;opacity:1 }
          100% { stroke-dashoffset:0;opacity:0 }
        }
        @keyframes s1D3 {
          0% { stroke-dashoffset:1;opacity:1 }
          56% { stroke-dashoffset:1;opacity:1 }
          66% { stroke-dashoffset:0;opacity:1 }
          97% { stroke-dashoffset:0;opacity:1 }
          100% { stroke-dashoffset:0;opacity:0 }
        }
        @keyframes s1Fillw {
          0% { opacity:0 }
          40% { opacity:0 }
          46% { opacity:1 }
          97% { opacity:1 }
          100% { opacity:0 }
        }
        @keyframes s1Nodes {
          0% { opacity:0;transform:translateY(6px); }
          52% { opacity:0;transform:translateY(6px); }
          54% { opacity:1;transform:none; }
          96% { opacity:1;transform:none; }
          100% { opacity:0; }
        }
        @keyframes s1Stamp {
          0% { opacity:0;transform:translateY(8px); }
          79.5% { opacity:0;transform:translateY(8px); }
          82% { opacity:1;transform:none; }
          94% { opacity:1;transform:none; }
          98% { opacity:0; }
          100% { opacity:0; }
        }
        @keyframes s1Flow {
          0% { opacity:0; }
          66% { opacity:0; }
          68% { opacity:1; }
          94% { opacity:1; }
          98% { opacity:0; }
          100% { opacity:0; }
        }
        @keyframes s1FlowDot {
          0% { transform:translateX(0);opacity:0 }
          10% { opacity:1 }
          90% { opacity:1;transform:translateX(156px) }
          100% { opacity:0;transform:translateX(156px) }
        }
        @keyframes s1B1 {
          0% { opacity:0;transform:scale(.3); }
          14% { opacity:0;transform:scale(.3); }
          16% { opacity:1;transform:none; }
          96% { opacity:1;transform:none; }
          100% { opacity:0; }
        }
        @keyframes s1B2 {
          0% { opacity:0;transform:scale(.3); }
          40% { opacity:0;transform:scale(.3); }
          42% { opacity:1;transform:none; }
          96% { opacity:1;transform:none; }
          100% { opacity:0; }
        }
        @keyframes s1B3 {
          0% { opacity:0;transform:scale(.3); }
          66% { opacity:0;transform:scale(.3); }
          68% { opacity:1;transform:none; }
          96% { opacity:1;transform:none; }
          100% { opacity:0; }
        }
        @keyframes s1CA {
          0% { opacity:0;transform:translate(0,0) }
          6% { opacity:0;transform:translate(0,0) }
          8% { opacity:1;transform:translate(0,0) }
          14% { opacity:1;transform:translate(0,0) }
          22% { opacity:1;transform:translate(36px,-26px) }
          30% { opacity:1;transform:translate(36px,-26px) }
          42% { opacity:1;transform:translate(60px,38px) }
          46% { opacity:1;transform:translate(60px,38px) }
          54% { opacity:1;transform:translate(90px,86px) }
          60% { opacity:1;transform:translate(90px,86px) }
          70% { opacity:1;transform:translate(220px,52px) }
          92% { opacity:1;transform:translate(220px,52px) }
          96% { opacity:0;transform:translate(220px,52px) }
          100% { opacity:0;transform:translate(0,0) }
        }
        @keyframes s1CB {
          0% { opacity:0;transform:translate(0,0) }
          8% { opacity:0;transform:translate(0,0) }
          10% { opacity:1;transform:translate(0,0) }
          20% { opacity:1;transform:translate(-60px,-12px) }
          50% { opacity:1;transform:translate(-60px,-12px) }
          62% { opacity:1;transform:translate(-126px,58px) }
          64% { opacity:1;transform:translate(-126px,58px) }
          70% { opacity:1;transform:translate(-62px,58px) }
          76% { opacity:1;transform:translate(-62px,58px) }
          84% { opacity:1;transform:translate(-12px,98px) }
          92% { opacity:1;transform:translate(-12px,98px) }
          96% { opacity:0;transform:translate(-12px,98px) }
          100% { opacity:0;transform:translate(0,0) }
        }
        @keyframes s2It1 {
          0% { opacity:0;transform:translateY(8px); }
          2% { opacity:0;transform:translateY(8px); }
          4% { opacity:1;transform:none; }
          96% { opacity:1;transform:none; }
          100% { opacity:0; }
        }
        @keyframes s2It2 {
          0% { opacity:0;transform:translateY(8px); }
          29% { opacity:0;transform:translateY(8px); }
          31% { opacity:1;transform:none; }
          96% { opacity:1;transform:none; }
          100% { opacity:0; }
        }
        @keyframes s2It3 {
          0% { opacity:0;transform:scale(.7); }
          60% { opacity:0;transform:scale(.7); }
          62% { opacity:1;transform:none; }
          96% { opacity:1;transform:none; }
          100% { opacity:0; }
        }
        @keyframes s2Bar1 {
          0% { stroke-dashoffset:1;opacity:1 }
          3% { stroke-dashoffset:1;opacity:1 }
          15% { stroke-dashoffset:0;opacity:1 }
          97% { stroke-dashoffset:0;opacity:1 }
          100% { stroke-dashoffset:0;opacity:0 }
        }
        @keyframes s2Spin1 {
          0% { opacity:0; }
          1.5% { opacity:0; }
          3% { opacity:1; }
          17% { opacity:1; }
          18.5% { opacity:0; }
          100% { opacity:0; }
        }
        @keyframes s2Ck1 {
          0% { opacity:0 }
          27% { opacity:0 }
          28% { opacity:1 }
          97% { opacity:1 }
          100% { opacity:0 }
        }
        @keyframes s2Fb1 {
          0% { opacity:0;transform:translateY(8px); }
          14.5% { opacity:0;transform:translateY(8px); }
          17% { opacity:1;transform:none; }
          28% { opacity:1;transform:none; }
          30.5% { opacity:0;transform:translateY(-4px); }
          100% { opacity:0;transform:translateY(-4px); }
        }
        @keyframes s2Bar2 {
          0% { stroke-dashoffset:1;opacity:1 }
          30% { stroke-dashoffset:1;opacity:1 }
          42% { stroke-dashoffset:0;opacity:1 }
          97% { stroke-dashoffset:0;opacity:1 }
          100% { stroke-dashoffset:0;opacity:0 }
        }
        @keyframes s2Spin2 {
          0% { opacity:0; }
          28.5% { opacity:0; }
          30% { opacity:1; }
          44% { opacity:1; }
          45.5% { opacity:0; }
          100% { opacity:0; }
        }
        @keyframes s2Ck2 {
          0% { opacity:0 }
          57% { opacity:0 }
          58% { opacity:1 }
          97% { opacity:1 }
          100% { opacity:0 }
        }
        @keyframes s2Fb2 {
          0% { opacity:0;transform:translateY(8px); }
          41.5% { opacity:0;transform:translateY(8px); }
          44% { opacity:1;transform:none; }
          58% { opacity:1;transform:none; }
          60.5% { opacity:0;transform:translateY(-4px); }
          100% { opacity:0;transform:translateY(-4px); }
        }
        @keyframes s2Bar3 {
          0% { stroke-dashoffset:1;opacity:1 }
          60% { stroke-dashoffset:1;opacity:1 }
          74% { stroke-dashoffset:0;opacity:1 }
          97% { stroke-dashoffset:0;opacity:1 }
          100% { stroke-dashoffset:0;opacity:0 }
        }
        @keyframes s2Spin3 {
          0% { opacity:0; }
          58.5% { opacity:0; }
          60% { opacity:1; }
          76% { opacity:1; }
          77.5% { opacity:0; }
          100% { opacity:0; }
        }
        @keyframes s2Ck3 {
          0% { opacity:0 }
          89% { opacity:0 }
          90% { opacity:1 }
          97% { opacity:1 }
          100% { opacity:0 }
        }
        @keyframes s2Fb3 {
          0% { opacity:0;transform:translateY(8px); }
          74.5% { opacity:0;transform:translateY(8px); }
          77% { opacity:1;transform:none; }
          90% { opacity:1;transform:none; }
          92.5% { opacity:0;transform:translateY(-4px); }
          100% { opacity:0;transform:translateY(-4px); }
        }
        @keyframes s2Act1 {
          0% { opacity:0; }
          1% { opacity:0; }
          3% { opacity:1; }
          28% { opacity:1; }
          30% { opacity:0; }
          100% { opacity:0; }
        }
        @keyframes s2Act2 {
          0% { opacity:0; }
          28% { opacity:0; }
          30% { opacity:1; }
          58% { opacity:1; }
          60% { opacity:0; }
          100% { opacity:0; }
        }
        @keyframes s2Act3 {
          0% { opacity:0; }
          58% { opacity:0; }
          60% { opacity:1; }
          90% { opacity:1; }
          92% { opacity:0; }
          100% { opacity:0; }
        }
        @keyframes s2Btn {
          0% { fill:rgba(57,231,239,.35);stroke:#39E7EF }
          52% { fill:rgba(57,231,239,.35);stroke:#39E7EF }
          56% { fill:rgba(245,184,75,.85);stroke:#F5B84B }
          100% { fill:rgba(245,184,75,.85);stroke:#F5B84B }
        }
        @keyframes s2Dot {
          0% { opacity:.25 }
          50% { opacity:1 }
          100% { opacity:.25 }
        }
        @keyframes s2Spin {
          0% { transform:rotate(0) }
          100% { transform:rotate(360deg) }
        }
        @keyframes s3Ck0 {
          0% { opacity:0 }
          7% { opacity:0 }
          8% { opacity:1 }
          97% { opacity:1 }
          100% { opacity:0 }
        }
        @keyframes s3Fill0 {
          0% { opacity:0 }
          7% { opacity:0 }
          8% { opacity:1 }
          97% { opacity:1 }
          100% { opacity:0 }
        }
        @keyframes s3Row0 {
          0% { opacity:.4 }
          7% { opacity:.4 }
          8% { opacity:1 }
          97% { opacity:1 }
          100% { opacity:.4 }
        }
        @keyframes s3Ck1 {
          0% { opacity:0 }
          17% { opacity:0 }
          18% { opacity:1 }
          97% { opacity:1 }
          100% { opacity:0 }
        }
        @keyframes s3Fill1 {
          0% { opacity:0 }
          17% { opacity:0 }
          18% { opacity:1 }
          97% { opacity:1 }
          100% { opacity:0 }
        }
        @keyframes s3Row1 {
          0% { opacity:.4 }
          17% { opacity:.4 }
          18% { opacity:1 }
          97% { opacity:1 }
          100% { opacity:.4 }
        }
        @keyframes s3Ck2 {
          0% { opacity:0 }
          27% { opacity:0 }
          28% { opacity:1 }
          97% { opacity:1 }
          100% { opacity:0 }
        }
        @keyframes s3Fill2 {
          0% { opacity:0 }
          27% { opacity:0 }
          28% { opacity:1 }
          97% { opacity:1 }
          100% { opacity:0 }
        }
        @keyframes s3Row2 {
          0% { opacity:.4 }
          27% { opacity:.4 }
          28% { opacity:1 }
          97% { opacity:1 }
          100% { opacity:.4 }
        }
        @keyframes s3Ck3 {
          0% { opacity:0 }
          37% { opacity:0 }
          38% { opacity:1 }
          97% { opacity:1 }
          100% { opacity:0 }
        }
        @keyframes s3Fill3 {
          0% { opacity:0 }
          37% { opacity:0 }
          38% { opacity:1 }
          97% { opacity:1 }
          100% { opacity:0 }
        }
        @keyframes s3Row3 {
          0% { opacity:.4 }
          37% { opacity:.4 }
          38% { opacity:1 }
          97% { opacity:1 }
          100% { opacity:.4 }
        }
        @keyframes s3Press {
          0% { opacity:0 }
          51% { opacity:0 }
          53% { opacity:.5 }
          57% { opacity:0 }
          100% { opacity:0 }
        }
        @keyframes s3Prog {
          0% { transform:scaleX(0);opacity:1 }
          56% { transform:scaleX(0);opacity:1 }
          70% { transform:scaleX(1);opacity:1 }
          97% { transform:scaleX(1);opacity:1 }
          100% { transform:scaleX(1);opacity:0 }
        }
        @keyframes s3T1 {
          0% { opacity:1 }
          55% { opacity:1 }
          57% { opacity:0 }
          97% { opacity:0 }
          100% { opacity:1 }
        }
        @keyframes s3T2 {
          0% { opacity:0; }
          55.5% { opacity:0; }
          57% { opacity:1; }
          69% { opacity:1; }
          70.5% { opacity:0; }
          100% { opacity:0; }
        }
        @keyframes s3T3 {
          0% { opacity:0; }
          69.5% { opacity:0; }
          71% { opacity:1; }
          96% { opacity:1; }
          100% { opacity:0; }
        }
        @keyframes s3Staging {
          0% { opacity:1 }
          68% { opacity:1 }
          73% { opacity:0 }
          97% { opacity:0 }
          100% { opacity:1 }
        }
        @keyframes s3Live {
          0% { opacity:0;transform:scale(.6); }
          70% { opacity:0;transform:scale(.6); }
          72% { opacity:1;transform:none; }
          96% { opacity:1;transform:none; }
          100% { opacity:0; }
        }
        @keyframes s3Handover {
          0% { opacity:0;transform:translateY(8px); }
          79.5% { opacity:0;transform:translateY(8px); }
          82% { opacity:1;transform:none; }
          96% { opacity:1;transform:none; }
          100% { opacity:0; }
        }
        @keyframes s3Visitors {
          0% { opacity:0; }
          74% { opacity:0; }
          76% { opacity:1; }
          96% { opacity:1; }
          100% { opacity:0; }
        }
        @keyframes s3Vis1 {
          0% { transform:scale(0) }
          76% { transform:scale(0) }
          80% { transform:scale(1) }
          100% { transform:scale(1) }
        }
        @keyframes s3Vis2 {
          0% { transform:scale(0) }
          80% { transform:scale(0) }
          84% { transform:scale(1) }
          100% { transform:scale(1) }
        }
        @keyframes s3Vis3 {
          0% { transform:scale(0) }
          84% { transform:scale(0) }
          88% { transform:scale(1) }
          100% { transform:scale(1) }
        }
        @keyframes s3Beam {
          0% { opacity:.25 }
          54% { opacity:.25 }
          60% { opacity:1 }
          70% { opacity:1 }
          74% { opacity:.25 }
          100% { opacity:.25 }
        }
        @keyframes s3Pulse {
          0% { opacity:.5 }
          50% { opacity:1 }
          100% { opacity:.5 }
        }
        @keyframes s4LineA {
          0% { stroke-dashoffset:1;opacity:1 }
          3% { stroke-dashoffset:1;opacity:1 }
          15% { stroke-dashoffset:0;opacity:1 }
          97% { stroke-dashoffset:0;opacity:1 }
          100% { stroke-dashoffset:0;opacity:0 }
        }
        @keyframes s4LineB {
          0% { stroke-dashoffset:1;opacity:1 }
          15% { stroke-dashoffset:1;opacity:1 }
          24% { stroke-dashoffset:0;opacity:1 }
          50% { stroke-dashoffset:0;opacity:1 }
          55% { stroke-dashoffset:0;opacity:.18 }
          97% { stroke-dashoffset:0;opacity:.18 }
          100% { stroke-dashoffset:0;opacity:0 }
        }
        @keyframes s4LineC {
          0% { stroke-dashoffset:1;opacity:1 }
          50% { stroke-dashoffset:1;opacity:1 }
          62% { stroke-dashoffset:0;opacity:1 }
          97% { stroke-dashoffset:0;opacity:1 }
          100% { stroke-dashoffset:0;opacity:0 }
        }
        @keyframes s4Tag {
          0% { opacity:0;transform:translateY(6px); }
          22% { opacity:0;transform:translateY(6px); }
          24% { opacity:1;transform:none; }
          46% { opacity:1;transform:none; }
          48.5% { opacity:0; }
          100% { opacity:0; }
        }
        @keyframes s4Pin {
          0% { opacity:0;transform:scale(.3); }
          21.5% { opacity:0;transform:scale(.3); }
          24% { opacity:1;transform:none; }
          47% { opacity:1;transform:none; }
          49.5% { opacity:0; }
          100% { opacity:0; }
        }
        @keyframes s4Fixed {
          0% { opacity:0;transform:translateY(6px); }
          60% { opacity:0;transform:translateY(6px); }
          62% { opacity:1;transform:none; }
          96% { opacity:1;transform:none; }
          100% { opacity:0; }
        }
        @keyframes s4Update {
          0% { opacity:0;transform:translateX(18px); }
          44% { opacity:0;transform:translateX(18px); }
          46% { opacity:1;transform:none; }
          66% { opacity:1;transform:none; }
          68.5% { opacity:0; }
          100% { opacity:0; }
        }
        @keyframes s4End {
          0% { opacity:0 }
          60% { opacity:0 }
          63% { opacity:1 }
          97% { opacity:1 }
          100% { opacity:0 }
        }
        @keyframes s4Chip1 {
          0% { opacity:0 }
          3% { opacity:0 }
          5% { opacity:1 }
          22% { opacity:1 }
          24% { opacity:0 }
          68% { opacity:0 }
          70% { opacity:1 }
          84% { opacity:1 }
          86% { opacity:0 }
          100% { opacity:0 }
        }
        @keyframes s4Chip2 {
          0% { opacity:0; }
          23.5% { opacity:0; }
          25% { opacity:1; }
          45% { opacity:1; }
          46.5% { opacity:0; }
          100% { opacity:0; }
        }
        @keyframes s4Chip3 {
          0% { opacity:0; }
          45.5% { opacity:0; }
          47% { opacity:1; }
          66% { opacity:1; }
          67.5% { opacity:0; }
          100% { opacity:0; }
        }
        @keyframes s4Loop {
          0% { opacity:.3 }
          62% { opacity:.3 }
          66% { opacity:1 }
          74% { opacity:1 }
          78% { opacity:.3 }
          100% { opacity:.3 }
        }
        @keyframes s4N1 {
          0% { opacity:0;transform:translateX(-8px); }
          64% { opacity:0;transform:translateX(-8px); }
          66% { opacity:1;transform:none; }
          96% { opacity:1;transform:none; }
          100% { opacity:0; }
        }
        @keyframes s4N2 {
          0% { opacity:0;transform:translateX(-8px); }
          72% { opacity:0;transform:translateX(-8px); }
          74% { opacity:1;transform:none; }
          96% { opacity:1;transform:none; }
          100% { opacity:0; }
        }
        @keyframes s4N3 {
          0% { opacity:0;transform:translateX(-8px); }
          80% { opacity:0;transform:translateX(-8px); }
          82% { opacity:1;transform:none; }
          96% { opacity:1;transform:none; }
          100% { opacity:0; }
        }
        @keyframes s4Live {
          0% { opacity:.4 }
          50% { opacity:1 }
          100% { opacity:.4 }
        }

        @media (prefers-reduced-motion: reduce) {
          .process-scene * { animation: none !important; }
        }
      `}</style>
    </section>
  );
}