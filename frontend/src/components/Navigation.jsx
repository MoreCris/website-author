import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV } from '@/constants/testIds';

const links = [
  { to: '/', label: 'Início', testId: NAV.home, end: true },
  { to: '/livros', label: 'Livros', testId: NAV.books },
  { to: '/contos', label: 'Contos', testId: NAV.shortStories },
  { to: '/contato', label: 'Contato', testId: NAV.contact },
];

export const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-ivory/95 backdrop-blur-sm border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
        <Link
          to="/"
          data-testid={NAV.brand}
          className="font-display text-xl md:text-2xl tracking-tight text-ink hover:text-burgundy transition-colors duration-500"
        >
          Cristiano <span className="italic font-light">Penido</span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              data-testid={l.testId}
              className={({ isActive }) =>
                `text-xs uppercase tracking-[0.25em] font-medium transition-colors duration-500 ${
                  isActive ? 'text-burgundy' : 'text-graphite hover:text-burgundy'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <button
          data-testid={NAV.mobileToggle}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-ink p-2"
          aria-label="Abrir menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-stone-200 bg-ivory">
          <nav className="flex flex-col px-6 py-4">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                onClick={() => setOpen(false)}
                data-testid={`${l.testId}-mobile`}
                className={({ isActive }) =>
                  `py-3 text-sm uppercase tracking-[0.25em] border-b border-stone-100 ${
                    isActive ? 'text-burgundy' : 'text-graphite'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navigation;
