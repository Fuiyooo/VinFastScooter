import { motion } from 'framer-motion';

export default function SpecTable({ specs }) {
  const entries = Object.entries(specs);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
    >
      <div className="px-8 py-5 border-b border-gray-100">
        <h3 className="font-bold font-[family-name:var(--font-heading)] text-xl">
          Spesifikasi Lengkap
        </h3>
      </div>
      <div className="divide-y divide-gray-50">
        {entries.map(([key, value], i) => (
          <div
            key={key}
            className={`flex items-center justify-between px-8 py-4 text-base ${
              i % 2 === 0 ? 'bg-gray-50/50' : 'bg-white'
            }`}
          >
            <span className="text-text-muted font-medium">{key}</span>
            <span className="text-text font-semibold text-right">{value}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
