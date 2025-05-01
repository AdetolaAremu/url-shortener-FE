import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  disabled?: boolean;
  isLoading?: boolean;
  fullWidth?: boolean;
  height?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  leftIcon,
  rightIcon,
  disabled = false,
  isLoading = false,
  fullWidth = false,
  className = "",
  type = "button",
  height,
  ...props
}) => {
  const baseClasses =
    "font-medium rounded focus:outline-none focus:ring-2 focus:ring-offset-2 inline-flex items-center justify-center transition-colors";

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const variantClasses = {
    primary: "bg-blue-400 hover:bg-blue-500 text-white focus:ring-blue-600",
    secondary: "bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-500",
    outline:
      "border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500",
    ghost: "text-gray-700 hover:bg-gray-100 focus:ring-gray-500",
    link: "text-blue-600 hover:underline focus:ring-blue-500 p-0",
  };

  const stateClasses = {
    disabled: "opacity-50 cursor-not-allowed",
    fullWidth: "w-full",
  };

  const classes = [
    baseClasses,
    sizeClasses[size],
    variant === "link"
      ? variantClasses[variant]
      : sizeClasses[size] + " " + variantClasses[variant],
    disabled ? stateClasses.disabled : "",
    fullWidth ? stateClasses.fullWidth : "",
    height || "",
    className,
  ].join(" ");

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}

      {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
      <span>{children}</span>
      {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};
