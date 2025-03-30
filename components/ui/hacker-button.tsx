import type React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { ButtonProps } from "@/components/ui/button"

interface HackerButtonProps extends ButtonProps {
  children: React.ReactNode
}

export function HackerButton({ className, children, ...props }: HackerButtonProps) {
  // Generate text data for scrambling
  const text = typeof children === "string" ? children : "Button"
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
    <Button className={cn(className)} {...props}>
      <span
        className="text-scramble"
        data-text={text}
        data-binary={binary}
        data-scramble-1={scrambled1}
        data-scramble-2={scrambled2}
        data-scramble-3={scrambled3}
        data-scramble-4={scrambled4}
        data-scramble-5={scrambled5}
      >
        {children}
      </span>
    </Button>
  )
}

