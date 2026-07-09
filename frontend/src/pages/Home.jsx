import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { HOME } from '@/constants/testIds';
import { series, totalBooks, AUTHOR_PHOTO, AUTHOR_QUOTE } from '@/data/books';

const Home = () => {
  return (
    <div className="paper-grain">
      {/* HERO */}
      <section data-testid={HOME.hero} className="max-w-7xl mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-20 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7 fade-in">
            <p className="overline mb-6">Escritor & Romancista — Desde 2008</p>
            <h1
              data-testid={HOME.heroName}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter leading-[0.95] text-ink"
            >
              Cristiano
              <br />
              <span className="italic text-burgundy">Penido</span>
            </h1>
            <p
              data-testid={HOME.heroSubtitle}
              className="mt-8 font-body text-lg md:text-xl text-graphite leading-relaxed max-w-xl"
            >
              Literatura brasileira que atravessa fé, ficção e memória — quinze livros
              distribuídos em quatro séries, e contos selecionados por editoras de Portugal.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/livros"
                data-testid={HOME.ctaBooks}
                className="group inline-flex items-center gap-3 bg-ink text-ivory px-7 py-4 text-xs uppercase tracking-[0.25em] hover:bg-burgundy transition-colors duration-500"
              >
                Conhecer a obra
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500" />
              </Link>
              <Link
                to="/contato"
                data-testid={HOME.ctaContact}
                className="inline-flex items-center gap-2 px-7 py-4 text-xs uppercase tracking-[0.25em] text-graphite hover:text-burgundy transition-colors duration-500 border-b border-stone-300 hover:border-burgundy"
              >
                Entrar em contato
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 fade-in-delayed">
            <div className="relative aspect-[3/4] bg-cream border border-stone-300 overflow-hidden shadow-[0_30px_60px_-20px_rgba(0,0,0,0.15)]">
              <img
                src={AUTHOR_PHOTO}
                alt="Cristiano Penido"
                className="absolute inset-0 w-full h-full object-cover"
                data-testid="home-author-photo"
              />
            </div>
            <p className="mt-3 text-xs uppercase tracking-[0.25em] text-ash text-right">
              Brasília, Brasil
            </p>
          </div>
        </div>
      </section>

      <div className="border-t border-stone-200" />

      {/* CRITIC QUOTE */}
      <section className="bg-cream border-y border-stone-200">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-20 md:py-24 text-center">
          <p className="overline mb-6">Sobre o autor</p>
          <p className="font-display italic text-2xl md:text-3xl lg:text-4xl text-ink leading-snug">
            “{AUTHOR_QUOTE}”
          </p>
        </div>
      </section>

      {/* BIOGRAPHY */}
      <section
        data-testid={HOME.bioSection}
        className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">
          <div className="lg:col-span-4">
            <p className="overline mb-6">Biografia</p>
            <h2 className="font-display text-4xl md:text-5xl font-light tracking-tight leading-tight text-ink">
              Uma travessia
              <br />
              <span className="italic">literária</span>
            </h2>
          </div>

          <div className="lg:col-span-7 lg:col-start-6 space-y-6 font-body text-lg md:text-xl leading-relaxed text-graphite">
            <p>
              <span className="font-display text-burgundy text-4xl float-left mr-3 leading-none mt-1">C</span>
              ristiano Penido é um escritor e romancista brasileiro. Desde 2008, dedica-se à
              criação de obras que exploram temas diversos — da economia à ficção, do romance
              histórico a narrativas marcadas pela espiritualidade e pela busca de sentido na
              existência humana.
            </p>
            <p>
              Mestre em Economia pela Universidade de Brasília, é autor de diversos livros.
              Cinco de seus contos foram selecionados para integrar antologias literárias
              publicadas pelas editoras portuguesas <span className="italic">Chiado Books</span>{' '}
              e <span className="italic">Flamingo Edições</span>.
            </p>
            <p>
              Este site apresenta sua jornada literária, livros, contos, projetos e
              lançamentos mais recentes.
            </p>
          </div>
        </div>
      </section>

      <div className="border-t border-stone-200" />

      {/* SERIES PREVIEW */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="overline mb-4">Quatro séries · {totalBooks} livros</p>
            <h2 className="font-display text-4xl md:text-5xl font-light tracking-tight leading-tight text-ink">
              A obra, em <span className="italic text-burgundy">quatro vozes</span>
            </h2>
          </div>
          <Link
            to="/livros"
            className="text-xs uppercase tracking-[0.25em] text-graphite hover:text-burgundy transition-colors duration-500 border-b border-stone-300 hover:border-burgundy pb-1 self-start md:self-auto"
            data-testid="home-view-all-series"
          >
            Ver todas as séries →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {series.map((s, i) => (
            <Link
              key={s.slug}
              to={`/livros/${s.slug}`}
              data-testid={`home-series-preview-${s.slug}`}
              className="group block p-8 md:p-10 bg-cream border border-stone-200 hover:border-burgundy/40 transition-all duration-500 hover:-translate-y-0.5"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-burgundy mb-4">
                Série {String(i + 1).padStart(2, '0')} · {s.tagline}
              </p>
              <h3 className="font-display text-3xl md:text-4xl font-light tracking-tight text-ink leading-tight">
                {s.title}
              </h3>
              <p className="mt-4 font-body text-base text-graphite leading-relaxed line-clamp-3">
                {s.description}
              </p>
              <p className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-ink group-hover:text-burgundy transition-colors duration-500">
                Explorar série
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500" />
              </p>
            </Link>
          ))}
        </div>
      </section>

      <div className="border-t border-stone-200" />

      <section className="max-w-4xl mx-auto px-6 md:px-12 py-20 md:py-28 text-center">
        <p className="overline mb-6">Contos aclamados pela crítica</p>
        <p className="font-display italic text-3xl md:text-4xl text-ink leading-snug">
          “Cinco contos selecionados por editoras portuguesas —{' '}
          <span className="text-burgundy">Chiado Books</span> e{' '}
          <span className="text-burgundy">Flamingo Edições</span> — em antologias literárias,
          agora disponíveis para leitura gratuita.”
        </p>
        <Link
          to="/contos"
          className="mt-10 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-graphite hover:text-burgundy transition-colors duration-500 border-b border-stone-300 hover:border-burgundy pb-1"
          data-testid="home-cta-stories"
        >
          Ler os contos
          <ArrowUpRight size={14} />
        </Link>
      </section>
    </div>
  );
};

export default Home;
