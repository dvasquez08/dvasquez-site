import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const ProjectCard = ({
  title,
  description,
  tags,
  image,
  githubUrl,
  liveUrl,
  onCardClick,
}) => {
  return (
    <div onClick={onCardClick} className="cursor-pointer">
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="bg-gray-800/50 backdrop-blur-lg rounded-xl overflow-hidden border border-white/10"
      >
        <img src={image} alt={title} className="w-full h-40 object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-400 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-cyan-900/50 text-cyan-300 text-xs font-semibold px-2.5 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FiGithub size={20} />
            </a>
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FiExternalLink size={20} />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
