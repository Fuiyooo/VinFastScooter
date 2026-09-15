import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { fullSpecs } from '../data/fullSpecs';

function FullSpecsModal({ productId, productName, onClose }) {
  const sections = fullSpecs[productId] || [];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.96 }}
        transition={{ duration: 0.25 }}
        className="bg-white rounded-2xl w-full max-w-4xl max-h-[85vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div>
            <h3 className="font-bold font-[family-name:var(--font-heading)] text-xl">
              Spesifikasi Teknis
            </h3>
            <p className="text-sm text-text-muted">{productName}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl hover:bg-gray-100 transition-colors"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto p-6 space-y-8">
          {sections.map((group) => (
            <div key={group.section}>
              <h4 className="font-bold font-[family-name:var(--font-heading)] text-accent text-sm uppercase tracking-wide mb-3">
                {group.section}
              </h4>
              <div className="rounded-xl border border-gray-100 overflow-hidden">
                <div className="grid grid-cols-[1.4fr_1fr_1fr] bg-gray-50 text-xs font-bold uppercase tracking-wide text-text-muted">
                  <div className="px-4 py-3">Spesifikasi</div>
                  <div className="px-4 py-3 text-center">Versi 1 Baterai</div>
                  <div className="px-4 py-3 text-center">Versi 2 Baterai</div>
                </div>
                {group.rows.map(([label, v1, v2], i) => (
                  <div
                    key={label + i}
                    className={`grid grid-cols-[1.4fr_1fr_1fr] text-sm ${
                      i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                    } border-t border-gray-50`}
                  >
                    <div className="px-4 py-3 text-text-muted font-medium">{label}</div>
                    <div className="px-4 py-3 text-center text-text font-semibold">{v1}</div>
                    <div className="px-4 py-3 text-center text-text font-semibold">{v2}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <p className="text-xs text-text-muted text-center pt-2 pb-4">
            Semua visual, spesifikasi, dan fitur yang direpresentasi hanya untuk tujuan ilustrasi dan tidak mengikat. Produk sebenarnya mungkin berbeda dan dapat berubah sewaktu-waktu tanpa pemberitahuan.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function SpecTable({ product }) {
  const [isOpen, setIsOpen] = useState(false);
  const entries = Object.entries(product.specs);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
    >
      <div className="px-8 py-5 border-b border-gray-100">
        <h3 className="font-bold font-[family-name:var(--font-heading)] text-xl">
          Spesifikasi Utama
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
      <div className="px-8 py-5">
        <button
          onClick={() => setIsOpen(true)}
          className="w-full inline-flex items-center justify-center gap-2 border-2 border-accent text-accent px-6 py-3.5 rounded-xl text-base font-bold hover:bg-accent hover:text-white transition-all"
        >
          Lihat Spesifikasi Lengkap
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <FullSpecsModal
            productId={product.id}
            productName={product.name}
            onClose={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
