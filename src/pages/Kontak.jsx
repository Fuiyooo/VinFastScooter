import { MapPin, Clock, Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { dealer } from '../data/products';

export default function Kontak() {
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
              Hubungi Kami
            </h1>
            <p className="text-text-muted text-lg max-w-xl mx-auto">
              Kami siap membantu Anda menemukan VinFast Scooter yang tepat.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-6"
            >
              {[
                {
                  icon: MapPin,
                  title: 'Alamat',
                  content: dealer.address,
                },
                {
                  icon: Clock,
                  title: 'Jam Operasional',
                  content: dealer.hours,
                },
                {
                  icon: Phone,
                  title: 'Telepon',
                  content: dealer.phone,
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-5 bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold font-[family-name:var(--font-heading)] text-lg mb-1">
                      {item.title}
                    </h3>
                    <p className="text-text-muted text-base">{item.content}</p>
                  </div>
                </div>
              ))}

              <a
                href={`https://wa.me/${dealer.whatsapp}?text=${encodeURIComponent(
                  'Halo, saya tertarik dengan VinFast Scooter. Bisa info lebih lanjut?'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-accent text-white w-full py-4 rounded-xl text-base font-bold hover:bg-accent/90 transition-all hover:shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                Chat via WhatsApp
              </a>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl border border-gray-200 aspect-square lg:aspect-auto flex flex-col items-center justify-center p-10"
            >
              <MapPin className="w-16 h-16 text-primary/30 mb-5" />
              <p className="text-text-muted text-lg font-medium text-center">
                Peta Lokasi Dealer
              </p>
              <p className="text-text-muted/60 text-sm mt-2 text-center">
                Google Maps embed akan ditampilkan di sini
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
