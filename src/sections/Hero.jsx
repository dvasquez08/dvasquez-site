import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="px-4"
      >
        <p className="text-lg text-cyan-400 mb-2">Hi, my name is</p>
        <h1 className="text-5xl md:text-8xl font-extrabold mb-4">
          <span className="bg-gradient-to-r from-sky-700 to-cyan-400 bg-clip-text text-transparent">
            David Vasquez
          </span>
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-400 mb-8">
          I build things with automation
        </h2>
        <motion.a
          href="#projects"
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 12px rgba(107, 114, 128, 0.5)",
          }}
          whileTap={{ scale: 0.95 }}
          className="bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-shadow duration-300"
        >
          See My Work
        </motion.a>
      </motion.div>
    </section>
  );
}

export default Hero;
