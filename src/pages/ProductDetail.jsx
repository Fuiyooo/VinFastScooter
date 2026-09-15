import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { products, dealer } from '../data/products';
import SpecTable from '../components/SpecTable';
import CTASection from '../components/CTASection';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Produk tidak ditemukan</h1>
          <Link to="/produk" className="text-primary hover:underline text-lg">
            Kembali ke Produk
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Product */}
      <section className="pt-24 lg:pt-32 pb-10 lg:pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/produk"
            className="inline-flex items-center gap-2 text-base text-text-muted hover:text-primary transition-colors mb-10"
          >
            <ArrowLeft className="w-5 h-5" />
            Kembali ke Produk
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-100 aspect-square flex items-center justify-center overflow-hidden"
            >
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-contain p-6"
              />
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
                {product.tagline}
              </span>
              <h1 className="text-4xl lg:text-5xl font-extrabold font-[family-name:var(--font-heading)] mb-3">
                {product.name}
              </h1>
              <p className="text-text-muted text-lg mb-7">{product.taglineDesc}</p>

              <div className="text-4xl font-bold text-primary mb-7">{product.price}</div>

              {/* Colors */}
              <div className="mb-7">
                <p className="text-base font-medium text-text-muted mb-3">Warna Tersedia</p>
                <div className="flex gap-3">
                  {product.colors.map((color) => (
                    <span
                      key={color}
                      className="px-5 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-base font-medium"
                    >
                      {color}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quick Specs */}
              <div className="grid grid-cols-2 gap-4 mb-10">
                {[
                  { label: 'Jarak Tempuh', value: product.specs['Jarak Tempuh'] },
                  { label: 'Kecepatan Maks', value: product.specs['Kecepatan Maks'] },
                  { label: 'Daya Motor', value: product.specs['Daya Motor'] },
                  { label: 'Baterai', value: product.specs['Kapasitas Baterai'] },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-gray-50 rounded-xl p-4 text-center"
                  >
                    <p className="text-sm text-text-muted">{item.label}</p>
                    <p className="text-base font-bold mt-1">{item.value}</p>
                  </div>
                ))}
              </div>

              <a
                href={`https://wa.me/${dealer.whatsapp}?text=${encodeURIComponent(
                  `Halo, saya tertarik dengan ${product.name}. Bisa info lebih lanjut?`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-white px-10 py-4 rounded-xl text-base font-bold hover:bg-accent/90 transition-all hover:shadow-lg"
              >
                Tanya Harga via WhatsApp
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-10 lg:py-14 bg-bg-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold font-[family-name:var(--font-heading)] mb-8">
            Fitur Unggulan
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {product.features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-4 bg-white p-5 rounded-xl border border-gray-100"
              >
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                  <Check className="w-5 h-5 text-accent" />
                </div>
                <span className="text-base font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs Table */}
      <section className="py-10 lg:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SpecTable product={product} />
        </div>
      </section>

      <CTASection productName={product.name} />
    </div>
  );
}
