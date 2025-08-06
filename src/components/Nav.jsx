import { motion } from "framer-motion";

function Nav() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-3xl z-50"
    >
      <div className="flex items-center justify-between rounded-full bg-black/30 backdrop-blur-lg border border-white/10 px-6 py-3">
        <div className="text-xl font-bold bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
          David Vasquez
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-300">
          <a href="#about" className="hover:text-white transition-colors">
            About
          </a>
          <a href="#projects" className="hover:text-white transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
        </div>
        <a
          href="#contact"
          className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-full transition-colors"
        >
          Work with Me
        </a>
      </div>
    </motion.nav>
  );
}

export default Nav;
