import * as React from "react";

type Orientation = "horizontal" | "vertical";

interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: Orientation;
}

export function Separator({
  orientation = "horizontal",
  className = "",
  ...props
}: SeparatorProps) {
  const base =
    "shrink-0 bg-border";
  const size =
    orientation === "horizontal" ? "h-px w-full" : "w-px h-full";

  return (
    <div
      role="separator"
      aria-orientation={orientation}
      className={`${base} ${size} ${className}`}
      {...props}
    />
  );
}
