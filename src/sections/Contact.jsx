import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiYoutube } from "react-icons/fi";

function Contact() {
  return (
    <section id="contact" className="py-24 text-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl mx-auto px-6"
      >
        <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
        <p className="text-gray-400 mb-8">
          If you need an app built or if you need some automation in your life.
          Feel free to
        </p>
        <a
          href="mailto:dvasquez@davtek.io"
          className="inline-block bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 px-8 rounded-lg transition-colors mb-12"
        >
          Say Hello
        </a>
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/dvasquez08"
            target="_blank"
            className="text-gray-400 hover:text-white"
          >
            <FiGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/david-vasquez-yeg/"
            target="_blank"
            className="text-gray-400 hover:text-white"
          >
            <FiLinkedin size={24} />
          </a>
          <a
            href="https://www.youtube.com/@davtekio"
            target="_blank"
            className="text-gray-400 hover:text-white"
          >
            <FiYoutube size={24} />
          </a>
          <a
            href="mailto:dvasquez@davtek.io"
            className="text-gray-400 hover:text-white"
          >
            <FiMail size={24} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
