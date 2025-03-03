import type { ButtonHTMLAttributes, ReactNode } from "react"

interface PixelatedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: "primary" | "secondary" | "danger"
}

export default function PixelatedButton({
  children,
  variant = "primary",
  className = "",
  ...props
}: PixelatedButtonProps) {
  const variantClasses = {
    primary: "bg-pixel-green text-black hover:bg-pixel-green-light active:bg-pixel-green-dark border-pixel-green-dark",
    secondary: "bg-pixel-blue text-black hover:bg-pixel-blue-light active:bg-pixel-blue-dark border-pixel-blue-dark",
    danger: "bg-pixel-red text-black hover:bg-pixel-red-light active:bg-pixel-red-dark border-pixel-red-dark",
  }

  return (
    <button
      className={`
        font-pixel px-4 py-2 border-b-4 border-r-4 
        transition-transform active:translate-y-1 active:translate-x-1 active:border-b-2 active:border-r-2
        ${variantClasses[variant]} ${className}
      `}
      {...props}
    >
      <div className="flex items-center justify-center">{children}</div>
    </button>
  )
}

