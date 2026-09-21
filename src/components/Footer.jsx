import { Link } from 'react-router-dom';
import { Zap, MapPin, Clock, Phone, Mail } from 'lucide-react';
import { dealer } from '../data/products';

export default function Footer() {
  return (
    <footer className="bg-text text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-2xl font-extrabold font-[family-name:var(--font-heading)] tracking-tight">
                Vin<span className="text-primary-light">Fast</span> Scooter
              </span>
            </Link>
            <p className="text-gray-400 text-base leading-relaxed max-w-xs">
              Sepeda listrik masa depan. Ramah lingkungan, hemat energi, dan dirancang untuk mobilitas urban Anda.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-base uppercase tracking-wider text-gray-300 mb-5">
              Navigasi
            </h4>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/produk', label: 'Produk' },
                { to: '/evo', label: 'VinFast Evo' },
                { to: '/feliz', label: 'VinFast Feliz' },
                { to: '/viper', label: 'VinFast Viper' },
                { to: '/kontak', label: 'Kontak' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-white text-base transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-base uppercase tracking-wider text-gray-300 mb-5">
              Hubungi Kami
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-base text-gray-400">
                <MapPin className="w-5 h-5 mt-0.5 shrink-0 text-accent" />
                {dealer.address}
              </li>
              <li className="flex items-center gap-3 text-base text-gray-400">
                <Clock className="w-5 h-5 shrink-0 text-accent" />
                {dealer.hours}
              </li>
              <li className="flex items-center gap-3 text-base text-gray-400">
                <Phone className="w-5 h-5 shrink-0 text-accent" />
                {dealer.phone}
              </li>
              <li className="flex items-center gap-3 text-base text-gray-400">
                <Mail className="w-5 h-5 shrink-0 text-accent" />
                Greenscootervinfast@gmail.com
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; 2026 VinFast Scooter. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm">
            New Thinking. New Possibilities.
          </p>
        </div>
      </div>
    </footer>
  );
}
