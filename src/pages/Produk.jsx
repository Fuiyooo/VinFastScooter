import ProductCard from '../components/ProductCard';
import CTASection from '../components/CTASection';
import { motion } from 'framer-motion';
import { products } from '../data/products';

export default function Produk() {
  return (
    <div className="min-h-screen">
      <section className="pt-24 lg:pt-32 pb-10 lg:pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            <h1 className="text-4xl lg:text-5xl font-extrabold font-[family-name:var(--font-heading)] mb-5">
              Produk VinFast Scooter
            </h1>
            <p className="text-text-muted text-lg max-w-xl mx-auto">
              Tiga pilihan sepeda listrik untuk mendukung mobilitas harian Anda.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {products.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
