import { Link } from 'react-router-dom';
import { ArrowUpRight, BookOpen } from 'lucide-react';
import { shortStories } from '@/data/books';

const Contos = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
      {/* Header */}
      <header className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 md:mb-20" data-testid="contos-page">
        <div className="lg:col-span-7">
          <p className="overline mb-6">Contos Aclamados pela Crítica</p>
          <h1 className="font-display text-5xl md:text-7xl font-light tracking-tighter leading-[1] text-ink">
            Cinco contos,
            <br />
            <span className="italic text-burgundy">duas editoras</span>
          </h1>
        </div>
        <div className="lg:col-span-5 lg:pt-8">
          <p className="font-body text-lg md:text-xl text-graphite leading-relaxed">
            Cinco contos de Cristiano Penido foram selecionados para integrar antologias
            literárias das editoras portuguesas <span className="italic">Chiado Books</span> e{' '}
            <span className="italic">Flamingo Edições</span>. Agora disponíveis para leitura
            gratuita, diretamente neste site.
          </p>
        </div>
      </header>

      <div className="border-t border-stone-200 mb-16" />

      {/* Stories list */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-14">
        {shortStories.map((story, i) => (
          <article
            key={story.slug}
            className="flex flex-col group"
            data-testid={`story-card-${story.slug}`}
          >
            <div className="flex items-baseline gap-4 mb-4">
              <p className="font-display text-5xl text-burgundy/30 leading-none">
                {String(i + 1).padStart(2, '0')}
              </p>
              <p className="overline">
                {story.publisher} · {story.country}
              </p>
            </div>

            <h2 className="font-display text-3xl md:text-4xl font-light tracking-tight text-ink leading-tight">
              {story.title}
            </h2>
            <p className="mt-3 font-body italic text-graphite text-base leading-relaxed">
              {story.tagline}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs uppercase tracking-[0.2em] text-ash">
              <span>Antologia: {story.anthology}</span>
              <span className="text-stone-300">·</span>
              <span>{story.date}</span>
            </div>

            <Link
              to={`/contos/${story.slug}`}
              data-testid={`story-read-${story.slug}`}
              className="mt-6 inline-flex items-center gap-3 self-start bg-ink text-ivory px-6 py-3 text-xs uppercase tracking-[0.25em] hover:bg-burgundy transition-colors duration-500"
            >
              <BookOpen size={14} /> Ler o conto
              <ArrowUpRight size={12} />
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Contos;
