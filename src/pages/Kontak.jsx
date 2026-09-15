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

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden border border-gray-200 aspect-square lg:aspect-auto"
            >
              <iframe
                title="Lokasi Dealer VinFast Cikawao"
                src="https://maps.google.com/maps?q=Vinfast%20Cikawao%2C%20Jl.%20Cikawao%20No.51C%2C%20Paledang%2C%20Lengkong%2C%20Bandung&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href={dealer.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm px-5 py-2.5 rounded-xl text-sm font-semibold text-primary shadow-lg border border-gray-100 hover:bg-white transition-colors"
              >
                <MapPin className="w-4 h-4" />
                Buka di Google Maps
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
