import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, ShoppingBag } from 'lucide-react';
import { BookCover } from '@/components/BookCover';
import { SERIES } from '@/constants/testIds';
import { getSeriesBySlug, series } from '@/data/books';

const Series = () => {
  const { slug } = useParams();
  const data = getSeriesBySlug(slug);

  if (!data) return <Navigate to="/livros" replace />;

  const currentIndex = series.findIndex((s) => s.slug === slug);
  const nextSeries = series[(currentIndex + 1) % series.length];

  return (
    <div data-testid={SERIES.page(slug)} className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
      {/* Breadcrumb */}
      <Link
        to="/livros"
        className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-ash hover:text-burgundy transition-colors duration-500 mb-12"
        data-testid="series-back-link"
      >
        <ArrowLeft size={14} /> Todas as séries
      </Link>

      {/* Header */}
      <header className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 md:mb-20">
        <div className="lg:col-span-8">
          <p className="overline mb-6">
            Série · {data.tagline}
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-light tracking-tighter leading-[1] text-ink">
            {data.title}
          </h1>
        </div>
        <div className="lg:col-span-4 lg:pt-6">
          <p className="font-body text-lg text-graphite leading-relaxed">
            {data.description}
          </p>
        </div>
      </header>

      <div className="border-t border-stone-200 mb-16" />

      {/* Books grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
        {data.books.map((book) => (
          <div key={book.id} className="flex flex-col">
            <BookCover book={book} seriesTitle={data.title} />

            <div className="mt-5">
              <h3 className="font-display text-2xl text-ink leading-tight">
                {book.title}
              </h3>
              <p className="mt-2 font-body text-sm text-graphite leading-relaxed">
                {book.synopsis}
              </p>

              {book.published && book.amazonUrl ? (
                <a
                  href={book.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={SERIES.amazonLink(book.id)}
                  className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-ink hover:text-burgundy transition-colors duration-500 border-b border-stone-300 hover:border-burgundy pb-1"
                >
                  <ShoppingBag size={14} />
                  Comprar na Amazon
                  <ArrowUpRight size={12} />
                </a>
              ) : (
                <span className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-ash">
                  Em desenvolvimento
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Next series */}
      <div className="border-t border-stone-200 mt-24 pt-12">
        <Link
          to={`/livros/${nextSeries.slug}`}
          className="group flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          data-testid="series-next-link"
        >
          <div>
            <p className="overline mb-2">Próxima série</p>
            <p className="font-display text-3xl md:text-4xl text-ink group-hover:text-burgundy transition-colors duration-500">
              {nextSeries.title}
            </p>
          </div>
          <ArrowUpRight size={32} className="text-graphite group-hover:text-burgundy group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
        </Link>
      </div>
    </div>
  );
};

export default Series;
