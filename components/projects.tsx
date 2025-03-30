import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { HackerButton } from "@/components/ui/hacker-button";
import { MatrixText } from "@/components/ui/matrix-text";

export function Projects() {
  const projects = [
    {
      id: 1,
      title: "Mnemonic Master",
      description:
        "AI-powered language flashcard generator and quiz application. Generate vocabulary flashcards with mnemonics and take quizzes to test your knowledge.",
      image: "/mnemonic.png?height=300&width=600", // Replace with your actual image
      tags: ["Next.js", "React", "Tailwind CSS", "Prisma", "PostgreSQL", "AI"],
      githubUrl: "https://github.com/agneus/mnemonic-master",
      liveUrl: "https://mnemonic-master.vercel.app",
    },
    {
      id: 2,
      title: "Drobe",
      description:
        "AI outfit analyzer app with Solana integration. Capture photos, analyze outfits using AI, and interact with the Solana blockchain.",
      image: "/drobe.jpg?height=300&width=600", // Replace with your actual image
      tags: [
        "React Native",
        "Expo",
        "TypeScript",
        "Solana",
        "Blockchain",
        "AI",
      ],
      githubUrl: "https://github.com/agneus/Drobe",
      liveUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 border-t border-gray-800">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-mono text-3xl font-bold tracking-tighter mb-4">
            <span className="text-green-500">+</span>{" "}
            <MatrixText text="PROJECTS" className="inline-block" />{" "}
            <span className="text-green-500">+</span>
          </h2>
          <p className="font-mono text-sm text-gray-400 max-w-2xl mx-auto digital-rain">
            SHOWCASING MY LATEST WORK AND TECHNICAL SKILLS
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="bg-black border-gray-800 overflow-hidden group"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardHeader>
                <CardTitle className="font-mono text-lg">
                  <MatrixText text={project.title} className="inline-block" />
                </CardTitle>
                <CardDescription className="font-mono text-gray-400 digital-rain">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      className="bg-green-500/20 text-green-500 font-mono text-xs text-scramble"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <HackerButton
                    variant="outline"
                    size="sm"
                    className="font-mono text-xs border-gray-700 text-gray-400 hover:text-white"
                  >
                    Code
                  </HackerButton>
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <HackerButton
                    size="sm"
                    className="font-mono text-xs bg-green-500 text-black hover:bg-green-600"
                  >
                    Live Demo
                  </HackerButton>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
