import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { BOOKS } from '@/constants/testIds';
import { series, totalBooks } from '@/data/books';

const Books = () => {
  return (
    <div data-testid={BOOKS.page} className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
      {/* Header */}
      <header className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 md:mb-24">
        <div className="lg:col-span-7">
          <p className="overline mb-6">A Obra</p>
          <h1 className="font-display text-5xl md:text-7xl font-light tracking-tighter leading-[1] text-ink">
            Livros &<br />
            <span className="italic text-burgundy">séries</span>
          </h1>
        </div>
        <div className="lg:col-span-5 lg:pt-8">
          <p className="font-body text-lg md:text-xl text-graphite leading-relaxed">
            Quinze livros distribuídos em quatro séries que percorrem os territórios da fé,
            da ficção e das histórias humanas. Cada série tem uma voz própria.
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.25em] text-ash">
            {series.length} séries · {totalBooks} obras
          </p>
        </div>
      </header>

      <div className="border-t border-stone-200 mb-16 md:mb-24" />

      {/* Series list — editorial layout */}
      <div className="space-y-20 md:space-y-32">
        {series.map((s, i) => {
          const isEven = i % 2 === 0;
          return (
            <article
              key={s.slug}
              data-testid={BOOKS.seriesCard(s.slug)}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
            >
              {/* Number column */}
              <div className={`lg:col-span-2 ${isEven ? 'lg:order-1' : 'lg:order-3'}`}>
                <p className="font-display text-7xl md:text-8xl text-burgundy/20 leading-none">
                  {String(i + 1).padStart(2, '0')}
                </p>
              </div>

              {/* Content column */}
              <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-2'}`}>
                <p className="overline mb-4">Série · {s.tagline}</p>
                <h2 className="font-display text-4xl md:text-5xl font-light tracking-tight text-ink leading-tight">
                  {s.title}
                </h2>
                <p className="mt-6 font-body text-lg text-graphite leading-relaxed">
                  {s.description}
                </p>
                <Link
                  to={`/livros/${s.slug}`}
                  data-testid={BOOKS.seriesLink(s.slug)}
                  className="mt-8 inline-flex items-center gap-3 bg-ink text-ivory px-6 py-3 text-xs uppercase tracking-[0.25em] hover:bg-burgundy transition-colors duration-500"
                >
                  Ver os {s.books.length} {s.books.length === 1 ? 'livro' : 'livros'}
                  <ArrowUpRight size={14} />
                </Link>
              </div>

              {/* Mini stack column */}
              <div className={`lg:col-span-4 ${isEven ? 'lg:order-3' : 'lg:order-1'}`}>
                <div className="relative aspect-[4/3] bg-cream border border-stone-200 p-6 flex items-end justify-center overflow-hidden shadow-[inset_0_0_30px_rgba(0,0,0,0.03)]">
                  {/* Stylized "stacked" book covers */}
                  <div className="flex items-end gap-2 w-full justify-center">
                    {s.books.slice(0, Math.min(s.books.length, 5)).map((b, idx) => {
                      const heights = ['h-32', 'h-40', 'h-44', 'h-36', 'h-32'];
                      return (
                        <div
                          key={b.id}
                          className={`flex-1 max-w-[40px] ${heights[idx % heights.length]} bg-ivory border border-stone-300 flex items-center justify-center shadow-sm`}
                        >
                          <span className="font-display text-[0.6rem] italic text-burgundy/70 rotate-180" style={{ writingMode: 'vertical-rl' }}>
                            {b.title}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Books;
