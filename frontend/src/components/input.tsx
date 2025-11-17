import type React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export function Input({ className = "", ...props }: InputProps) {
  return (
    <input
      className={`w-full px-2 py-2 border h-10 border-gray-300 rounded-md shadow-sm disabled:bg-gray-50 disabled:text-gray-500 ${className}`}
      {...props}
    />
  );
}
