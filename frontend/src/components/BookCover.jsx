// Renders real cover image if present, otherwise an elegant CSS placeholder.
import { SERIES } from '@/constants/testIds';

export const BookCover = ({ book, seriesTitle }) => {
  if (book.cover) {
    return (
      <div
        data-testid={SERIES.bookCard(book.id)}
        className="group relative aspect-[2/3] bg-cream border border-stone-200 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:border-burgundy/30"
      >
        <img
          src={book.cover}
          alt={`Capa: ${book.title}`}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
    );
  }

  return (
    <div
      data-testid={SERIES.bookCard(book.id)}
      className="group relative aspect-[2/3] bg-cream border border-stone-200 shadow-[inset_0_0_30px_rgba(0,0,0,0.04)] flex flex-col items-center justify-between p-6 text-center transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:border-burgundy/30"
    >
      <div className="w-full pt-2">
        <div className="h-px w-12 mx-auto bg-burgundy/60" />
        <p className="mt-4 overline text-[0.65rem]">{seriesTitle}</p>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-1">
        <p className="font-display italic text-stone-500 text-xs tracking-widest uppercase mb-2">
          Cristiano Penido
        </p>
        <h3 className="font-display text-burgundy text-xl md:text-2xl leading-tight font-medium tracking-tight">
          {book.title}
        </h3>
        {!book.published && (
          <p
            data-testid={SERIES.comingSoon(book.id)}
            className="mt-3 text-[0.65rem] tracking-[0.25em] uppercase text-ash"
          >
            Em breve
          </p>
        )}
      </div>

      <div className="w-full pb-2">
        <div className="h-px w-12 mx-auto bg-burgundy/60" />
      </div>
    </div>
  );
};

export default BookCover;
