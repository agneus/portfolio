"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface MatrixTextProps {
  text: string
  className?: string
  tag?: keyof JSX.IntrinsicElements
}

export function MatrixText({ text, className, tag: Tag = "span" }: MatrixTextProps) {
  const [scrambledVersions, setScrambledVersions] = useState<string[]>([])
  const [binaryVersion, setBinaryVersion] = useState("")

  useEffect(() => {
    // Generate 5 scrambled versions of the text
    const scrambled = Array(5)
      .fill(0)
      .map(() =>
        text
          .split("")
          .map(() => {
            const rand = Math.random()
            if (rand < 0.5) return String.fromCharCode(Math.floor(Math.random() * 26) + 97) // lowercase
            if (rand < 0.8) return String.fromCharCode(Math.floor(Math.random() * 10) + 48) // numbers
            return String.fromCharCode(Math.floor(Math.random() * 15) + 33) // symbols
          })
          .join(""),
      )
    setScrambledVersions(scrambled)

    // Generate binary version
    const binary = text
      .split("")
      .map((char) => char.charCodeAt(0).toString(2).padStart(8, "0"))
      .join(" ")
    setBinaryVersion(binary)
  }, [text])

  const props: any = {
    className: cn("text-scramble", className),
    "data-text": text,
  }

  if (scrambledVersions.length === 5) {
    props["data-scramble-1"] = scrambledVersions[0]
    props["data-scramble-2"] = scrambledVersions[1]
    props["data-scramble-3"] = scrambledVersions[2]
    props["data-scramble-4"] = scrambledVersions[3]
    props["data-scramble-5"] = scrambledVersions[4]
  }

  if (binaryVersion) {
    props["data-binary"] = binaryVersion
  }

  return <Tag {...props}>{text}</Tag>
}

