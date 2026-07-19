import { motion } from "framer-motion";
import { FiBookOpen, FiDatabase, FiCpu } from "react-icons/fi";
import SectionHeading from "./SectionHeading";

const techBadges = [
  "Python",
  "PyTorch",
  "Time Series Forecasting",
  "Deep Learning",
  "M5 Dataset",
];

export default function Research() {
  return (
    <section id="research" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Research & Thesis" subtitle="Academics" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass rounded-2xl overflow-hidden ring-1 ring-purple-500/20 shadow-lg shadow-purple-500/10">
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 p-1">
              <div className="bg-[#0a0a1a]/80 rounded-t-2xl px-6 sm:px-8 pt-6 pb-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-lg bg-purple-500/20">
                    <FiBookOpen size={20} className="text-purple-400" />
                  </div>
                  <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">
                    Research & Thesis
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                  Causal Dynamic Probabilistic HNAM for Explainable Retail
                  Demand Forecasting
                </h3>
              </div>
            </div>

            <div className="px-6 sm:px-8 pb-6 sm:pb-8 space-y-6">
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Developing an interpretable forecasting framework using the M5
                Forecasting dataset, combining causal price-effect modeling with
                probabilistic deep learning techniques.
              </p>

              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <FiCpu size={16} className="text-purple-400 flex-shrink-0" />
                <span>
                  Focus: Interpretable AI, Probabilistic Modeling, Causal Inference
                </span>
              </div>

              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <FiDatabase size={16} className="text-blue-400 flex-shrink-0" />
                <span>Dataset: M5 Walmart Sales Forecasting</span>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {techBadges.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-full text-xs font-medium bg-purple-500/10 text-purple-300 border border-purple-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
