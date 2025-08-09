import { motion } from "framer-motion";
import { FiX, FiGithub, FiExternalLink } from "react-icons/fi";

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modal = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: {
    y: "0",
    opacity: 1,
    transition: { delay: 0.2, type: "spring", stiffness: 100 },
  },
};

const ProjectModal = ({ project, onClose }) => {
  // Don't render if no project is selected
  if (!project) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-black/70 z-50 flex justify-center items-center p-4"
      variants={backdrop}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={onClose} // Close modal when backdrop is clicked
    >
      <motion.div
        className="bg-[#1a1a1a] border border-white/10 rounded-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-8 relative"
        variants={modal}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <FiX size={24} />
        </button>
        <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-sky-500 to-cyan-400 bg-clip-text text-transparent">
          {project.title}
        </h2>
        <div className="flex flex-wrap gap-2 my-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-cyan-900/50 text-cyan-300 text-xs font-semibold px-2.5 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover rounded-lg my-4"
        />
        <p className="text-gray-300 whitespace-pre-line">
          {project.longDescription}
        </p>
        <div className="flex items-center gap-6 mt-6">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors"
          >
            <FiGithub /> GitHub Repo
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors"
          >
            <FiExternalLink /> Live Site
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
