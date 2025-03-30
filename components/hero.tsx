"use client";

import { Terminal } from "lucide-react";
import { HackerButton } from "@/components/ui/hacker-button";
import { MatrixText } from "@/components/ui/matrix-text";

export function Hero() {
  return (
    <section id="home" className="relative py-20 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center justify-center rounded-full bg-green-500/10 px-3 py-1 mb-6">
            <Terminal className="mr-2 h-4 w-4 text-green-500" />
            <span
              className="font-mono text-sm text-green-500 text-scramble"
              data-text="FULL STACK DEVELOPER"
              data-scramble-1="FQLL ST4CK D3V3L0P3R"
              data-scramble-2="F7LL 5T@CK D&V&L0P&R"
              data-scramble-3="F#LL $T@CK D3V3L0P3R"
              data-scramble-4="FULL 5T4CK D3V3L0P3R"
              data-scramble-5="F*LL ST@CK D&V&L0P&R"
            >
              FULL STACK DEVELOPER
            </span>
          </div>

          <h1 className="font-mono text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            <MatrixText
              text="Samin Sharar Nafi"
              effect="scramble"
              className="block"
            />
            <MatrixText
              text="PORTFOLIO"
              effect="scramble"
              className="block mt-2 text-green-500"
            />
          </h1>

          <div className="relative mx-auto mb-8 max-w-xl">
            <div className="font-mono text-sm md:text-base text-gray-400 leading-relaxed digital-rain">
              <span className="text-green-500">$</span> Building innovative web
              applications with modern technologies.
              <span className="inline-block w-2 h-4 bg-green-500 ml-1 animate-blink"></span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <HackerButton
              size="lg"
              className="font-mono bg-green-500 text-black hover:bg-green-600 min-w-[180px]"
              effect="rain"
              onClick={() => {
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              VIEW PROJECTS
            </HackerButton>
            <HackerButton
              variant="outline"
              size="lg"
              className="font-mono border-green-500 text-green-500 hover:bg-green-500 hover:text-black min-w-[180px]"
              effect="binary"
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              CONTACT ME
            </HackerButton>
          </div>
        </div>
      </div>
    </section>
  );
}
