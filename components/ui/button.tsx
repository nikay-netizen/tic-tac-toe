
import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
  className?: string;
}

export function Button({ variant = "default", className, ...props }: ButtonProps) {
  const baseStyles = "px-4 py-2 rounded focus:outline-none";
  const variants = {
    default: "bg-black text-white hover:bg-gray-800",
    outline: "border border-gray-400 text-gray-700 bg-white hover:bg-gray-100",
  };
  return <button className={clsx(baseStyles, variants[variant], className)} {...props} />;
}
