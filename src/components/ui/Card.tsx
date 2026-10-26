import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
  variant?: "white" | "subtle" | "dark" | "outline";
}

export function Card({
  children,
  className = "",
  hoverEffect = false,
  padding = "md",
  variant = "white",
}: CardProps) {
  const paddingStyles = {
    none: "",
    sm: "p-4 sm:p-5",
    md: "p-6 sm:p-7",
    lg: "p-8 sm:p-10",
  };

  const variantStyles = {
    white: "bg-white border border-kg-border shadow-xs",
    subtle: "bg-kg-surface-subtle border border-kg-border/80",
    dark: "bg-kg-navy text-white border border-slate-800",
    outline: "bg-transparent border border-kg-border",
  };

  const hoverStyles = hoverEffect
    ? "transition-all duration-300 hover:shadow-md hover:border-kg-blue/40 hover:-translate-y-1"
    : "";

  return (
    <div
      className={`rounded-2xl ${variantStyles[variant]} ${paddingStyles[padding]} ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  );
}
