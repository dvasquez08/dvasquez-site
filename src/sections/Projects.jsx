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
      "Klarivo is an AI-powered sales enablement agent designed to help business owners find leads, qualify them, and schedule a meeting for them. The way it works is that it generates leads triggered by a button press, lists them for the user and writes an outreach email for each lead. It uses a human-in-the-loop system, meaning it does not send automatically. The end user can choose to edit the message or not send it, even deleting any leads they choose. They can mass send all emails. The app tracks metrics such as how many leads were emailed, how many opened the email, and how many clicked on the link that directs the lead to the landing page. The landing page is a dynamic page that loads differently depending on which user is logged in. It is a page where a user can fill out a form or interact with a chat bot which can schedule a meeting between the lead and the business owner. The entire application is containerized with Docker and deployed on Google Cloud Run, with CI/CD handled by GitHub Actions.",
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
      "Sendgrid",
    ],
    image: Klarivo,
    githubUrl: "https://github.com/davtekio/Klarivo",
    liveUrl: "https://klarivo.app/login",
  },
  {
    title: "Tech Things HQ",
    description: "Fully Automated Self-Writing Tech Blog Website",
    longDescription:
      "This project is an experiment in content automation. An n8n workflow runs daily to fetch tech news, generate a unique blog post along with an image using Google Gemini, and publishes it to a Firestore database. The front end is a simple, React JS site that displays the content and pulls the information from Firestore that the workflow populates, displaying the blog posts.",
    tags: ["React", "Tailwind CSS", "Firebase Firestore", "n8n"],
    image: n8n,
    githubUrl: "https://github.com/dvasquez08/tech-blog",
    liveUrl: "https://techthingshq.com/",
  },
  {
    title: "Student Membership Checkin",
    description: "Attendance Tracker App for Martial Arts School",
    longDescription:
      "Built for a local martial arts school, this cross-platform mobile app allows students to check in for classes using an ID card with a barcode. It provides administrators with a dashboard to track attendance and manage memberships. The app was built using Flutter for the front end and Firebase Firestore for the real-time database. This helped save the school hours of manually writing attendance, saved on paper, and descreased human errors.",
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
