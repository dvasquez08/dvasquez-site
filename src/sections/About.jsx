import { motion } from "framer-motion";

const skills = [
  "React",
  "Python",
  "Flutter",
  "Tailwind CSS",
  "Firebase",
  "Google Cloud",
  "Azure",
  "n8n",
];

function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-4">About Me</h2>
        <p className="text-lg text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Welcome! I'm a IT technician and an app developer that enjoys building
          things, and also fixing things. I really do like problem solving. Yes,
          even the bugs. It's a great learning oppurtunity and it's how I got to
          where I am.
        </p>
        <p className="text-lg text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Where there is a problem, there's a way. And finding that way by
          creating helpful tools is what I'm passionate about! Feel free to take
          a look at my work. I'm open to building apps for you or your business,
          and to collaborate with others.
        </p>
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-6">My Toolkit</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <motion.div
                key={skill}
                whileHover={{ scale: 1.1 }}
                className="bg-gray-800 text-gray-300 font-medium px-4 py-2 rounded-full cursor-default"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
