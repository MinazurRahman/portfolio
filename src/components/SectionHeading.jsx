import { motion } from "framer-motion";

export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="text-center mb-16">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-sm font-medium uppercase tracking-widest text-purple-400 mb-3"
      >
        {subtitle}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold"
      >
        {title.split(" ").map((word, i) => {
          const isGradient = i === 0 || i === title.split(" ").length - 1;
          return (
            <span key={i} className={isGradient ? "gradient-text" : "text-white"}>
              {word}{" "}
            </span>
          );
        })}
      </motion.h2>
    </div>
  );
}
