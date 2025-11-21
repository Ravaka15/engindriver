import * as React from "react";

type Orientation = "horizontal" | "vertical";

export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: Orientation;
}

export const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
  ({ orientation = "horizontal", className = "", ...props }, ref) => {
    const base = "shrink-0 bg-border";
    const size = orientation === "horizontal" ? "h-px w-full" : "w-px h-full";

    return (
      <div
        ref={ref}
        role="separator"
        aria-orientation={orientation}
        className={`${base} ${size} ${className}`}
        {...props}
      />
    );
  }
);

Separator.displayName = "Separator";
