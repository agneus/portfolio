"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function TerminalLoader() {
  const [text, setText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  const commands = [
    "wInitializing system...",
    "wAccessing mainframe...",
    "wDecrypting portfolio data...",
    "wLaunching portfolio in 3...2...1...",
  ];

  useEffect(() => {
    let currentCommandIndex = 0;
    let currentCharIndex = 0;
    let typingInterval: NodeJS.Timeout;

    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    // Typing effect
    const startTyping = () => {
      typingInterval = setInterval(() => {
        if (currentCommandIndex < commands.length) {
          const currentCommand = commands[currentCommandIndex];

          if (currentCharIndex < currentCommand.length) {
            setText((prev) => prev + currentCommand[currentCharIndex]);
            currentCharIndex++;
          } else {
            setText((prev) => prev + "\n> ");
            currentCommandIndex++;
            currentCharIndex = 0;

            // Pause between commands
            clearInterval(typingInterval);
            setTimeout(startTyping, 100);
          }
        } else {
          clearInterval(typingInterval);
        }
      }, 7); // Typing speed - much faster
    };

    // Start with initial prompt
    setText("> ");
    setTimeout(startTyping, 500);

    return () => {
      clearInterval(cursorInterval);
      clearInterval(typingInterval);
    };
  }, []);

  return (
    <motion.div
      className="w-full max-w-2xl p-6 rounded-md bg-black border border-green-500 font-mono text-green-500 text-sm"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center mb-2">
        <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
        <div className="h-3 w-3 rounded-full bg-green-500"></div>
        <div className="ml-4 text-xs">portfolio-init.sh</div>
      </div>
      <div className="whitespace-pre-line">
        {text}
        {cursorVisible && (
          <span className="inline-block w-2 h-4 bg-green-500 ml-1 animate-blink"></span>
        )}
      </div>
    </motion.div>
  );
}
