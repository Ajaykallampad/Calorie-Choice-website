import { HTMLAttributes, forwardRef } from "react";
import { cn } from "./Button";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  glass?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, glass = true, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-[24px] p-6 transition-all duration-300",
          glass ? "glass shadow-soft hover:shadow-lg hover:border-green-wellness/30" : "bg-card shadow-soft",
          className
        )}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";

export { Card };
