import { motion } from "framer-motion";
import {
  FiCode,
  FiServer,
  FiCloud,
  FiBookOpen,
  FiDatabase,
  FiCpu,
} from "react-icons/fi";
import SectionHeading from "./SectionHeading";

const highlights = [
  { icon: FiCode, label: "MERN Stack", color: "from-cyan-500 to-blue-500" },
  { icon: FiServer, label: "Django", color: "from-green-500 to-emerald-500" },
  { icon: FiBookOpen, label: "Research", color: "from-purple-500 to-violet-500" },
  { icon: FiCloud, label: "Cloud Deployment", color: "from-orange-500 to-amber-500" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="About Me" subtitle="Introduction" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-12 items-start"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="glass rounded-2xl p-8">
              <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                I&apos;m a Computer Science undergraduate at{" "}
                <span className="text-white font-medium">University of Asia Pacific</span>{" "}
                with a deep passion for full-stack web development and research.
                I specialize in building end-to-end solutions using the{" "}
                <span className="text-cyan-400 font-medium">MERN stack</span> and{" "}
                <span className="text-green-400 font-medium">Django</span>,
                with experience in designing scalable REST APIs, implementing
                authentication systems, and deploying applications to the cloud.
              </p>
              <p className="text-gray-300 leading-relaxed text-base sm:text-lg mt-4">
                Beyond development, I&apos;m actively involved in research focusing on{" "}
                <span className="text-purple-400 font-medium">
                  explainable retail demand forecasting
                </span>
                , combining causal price-effect modeling with probabilistic deep
                learning techniques. I thrive on solving complex problems and
                contributing to impactful projects.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass rounded-xl p-4 text-center">
                <FiCode className="mx-auto text-cyan-400 mb-2" size={24} />
                <p className="text-sm font-medium text-white">Frontend</p>
                <p className="text-xs text-gray-400">React, Vite, Tailwind</p>
              </div>
              <div className="glass rounded-xl p-4 text-center">
                <FiServer className="mx-auto text-green-400 mb-2" size={24} />
                <p className="text-sm font-medium text-white">Backend</p>
                <p className="text-xs text-gray-400">Node.js, Django, REST</p>
              </div>
              <div className="glass rounded-xl p-4 text-center">
                <FiDatabase className="mx-auto text-blue-400 mb-2" size={24} />
                <p className="text-sm font-medium text-white">Database</p>
                <p className="text-xs text-gray-400">MongoDB, SQL Server</p>
              </div>
              <div className="glass rounded-xl p-4 text-center">
                <FiCpu className="mx-auto text-purple-400 mb-2" size={24} />
                <p className="text-sm font-medium text-white">Research</p>
                <p className="text-xs text-gray-400">PyTorch, ML, Forecasting</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-4">What I Do</h3>
            {highlights.map(({ icon: Icon, label, color }) => (
              <motion.div
                key={label}
                whileHover={{ x: 8 }}
                className="glass rounded-xl p-5 flex items-center gap-4 glass-hover transition-all duration-300"
              >
                <div
                  className={`p-3 rounded-lg bg-gradient-to-br ${color} text-white flex-shrink-0`}
                >
                  <Icon size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">{label}</h4>
                  <p className="text-sm text-gray-400">
                    {label === "MERN Stack" &&
                      "Building modern, responsive web applications with React, Node.js, and MongoDB"}
                    {label === "Django" &&
                      "Developing robust backend systems with Django and Python"}
                    {label === "Research" &&
                      "Conducting research in ML, deep learning, and time series forecasting"}
                    {label === "Cloud Deployment" &&
                      "Deploying and managing applications on Render, Vercel, and cloud platforms"}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
