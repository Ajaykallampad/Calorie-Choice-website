import { HTMLAttributes, forwardRef } from "react";
import { cn } from "./Button";

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "success" | "primary" | "outline";
}

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const variants = {
      default: "bg-gray-100 text-gray-800",
      success: "bg-mint-soft text-green-forest",
      primary: "bg-primary/10 text-primary",
      outline: "bg-transparent border border-gray-border text-gray-600",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider",
          variants[variant],
          className
        )}
        {...props}
      />
    );
  }
);
Badge.displayName = "Badge";

export { Badge };
