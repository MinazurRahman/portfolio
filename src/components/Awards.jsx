import { motion } from "framer-motion";
import { FiAward, FiCalendar } from "react-icons/fi";
import SectionHeading from "./SectionHeading";

const awards = [
  {
    title: "Vice Chancellor's Award",
    count: "4 Times",
    description:
      "Received in Spring 2024, Fall 2024, Spring 2025, and Fall 2025 for achieving a semester GPA of 3.90 or above.",
    semesters: ["Spring 2024", "Fall 2024", "Spring 2025", "Fall 2025"],
  },
];

export default function Awards() {
  return (
    <section id="awards" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Awards & Achievements" subtitle="Recognition" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          {awards.map((award) => (
            <div
              key={award.title}
              className="glass rounded-2xl p-8 ring-1 ring-amber-500/20 shadow-lg shadow-amber-500/5"
            >
              <div className="flex items-start gap-5">
                <div className="p-3 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 text-white flex-shrink-0">
                  <FiAward size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                    {award.title}
                  </h3>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-4">
                    {award.count}
                  </span>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-5">
                    {award.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {award.semesters.map((sem) => (
                      <span
                        key={sem}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white/5 text-gray-300 border border-white/10"
                      >
                        <FiCalendar size={12} className="text-amber-400" />
                        {sem}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
