import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

const projectData = [
  {
    title: "test",
    description: "test",
    tags: ["React", "Tailwind CSS", "Firebase Firestore", "n8n"],
    imageUrl: "",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "test",
    description: "test",
    tags: ["React", "Tailwind CSS", "Firebase Firestore", "n8n"],
    imageUrl: "",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "test",
    description: "test",
    tags: ["React", "Tailwind CSS", "Firebase Firestore", "n8n"],
    imageUrl: "",
    githubUrl: "#",
    liveUrl: "#",
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
