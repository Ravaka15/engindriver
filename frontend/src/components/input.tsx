import React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`w-full px-2 py-2 border h-10 border-gray-300 rounded-md shadow-sm disabled:bg-gray-50 disabled:text-gray-500 ${className}`}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
