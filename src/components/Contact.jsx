import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin, FiArrowUpRight } from "react-icons/fi";
import SectionHeading from "./SectionHeading";

const links = [
  {
    icon: FiMail,
    label: "Email",
    value: "minhazur077@gmail.com",
    href: "mailto:minhazur077@gmail.com",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: FiGithub,
    label: "GitHub",
    value: "MinazurRahman",
    href: "https://github.com/MinazurRahman",
    color: "from-gray-500 to-gray-600",
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    value: "minazur-rahman",
    href: "https://linkedin.com/in/minazur-rahman-290131239",
    color: "from-blue-500 to-blue-600",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Get In Touch" subtitle="Contact" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <p className="text-gray-400 text-lg">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <p className="text-2xl sm:text-3xl font-bold gradient-text mt-4">
            Let&apos;s build something amazing together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto grid sm:grid-cols-3 gap-4"
        >
          {links.map(({ icon: Icon, label, value, href, color }) => (
            <motion.a
              key={label}
              href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel={label !== "Email" ? "noopener noreferrer" : undefined}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="glass rounded-xl p-6 text-center glass-hover transition-all duration-300 group"
            >
              <div
                className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white mb-4 group-hover:shadow-lg transition-shadow`}
              >
                <Icon size={22} />
              </div>
              <p className="text-sm font-medium text-gray-400 mb-1">{label}</p>
              <p className="text-white font-semibold text-sm flex items-center justify-center gap-1">
                {value}
                <FiArrowUpRight
                  size={14}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </p>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="mailto:minhazur077@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-500 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:-translate-y-0.5"
          >
            <FiMail size={18} />
            Send a Message
          </a>
        </motion.div>
      </div>
    </section>
  );
}
