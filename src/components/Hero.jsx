import { Link } from 'react-router-dom';
import { ArrowRight, Battery, Leaf, Gauge } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-white via-blue-50/30 to-gray-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-10 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-semibold mb-8">
              <Battery className="w-4 h-4" />
              Sepeda Listrik Premium
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold font-[family-name:var(--font-heading)] leading-tight tracking-tight mb-8">
              New Thinking,{' '}
              <span className="text-primary">New Possibilities</span>
            </h1>

            <p className="text-text-muted text-xl lg:text-2xl max-w-xl mb-10 leading-relaxed">
              Jelajahi masa depan mobilitas dengan VinFast Scooter. 
              Hemat energi, ramah lingkungan, dan dirancang untuk gaya hidup modern Anda.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-4 mb-12">
              {[
                { icon: Leaf, label: 'Ramah Lingkungan' },
                { icon: Gauge, label: 'Performa Tinggi' },
                { icon: Battery, label: 'Daya Tahan Lama' },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 bg-white px-5 py-2.5 rounded-full text-base font-medium text-text border border-gray-100 shadow-sm"
                >
                  <Icon className="w-5 h-5 text-accent" />
                  {label}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/produk"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-10 py-5 rounded-xl text-base font-semibold hover:bg-primary-dark transition-all hover:shadow-lg hover:shadow-primary/20"
              >
                Lihat Produk
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/kontak"
                className="inline-flex items-center justify-center gap-2 bg-white text-text px-10 py-5 rounded-xl text-base font-semibold border border-gray-200 hover:border-gray-300 transition-all"
              >
                Hubungi Dealer
              </Link>
            </div>
          </motion.div>

          {/* Right - Brosur Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-xl">
              <img
                src="/images/catalog/page-1.webp"
                alt="VinFast Scooter Brosur"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
