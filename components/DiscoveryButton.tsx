"use client";
import { useDiscovery } from "./DiscoveryModal";

export default function DiscoveryButton({
  className = "btn-amber px-6 py-3 text-sm",
  children = "Free Discovery Call",
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const { open } = useDiscovery();
  return (
    <button type="button" onClick={open} className={className}>
      {children}
    </button>
  );
}