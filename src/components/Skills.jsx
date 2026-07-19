import { motion } from "framer-motion";
import {
  SiJavascript,
  SiPython,
  SiReact,
  SiVite,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPostman,
  SiRedis,
  SiPytorch,
} from "react-icons/si";
import SectionHeading from "./SectionHeading";

const categories = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
      { name: "Python", icon: SiPython, color: "#3776ab" },
      { name: "Java", icon: null, color: "#f89820", letter: "J" },
      { name: "C", icon: null, color: "#555555", letter: "C" },
      { name: "SQL", icon: null, color: "#e38c00", letter: "S" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact, color: "#61dafb" },
      { name: "Vite", icon: SiVite, color: "#646cff" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06b6d4" },
      { name: "DaisyUI", icon: null, color: "#5a0ef8", letter: "D" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952b3" },
      { name: "HTML", icon: null, color: "#e34f26", letter: "H" },
      { name: "CSS", icon: null, color: "#264de4", letter: "C" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#ffffff" },
      { name: "Django", icon: SiDjango, color: "#092e20" },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
      { name: "MongoDB Atlas", icon: SiMongodb, color: "#47a248" },
      { name: "MS SQL Server", icon: null, color: "#cc2927", letter: "SQL" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: SiGit, color: "#f05032" },
      { name: "GitHub", icon: SiGithub, color: "#ffffff" },
      { name: "Postman", icon: SiPostman, color: "#ff6c37" },
      { name: "Render", icon: null, color: "#46e3b7", letter: "R" },
      { name: "Redis", icon: SiRedis, color: "#dc382d" },
      { name: "VS Code", icon: null, color: "#007acc", letter: "VS" },
    ],
  },
  {
    title: "Research & AI",
    skills: [
      { name: "PyTorch", icon: SiPytorch, color: "#ee4c2c" },
      { name: "Machine Learning", icon: null, color: "#ff6f00", letter: "ML" },
      { name: "Time Series", icon: null, color: "#9c27b0", letter: "TS" },
      { name: "Deep Learning", icon: null, color: "#e91e63", letter: "DL" },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

function SkillBadge({ skill }) {
  const Icon = skill.icon;

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.08, y: -2 }}
      className="glass rounded-xl px-4 py-3 flex items-center gap-3 glass-hover transition-all duration-200 cursor-default group"
    >
      {Icon ? (
        <Icon
          size={20}
          className="flex-shrink-0 transition-transform group-hover:scale-110"
          style={{ color: skill.color }}
        />
      ) : (
        <span
          className="flex-shrink-0 min-w-[20px] h-5 rounded text-[10px] font-bold flex items-center justify-center"
          style={{ color: skill.color }}
        >
          {skill.letter}
        </span>
      )}
      <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
        {skill.name}
      </span>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Skills & Technologies" subtitle="Expertise" />

        <div className="space-y-12">
          {categories.map((cat) => (
            <motion.div
              key={cat.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <h3 className="text-lg font-semibold text-white mb-5 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
                {cat.title}
              </h3>
              <motion.div
                variants={containerVariants}
                className="flex flex-wrap gap-3"
              >
                {cat.skills.map((skill) => (
                  <SkillBadge key={skill.name} skill={skill} />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
