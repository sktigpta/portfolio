import type { HTMLAttributes, ReactNode } from "react"

interface PixelatedCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export default function PixelatedCard({ children, className = "", ...props }: PixelatedCardProps) {
  return (
    <div
      className={`
        bg-black border-2 border-pixel-blue p-6
        relative
        before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full
        before:border-t-4 before:border-l-4 before:border-pixel-blue/30 before:-translate-x-1 before:-translate-y-1
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  )
}

