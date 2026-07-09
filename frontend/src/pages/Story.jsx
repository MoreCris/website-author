import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { getStoryBySlug, shortStories } from '@/data/books';

const Story = () => {
  const { slug } = useParams();
  const story = getStoryBySlug(slug);

  if (!story) return <Navigate to="/contos" replace />;

  const idx = shortStories.findIndex((s) => s.slug === slug);
  const next = shortStories[(idx + 1) % shortStories.length];

  return (
    <article className="max-w-3xl mx-auto px-6 md:px-12 py-16 md:py-24" data-testid={`story-page-${slug}`}>
      <Link
        to="/contos"
        className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-ash hover:text-burgundy transition-colors duration-500 mb-12"
        data-testid="story-back-link"
      >
        <ArrowLeft size={14} /> Todos os contos
      </Link>

      <header className="mb-12 pb-12 border-b border-stone-200">
        <p className="overline mb-4">
          {story.publisher} · Antologia "{story.anthology}" · {story.date}
        </p>
        <h1 className="font-display text-5xl md:text-7xl font-light tracking-tighter leading-[1] text-ink">
          {story.title}
        </h1>
        <p className="mt-6 font-display italic text-xl md:text-2xl text-graphite leading-snug">
          {story.tagline}
        </p>
        <p className="mt-6 text-xs uppercase tracking-[0.25em] text-ash">
          Por Cristiano Penido
        </p>
      </header>

      {/* Story body — reader-friendly typography */}
      <div className="font-body text-lg md:text-xl text-ink leading-[1.85] space-y-6 max-w-2xl">
        {story.body.split('\n\n').map((para, i) => {
          if (para.trim() === '***') {
            return (
              <div key={i} className="text-center py-4">
                <span className="text-burgundy tracking-[0.5em] text-sm">✦ ✦ ✦</span>
              </div>
            );
          }
          return (
            <p key={i} className="whitespace-pre-line">
              {i === 0 && (
                <span className="font-display text-burgundy text-6xl float-left mr-3 leading-[0.85] mt-2">
                  {para.charAt(0)}
                </span>
              )}
              {i === 0 ? para.slice(1) : para}
            </p>
          );
        })}
      </div>

      {/* Footer */}
      <div className="border-t border-stone-200 mt-20 pt-12">
        <p className="overline mb-6">Fim do conto</p>
        <Link
          to={`/contos/${next.slug}`}
          className="group flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          data-testid="story-next-link"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-ash mb-2">Próximo conto</p>
            <p className="font-display text-3xl md:text-4xl text-ink group-hover:text-burgundy transition-colors duration-500">
              {next.title}
            </p>
          </div>
          <ArrowUpRight size={32} className="text-graphite group-hover:text-burgundy group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
        </Link>
      </div>
    </article>
  );
};

export default Story;
