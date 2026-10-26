import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "blue" | "navy" | "slate" | "amber" | "green";
  className?: string;
  size?: "sm" | "md";
}

export function Badge({
  children,
  variant = "blue",
  className = "",
  size = "md",
}: BadgeProps) {
  const variantStyles = {
    blue: "bg-kg-blue-soft text-kg-blue border-kg-blue/20",
    navy: "bg-kg-navy/10 text-kg-navy border-kg-navy/20",
    slate: "bg-slate-100 text-slate-700 border-slate-200",
    amber: "bg-amber-50 text-amber-800 border-amber-200",
    green: "bg-emerald-50 text-emerald-800 border-emerald-200",
  };

  const sizeStyles = {
    sm: "px-2 py-0.5 text-[11px]",
    md: "px-2.5 py-1 text-xs",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-medium rounded-full border ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
