import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiStar } from "react-icons/fi";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    title: "ThinkBoard",
    description:
      "Full-stack MERN note management platform featuring secure REST APIs, MongoDB integration, Redis-based rate limiting, responsive React frontend, and cloud deployment.",
    github: "https://github.com/MinazurRahman/ThinkBoard",
    live: "https://thinkboard-4krh.onrender.com/",
    tech: ["MongoDB", "Express", "React", "Node.js", "Redis", "Tailwind CSS"],
    image: "/projects/thinkboard.png",
    featured: true,
  },
  {
    title: "Zestora",
    description:
      "Recipe sharing platform built with Django featuring Google OAuth, social interactions, advanced search, bookmarking, and PDF export.",
    github: "https://github.com/MinazurRahman/Zestora",
    live: "https://zestora-1.onrender.com/",
    tech: ["Django", "Python", "SQL", "Bootstrap"],
    image: "/projects/zestora.png",
    featured: false,
  },
  {
    title: "TicketNao",
    description:
      "Multi-transport ticket booking platform supporting bus, train, air, and ship reservations with booking management workflows.",
    github: "https://github.com/MinazurRahman/TicketNao",
    live: null,
    tech: ["Django", "SQL", "JavaScript", "Bootstrap"],
    image: "/projects/ticketnao.png",
    featured: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Featured Projects" subtitle="Portfolio" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className={`glass rounded-2xl overflow-hidden transition-all duration-300 ${
                project.featured
                  ? "ring-1 ring-purple-500/30 shadow-lg shadow-purple-500/10"
                  : ""
              }`}
            >
              {project.featured && (
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-2 flex items-center gap-2">
                  <FiStar size={14} className="text-yellow-300" />
                  <span className="text-xs font-semibold text-white uppercase tracking-wider">
                    Featured Project
                  </span>
                </div>
              )}

              <div className="relative group">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover border-b border-white/5"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
                    >
                      <FiGithub size={14} />
                      Code
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium bg-purple-600/80 backdrop-blur-sm text-white hover:bg-purple-500/80 transition-colors"
                      >
                        <FiExternalLink size={14} />
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm sm:text-base max-w-2xl mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-gray-300 border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium glass glass-hover text-gray-300 hover:text-white transition-colors"
                  >
                    <FiGithub size={16} />
                    GitHub
                  </motion.a>
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-500 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-purple-500/20"
                    >
                      <FiExternalLink size={16} />
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
