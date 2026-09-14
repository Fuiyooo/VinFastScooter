import Hero from '../components/Hero';
import ValueProps from '../components/ValueProps';
import ProductCard from '../components/ProductCard';
import CTASection from '../components/CTASection';
import Carousel from '../components/Carousel';
import { motion } from 'framer-motion';
import { products, katalogImages } from '../data/products';

export default function Home() {
  return (
    <>
      <Hero />

      {/* Carousel */}
      <section className="bg-white">
        <div className="w-full">
          <Carousel images={katalogImages} autoPlay interval={5000} fullWidth />
        </div>
      </section>

      <ValueProps />

      {/* Products Section */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl lg:text-4xl font-extrabold font-[family-name:var(--font-heading)] mb-4">
              Produk Kami
            </h2>
            <p className="text-text-muted max-w-xl mx-auto">
              Pilih VinFast Scooter yang sesuai dengan kebutuhan dan gaya hidup Anda.
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
    </>
  );
}
