import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Code } from "lucide-react";
import { MatrixText } from "@/components/ui/matrix-text";

// JSON data for Education and Experience
const educationData = [
  {
    title: "Bachelor of Computer Science",
    subtitle: "University of Waterloo, Waterloo, ON",
    duration: "Sept 2020 ‑ Apr 2025 (Expected)",
    content: [
      "Term Distinction in every term; President’s Scholarship",
      "Skills: TypeScript/Javascript, React, Kotlin, Java, C#, C++, CSS",
    ],
  },
];

const experienceData = [
  {
    title: "Software Developer in Test Intern",
    subtitle: "Sony Interactive Entertainment | PlayStation, Waterloo, ON",
    duration: "May 2024 ‑ Dec 2024",
    content: [
      "Authored PACT contract tests for gRPC services using Java and JUnit 5, completely eliminating integration issues caused by mismatched proto files between provider and consumer services",
      "Modified a Kotlin integration test helper for provider tests, using CountDownLatch to resolve concurrency issues and ensure the application was fully initialized, enabling reliable test execution",
      "Implemented branch‑specific test execution for consumer tests using Maven profiles, automating contract generation and publication on the master branch, reducing CI/CD overhead by preventing unintended updates",
      "Built a devcontainer with a Dockerfile for a Kotlin backend service, integrating with IntelliJ to reduce setup time for new developers and ensure consistency across development environments",
      "Integrated devcontainers into CI/CD by configuring a GitHub webhook and Jenkins job to automate image builds, publish to Artifactory, and update configurations ensuring up‑to‑date development environments",
    ],
  },
  {
    title: "Software Developer Intern",
    subtitle: "Dayforce, Toronto, ON",
    duration: "Sept 2023 ‑ Dec 2023",
    content: [
      "Enhanced key frontend features for the Dayforce Jobs website using React and TypeScript, including the Saved Searches form and Job Application page, simplifying workflows for thousands of daily users",
      "Resolved critical accessibility bugs by implementing JavaScript logic to fix tab navigation issues with radio buttons and invisible elements, ensuring seamless navigation and compliance with WCAG 2.1 standards",
      "Developed robust backend validation and collation logic in C# for job applications, ensuring accurate handling of user data such as addresses and phone numbers to maintain data integrity and improve system reliability",
    ],
  },
  {
    title: "Backend Engineering Intern",
    subtitle: "Faire, Waterloo, ON",
    duration: "Sept 2022 ‑ Dec 2022",
    content: [
      "Implemented event batching in Kotlin for an internal event tracking tool, reducing database write frequency by grouping user actions into timed batches, lowering API calls and server load for improved efficiency",
      "Redesigned the database schema with SQL to enable event batching, replacing individual event storage with grouped entries, which reduced storage overhead and improved query performance for large datasets",
      "Implemented a Jenkins job to keep e2e‑green branch synced with main branch, overriding end‑to‑end test checks when lag exceeded 300 commits, reducing merge conflicts and accelerating deployment to production",
    ],
  },
  {
    title: "Software Test Engineering Intern",
    subtitle: "Faire, Waterloo, ON",
    duration: "Jan 2022 ‑ Apr 2022",
    content: [
      "Developed and debugged end‑to‑end tests with Cypress for critical functionalities, including login, navigation, add‑to‑cart, and checkout, ensuring reliable user workflows and reducing production bugs",
      "Authored unit tests in TypeScript with Jest to validate tabbing and focus functionality, catching critical accessibility issues early and ensuring seamless navigation for users with assistive technologies",
      "Reviewed test specifications and conducted manual QA testing for 20+ new features on web and mobile",
    ],
  },
];

// Reusable component for both Education and Experience cards
function ResumeCard({ title, subtitle, duration, content }) {
  return (
    <Card className="bg-black border-gray-800">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="font-mono text-lg">
              <MatrixText text={title} className="inline-block" />
            </CardTitle>
            <CardDescription className="font-mono text-gray-400">
              <span className="digital-rain">{subtitle}</span>
            </CardDescription>
          </div>
          <Badge className="bg-green-500/20 text-green-500 font-mono text-scramble">
            {duration}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        {Array.isArray(content) ? (
          <ul className="font-mono text-sm text-gray-400 space-y-2 list-disc pl-5">
            {content.map((item, index) => (
              <li
                key={index}
                className={index % 2 === 0 ? "digital-rain" : "text-scramble"}
              >
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <p className="font-mono text-sm text-gray-400">{content}</p>
        )}
      </CardContent>
    </Card>
  );
}

export function Resume() {
  return (
    <section id="resume" className="py-20 border-t border-gray-800">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-mono text-3xl font-bold tracking-tighter mb-4">
            <span className="text-green-500">+</span>{" "}
            <MatrixText text="RESUME" className="inline-block" />{" "}
            <span className="text-green-500">+</span>
          </h2>
          <p className="font-mono text-sm text-gray-400 max-w-2xl mx-auto">
            MY EDUCATION AND WORK EXPERIENCE
          </p>
        </div>

        <div className="space-y-16">
          {/* Experience Section */}
          <div>
            <div className="flex items-center mb-8">
              <Briefcase className="h-6 w-6 text-green-500 mr-3" />
              <h3 className="font-mono text-xl font-bold">
                <MatrixText text="EXPERIENCE" className="inline-block" />
              </h3>
            </div>
            <div className="space-y-6">
              {experienceData.map((xp, index) => (
                <ResumeCard
                  key={index}
                  title={xp.title}
                  subtitle={xp.subtitle}
                  duration={xp.duration}
                  content={xp.content}
                />
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <div className="flex items-center mb-8">
              <GraduationCap className="h-6 w-6 text-green-500 mr-3" />
              <h3 className="font-mono text-xl font-bold">
                <MatrixText text="EDUCATION" className="inline-block" />
              </h3>
            </div>
            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <ResumeCard
                  key={index}
                  title={edu.title}
                  subtitle={edu.subtitle}
                  duration={edu.duration}
                  content={edu.content}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
