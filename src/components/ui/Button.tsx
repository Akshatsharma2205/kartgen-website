import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
  icon?: ReactNode;
}

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  disabled = false,
  onClick,
  icon,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs gap-1.5 min-h-[36px]",
    md: "px-4.5 py-2.5 text-sm gap-2 min-h-[44px]",
    lg: "px-6 py-3.5 text-base gap-2.5 min-h-[50px] font-semibold",
  };

  const variantStyles = {
    primary:
      "bg-kg-blue text-white hover:bg-kg-blue-hover focus-visible:ring-kg-blue shadow-sm hover:shadow hover:translate-y-[-1px]",
    secondary:
      "bg-white text-kg-ink border border-kg-border hover:bg-kg-surface-subtle hover:border-slate-300 focus-visible:ring-kg-blue shadow-xs",
    outline:
      "bg-transparent text-white border border-white/30 hover:bg-white/10 focus-visible:ring-white",
    ghost:
      "bg-transparent text-kg-blue hover:text-kg-blue-hover hover:bg-kg-blue-soft/50 focus-visible:ring-kg-blue px-2",
    dark: "bg-kg-navy text-white hover:bg-kg-navy-dark focus-visible:ring-kg-navy shadow-sm",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        <span>{children}</span>
        {icon && <span className="shrink-0">{icon}</span>}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={combinedClasses}
    >
      <span>{children}</span>
      {icon && <span className="shrink-0">{icon}</span>}
    </button>
  );
}
