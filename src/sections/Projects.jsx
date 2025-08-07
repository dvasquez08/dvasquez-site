import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import Klarivo from "../assets/klarivo.png";
import n8n from "../assets/n8n.jpg";
import CheckIn from "../assets/flutter.jpg";

const projectData = [
  {
    title: "Klarivo",
    description: "AI Sales Enablement Agent",
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
    tags: ["React", "Tailwind CSS", "Firebase Firestore", "n8n"],
    image: n8n,
    githubUrl: "https://github.com/dvasquez08/tech-blog",
    liveUrl: "https://techthingshq.com/",
  },
  {
    title: "Student Membership Checkin",
    description: "Attendance Tracker App for Martial Arts School",
    tags: ["Flutter", "Dart", "Firebase Firestore"],
    image: CheckIn,
    githubUrl: "https://github.com/dvasquez08/flutter_attendance_app",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-12">My Work</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;
