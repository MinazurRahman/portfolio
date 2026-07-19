import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from "react-icons/fi";
const socials = [
  { icon: FiGithub, href: "https://github.com/MinazurRahman", label: "GitHub" },
  { icon: FiLinkedin, href: "https://linkedin.com/in/minazur-rahman-290131239", label: "LinkedIn" },
  { icon: FiMail, href: "mailto:minhazur077@gmail.com", label: "Email" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="relative">
              <div className="gradient-ring rounded-full p-1">
                <div className="rounded-full p-1 bg-[#0a0a1a]">
                  <img
                    src="/profile.jpg"
                    alt="Minazur Rahman"
                    className="w-36 h-36 sm:w-44 sm:h-44 rounded-full object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div
                    className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 items-center justify-center text-5xl font-bold text-white hidden"
                  >
                    Minazur Rahman
                  </div>
                </div>
              </div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-[#0a0a1a]"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <p className="text-sm sm:text-base font-medium text-purple-400 mb-2">
              Hello, I&apos;m
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-4">
              <span className="gradient-text">Minazur Rahman</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl font-light text-gray-300 mb-6">
              Full-Stack Developer & Research Enthusiast
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="max-w-2xl text-gray-400 leading-relaxed mb-8 text-sm sm:text-base"
          >
            Computer Science undergraduate specializing in MERN and Django development.
            Passionate about building scalable web applications, designing REST APIs,
            and conducting research in explainable retail demand forecasting.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-10"
          >
            <a
              href="#projects"
              className="px-8 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-500 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:-translate-y-0.5"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-xl font-semibold text-sm glass glass-hover text-white transition-all duration-300 hover:-translate-y-0.5"
            >
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex gap-4"
          >
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-xl glass glass-hover text-gray-400 hover:text-white transition-colors duration-200"
                aria-label={label}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </motion.div>

          <motion.a
            href="#about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute bottom-8"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-gray-500 hover:text-white transition-colors"
            >
              <FiArrowDown size={24} />
            </motion.div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
