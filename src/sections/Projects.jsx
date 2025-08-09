import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import Klarivo from "../assets/klarivo.png";
import n8n from "../assets/n8n.jpg";
import CheckIn from "../assets/flutter.jpg";
import ProjectModal from "../components/ProjectModal";

const projectData = [
  {
    title: "Klarivo",
    description: "AI Sales Enablement Agent",
    longDescription:
      "Klarivo is an AI-powered sales enablement agent designed to help sales teams access information instantly. It uses a Retrieval-Augmented Generation (RAG) pipeline built with Langchain and Google's Gemini LLM to answer queries based on a company's internal knowledge base. The entire application is containerized with Docker and deployed on Google Cloud Run, with CI/CD handled by GitHub Actions.",
    tags: [
      "React",
      "Python",
      "Fast API",
      "Firestore",
      "Firebase Authentication",
      "Langchain",
      "Gemini LLM",
      "Docker",
      "Google Cloud Run",
      "Github Actions",
    ],
    image: Klarivo,
    githubUrl: "https://github.com/davtekio/Klarivo",
    liveUrl: "https://klarivo.app/login",
  },
  {
    title: "Tech Things HQ",
    description: "Fully Automated Self-Writing Tech Blog Website",
    longDescription:
      "This project is an experiment in content automation. An n8n workflow runs daily to fetch tech news, generate a unique blog post using an LLM, and publish it to a Ghost CMS instance. The front end is a simple, fast site that displays the content.",
    tags: ["React", "Tailwind CSS", "Firebase Firestore", "n8n"],
    image: n8n,
    githubUrl: "https://github.com/dvasquez08/tech-blog",
    liveUrl: "https://techthingshq.com/",
  },
  {
    title: "Student Membership Checkin",
    description: "Attendance Tracker App for Martial Arts School",
    longDescription:
      "Built for a local martial arts school, this cross-platform mobile app allows students to check in for classes using a unique ID. It provides administrators with a dashboard to track attendance and manage memberships. The app was built using Flutter for the front end and Firebase Firestore for the real-time database.",
    tags: ["Flutter", "Dart", "Firebase Firestore"],
    image: CheckIn,
    githubUrl: "https://github.com/dvasquez08/flutter_attendance_app",
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section id="projects" className="py-24 px-6 md:px-12 lg:px-24">
        <motion.div>
          <h2 className="text-4xl font-bold text-center mb-12">My Work</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectData.map((project, index) => (
              <ProjectCard
                key={index}
                {...project}
                onCardClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </motion.div>
      </section>
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default Projects;
