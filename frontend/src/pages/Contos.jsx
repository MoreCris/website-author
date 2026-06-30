// Phase 2 placeholder page for "Contos Aclamados pela Crítica"
import { ArrowLeft, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const publishers = [
  { name: 'Chiado Books', country: 'Portugal' },
  { name: 'Flamingo Edições', country: 'Portugal' },
];

const Contos = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 md:px-12 py-20 md:py-32">
      <p className="overline mb-6">Contos Aclamados pela Crítica</p>
      <h1 className="font-display text-5xl md:text-7xl font-light tracking-tighter leading-[1] text-ink">
        Cinco contos,
        <br />
        <span className="italic text-burgundy">duas editoras</span>
      </h1>

      <p className="mt-10 font-body text-lg md:text-xl text-graphite leading-relaxed max-w-3xl">
        Cinco contos de Cristiano Penido foram selecionados para integrar antologias
        literárias publicadas pelas editoras portuguesas{' '}
        <span className="italic text-burgundy">Chiado Books</span> e{' '}
        <span className="italic text-burgundy">Flamingo Edições</span>. Em breve, esta
        página apresentará cada conto com sua editora correspondente, o link da
        antologia publicada e uma versão de leitura gratuita disponível diretamente no
        site.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
        {publishers.map((p) => (
          <div key={p.name} className="p-8 bg-cream border border-stone-200">
            <p className="overline mb-3">Editora</p>
            <p className="font-display text-3xl text-ink">{p.name}</p>
            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-ash">{p.country}</p>
            <p className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-burgundy">
              <BookOpen size={14} /> Em breve
            </p>
          </div>
        ))}
      </div>

      <div className="border-t border-stone-200 mt-20 pt-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-graphite hover:text-burgundy transition-colors duration-500"
          data-testid="contos-back-home"
        >
          <ArrowLeft size={14} /> Voltar ao início
        </Link>
      </div>
    </div>
  );
};

export default Contos;
