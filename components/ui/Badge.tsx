import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "accent" | "midnight" | "outline";
}

export function Badge({ children, className = "", variant = "accent" }: BadgeProps) {
  const variants = {
    accent: "bg-[#F2A65A] text-[#141F33]",
    midnight: "bg-[#1D2B44] text-white",
    outline: "border border-[#F2A65A] text-[#F2A65A] bg-transparent",
  };

  return (
    <span
      className={`inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest rounded-full px-3 py-1 ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
