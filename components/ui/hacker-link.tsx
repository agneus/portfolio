import type React from "react"
import { cn } from "@/lib/utils"

interface HackerLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode
}

export function HackerLink({ className, children, ...props }: HackerLinkProps) {
  // Generate random scrambled versions of the text
  const text = typeof children === "string" ? children : "Link"
  const scrambled1 = text
    .split("")
    .map(() => String.fromCharCode(Math.floor(Math.random() * 26) + 97))
    .join("")
  const scrambled2 = text
    .split("")
    .map(() => String.fromCharCode(Math.floor(Math.random() * 26) + 97))
    .join("")
  const scrambled3 = text
    .split("")
    .map(() => String.fromCharCode(Math.floor(Math.random() * 26) + 97))
    .join("")
  const scrambled4 = text
    .split("")
    .map(() => String.fromCharCode(Math.floor(Math.random() * 26) + 97))
    .join("")
  const scrambled5 = text
    .split("")
    .map(() => String.fromCharCode(Math.floor(Math.random() * 26) + 97))
    .join("")

  // Generate binary version
  const binary = text
    .split("")
    .map((char) => char.charCodeAt(0).toString(2).padStart(8, "0"))
    .join(" ")

  return (
    <a
      className={cn(
        "font-mono text-sm uppercase tracking-wider text-gray-400 hover:text-green-500 transition-colors text-scramble",
        className,
      )}
      data-text={text}
      data-binary={binary}
      data-scramble-1={scrambled1}
      data-scramble-2={scrambled2}
      data-scramble-3={scrambled3}
      data-scramble-4={scrambled4}
      data-scramble-5={scrambled5}
      {...props}
    >
      {children}
    </a>
  )
}

