import { motion } from 'framer-motion';
import { Battery, Leaf, Shield, Wrench } from 'lucide-react';

const props = [
  {
    icon: Battery,
    title: 'Baterai Tahan Lama',
    desc: 'Teknologi lithium-ion untuk jarak tempuh hingga 130 km per charge.',
  },
  {
    icon: Leaf,
    title: 'Ramah Lingkungan',
    desc: 'Zero emission, kontribusi nyata untuk udara bersih di kota Anda.',
  },
  {
    icon: Shield,
    title: 'Keamanan Terjamin',
    desc: 'Sistem anti-theft & alarm untuk ketenangan berkendara.',
  },
  {
    icon: Wrench,
    title: 'Layanan Purna Jual',
    desc: 'Garansi resmi & jaringan servis yang tersebar di seluruh Indonesia.',
  },
];

export default function ValueProps() {
  return (
    <section className="py-14 lg:py-20 bg-bg-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold font-[family-name:var(--font-heading)] mb-5">
            Kenapa Pilih <span className="text-primary">VinFast</span>?
          </h2>
          <p className="text-text-muted text-lg max-w-xl mx-auto">
            Solusi mobilitas pintar yang menggabungkan performa, keamanan, dan keberlanjutan.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {props.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-7 lg:p-8 rounded-2xl border border-gray-100 hover:shadow-lg hover:shadow-gray-100 transition-all group"
            >
              <div className="w-14 h-14 lg:w-16 lg:h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                <item.icon className="w-7 h-7 lg:w-8 lg:h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold font-[family-name:var(--font-heading)] mb-2">{item.title}</h3>
              <p className="text-text-muted text-base leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
