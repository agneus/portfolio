"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";
import { HackerButton } from "@/components/ui/hacker-button";
import { MatrixText } from "@/components/ui/matrix-text";

export function Contact() {
  return (
    <section id="contact" className="py-20 border-t border-gray-800">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-mono text-3xl font-bold tracking-tighter mb-4">
            <span className="text-green-500">+</span>{" "}
            <MatrixText text="CONTACT" className="inline-block" />{" "}
            <span className="text-green-500">+</span>
          </h2>
          <p className="font-mono text-sm text-gray-400 max-w-2xl mx-auto digital-rain">
            GET IN TOUCH FOR COLLABORATIONS OR OPPORTUNITIES
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <Card className="bg-black border-gray-800 hover:border-green-500/50 transition-colors duration-300">
            <CardHeader>
              <CardTitle className="font-mono text-lg">
                <MatrixText
                  text="Contact Information"
                  className="inline-block"
                />
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-green-500 mr-3" />
                <p className="font-mono text-sm digital-rain">
                  saminshararnafi@gmail.com
                </p>
              </div>
              <div className="flex items-center">
                <div className="h-5 w-5 flex items-center justify-center text-green-500 mr-3">
                  <span className="text-lg">📍</span>
                </div>
                <p className="font-mono text-sm text-scramble">
                  Waterloo, ON, Canada
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-black border-gray-800 hover:border-green-500/50 transition-colors duration-300">
            <CardHeader>
              <CardTitle className="font-mono text-lg">
                <MatrixText text="Social Media" className="inline-block" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/agneus"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <HackerButton
                    variant="outline"
                    size="icon"
                    className="border-gray-700 text-gray-400 hover:text-white hover:border-white"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </HackerButton>
                </a>
                <a
                  href="https://www.linkedin.com/in/saminshararnafi/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <HackerButton
                    variant="outline"
                    size="icon"
                    className="border-gray-700 text-gray-400 hover:text-white hover:border-white"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </HackerButton>
                </a>
                <a href="mailto:saminshararnafi@gmail.com">
                  <HackerButton
                    variant="outline"
                    size="icon"
                    className="border-gray-700 text-gray-400 hover:text-white hover:border-white"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </HackerButton>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
