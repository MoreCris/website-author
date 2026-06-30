import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="border-t border-stone-200 bg-ivory mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <p className="font-display text-2xl text-ink tracking-tight">
            Cristiano <span className="italic font-light">Penido</span>
          </p>
          <p className="mt-3 text-sm text-ash font-body leading-relaxed">
            Escritor e romancista brasileiro. Desde 2008.
          </p>
        </div>

        <div>
          <p className="overline mb-4">Navegação</p>
          <ul className="space-y-2 text-sm text-graphite font-body">
            <li><Link to="/" className="hover:text-burgundy transition-colors duration-500">Início</Link></li>
            <li><Link to="/livros" className="hover:text-burgundy transition-colors duration-500">Livros</Link></li>
            <li><Link to="/contos" className="hover:text-burgundy transition-colors duration-500">Contos</Link></li>
            <li><Link to="/contato" className="hover:text-burgundy transition-colors duration-500">Contato</Link></li>
          </ul>
        </div>

        <div>
          <p className="overline mb-4">Contato</p>
          <a
            href="mailto:Cristianopenido@hotmail.com"
            className="text-sm text-graphite hover:text-burgundy transition-colors duration-500 font-body"
          >
            Cristianopenido@hotmail.com
          </a>
        </div>
      </div>

      <div className="border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex flex-col md:flex-row justify-between text-xs text-ash font-body">
          <p>© {new Date().getFullYear()} Cristiano Penido. Todos os direitos reservados.</p>
          <p className="italic">Literatura, fé e memória.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
