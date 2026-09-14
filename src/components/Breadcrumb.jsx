import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const routeLabels = {
  '/': 'Home',
  '/produk': 'Produk',
  '/kontak': 'Kontak',
  '/evo': 'VinFast Evo',
  '/feliz': 'VinFast Feliz',
  '/viper': 'VinFast Viper',
};

export default function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(Boolean);

  if (location.pathname === '/') return null;

  return (
    <nav className="flex items-center gap-1.5 text-sm text-text-muted pt-24 pb-2 lg:pt-28">
      <Link to="/" className="hover:text-primary transition-colors">
        <Home className="w-4 h-4" />
      </Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        const label = routeLabels[routeTo] || name;

        return (
          <span key={routeTo} className="flex items-center gap-1.5">
            <ChevronRight className="w-3.5 h-3.5" />
            {isLast ? (
              <span className="text-text font-medium">{label}</span>
            ) : (
              <Link to={routeTo} className="hover:text-primary transition-colors">
                {label}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
