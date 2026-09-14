import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { dealer } from '../data/products';

export default function CTASection({ productName }) {
  const message = productName
    ? `Halo, saya tertarik dengan ${productName}. Bisa info lebih lanjut?`
    : 'Halo, saya tertarik dengan VinFast Scooter. Bisa info lebih lanjut?';

  return (
    <section className="py-14 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-10 lg:p-16 text-center overflow-hidden"
        >
          {/* Decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative">
            <h2 className="text-3xl lg:text-4xl font-extrabold font-[family-name:var(--font-heading)] text-white mb-5">
              Tertarik dengan {productName || 'VinFast Scooter'}?
            </h2>
            <p className="text-white/80 text-lg max-w-lg mx-auto mb-10">
              Hubungi kami sekarang untuk konsultasi gratis, info harga terbaru, dan penawaran spesial.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${dealer.whatsapp}?text=${encodeURIComponent(message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-xl text-base font-bold hover:bg-gray-50 transition-all hover:shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                Chat via WhatsApp
              </a>
              <Link
                to="/kontak"
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 rounded-xl text-base font-semibold border border-white/20 hover:bg-white/20 transition-all"
              >
                Lihat Kontak
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
