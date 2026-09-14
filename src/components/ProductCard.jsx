import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProductCard({ product, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={`/${product.id}`}
        className="group block bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1"
      >
        {/* Image */}
        <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 aspect-[3/4] flex items-center justify-center overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-contain p-3 hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
            <span className="text-sm font-semibold text-primary">{product.tagline}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] mb-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-text-muted text-base mb-4">{product.taglineDesc}</p>

          {/* Quick Specs */}
          <div className="flex items-center gap-4 text-sm text-text-muted mb-5">
            <span>{product.specs['Jarak Tempuh']}</span>
            <span className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
            <span>{product.specs['Kecepatan Maks']}</span>
          </div>

          {/* Price + CTA */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <span className="text-xl font-bold text-primary">{product.price}</span>
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-text-muted group-hover:text-primary transition-colors">
              Lihat Detail
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
