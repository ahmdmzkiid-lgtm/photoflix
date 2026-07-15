"use client";

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  icon,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 cursor-pointer";

  const variants = {
    primary:
      "bg-[#F2A65A] text-[#141F33] hover:bg-[#FFD9A0] hover:scale-105 shadow-lg shadow-[#F2A65A]/25 focus-visible:ring-[#F2A65A]",
    outline:
      "border-2 border-[#F2A65A] text-[#F2A65A] hover:bg-[#F2A65A] hover:text-[#141F33] hover:scale-105 focus-visible:ring-[#F2A65A]",
    ghost:
      "text-white hover:text-[#F2A65A] hover:bg-white/10 focus-visible:ring-white",
  };

  const sizes = {
    sm: "text-sm px-4 py-2",
    md: "text-sm px-6 py-3",
    lg: "text-base px-8 py-4",
  };

  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cls}
        id={`btn-${children?.toString().toLowerCase().replace(/\s+/g, "-").slice(0, 20)}`}
      >
        {icon && <span>{icon}</span>}
        {children}
      </a>
    );
  }

  return (
    <button className={cls} {...props}>
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
}
