# Cristiano Penido — Author Website · PRD

## Original problem statement
Create a professional, elegant, easy-to-navigate author website showcasing Cristiano Penido's literary career, books, short stories and contact information.

- Brazilian writer and novelist, working since 2008.
- Master's in Economics (UnB).
- 5 short stories selected by Portuguese publishers Chiado Books and Flamingo Edições.
- 15 books across 4 series: Contos que Falam de Deus (7), Histórias Reais de Fé (4 — 1 in development), Ficção Evangélica (3 — 1 not yet published), Histórias Não Evangélicas (1).
- Contact: display email Cristianopenido@hotmail.com (no contact form per user request).
- Style: professional, elegant, modern but timeless. White background, dark text, subtle gold/burgundy accents. Mobile responsive.

## User personas
1. **Literary reader** — wants to discover the author's body of work and access books on Amazon.
2. **Faith-driven reader** — explores the spiritual series (Contos que Falam de Deus, Histórias Reais de Fé, Ficção Evangélica).
3. **Editor / journalist** — needs author bio and a way to contact him.
4. **Casual visitor** — arrives via search, wants quick understanding of who the author is.

## Tech stack
- Frontend: React 19, React Router 7, Tailwind CSS 3, lucide-react, Cormorant Garamond + Newsreader (Google Fonts).
- Backend: FastAPI + MongoDB scaffold (currently unused for content; ready for Phase 2 integrations).
- Design: editorial / bookish, ivory (#FDFBF7) + cream (#F4F1EA) + burgundy (#800020).

## Phase 1 — Delivered (Feb 2026)
- [x] Elegant homepage with hero (large typographic name, biography, author photo placeholder, CTAs)
- [x] Sticky responsive navigation (Início, Livros, Contos, Contato) with mobile menu
- [x] Books overview page listing all 4 series with stylized "book stack" visuals
- [x] Individual series pages (4 routes) with the 15 books — CSS-only book cover placeholders, synopsis, Amazon link (placeholder `#`), "Em breve" marker for unpublished books
- [x] Contact page with email displayed + copy-to-clipboard button + mailto link
- [x] Contos page (preview / Phase 2 teaser) showing publisher info
- [x] Footer with full navigation, email, copyright
- [x] SEO metadata in index.html (title, description, OG tags, keywords) — all in Portuguese
- [x] Fully responsive (mobile/tablet/desktop)
- [x] data-testid on all interactive elements

## Phase 2 — Backlog (P0 → P2)

### P0 — Content replacement (waiting on user)
- Replace author photo placeholder with the real portrait
- Replace 14 book cover placeholders with real cover images
- Replace placeholder book titles ("Volume I", "Volume II"...) with real titles
- Replace placeholder synopses with real ones
- Add real Amazon purchase URLs for each published book

### P1 — Short Stories page (Contos Aclamados pela Crítica)
- Full implementation of /contos with:
  - 5 stories with title + publisher (Chiado Books / Flamingo Edições)
  - Link to the published anthology/book
  - Free online reading view of each story (dedicated route /contos/:slug)
- Requires: actual story texts from the author

### P2 — Enhancements
- Newsletter signup (capture email of fans, mailing list growth)
- Featured / latest release highlight on homepage (Hero "now available")
- Press / media kit page (downloadable bio, headshot, book covers high-res)
- Schema.org structured data for Author + Book (boosts search visibility for author/book searches)
- Optional re-enable contact form (with Resend integration) if user changes mind
- Multi-language (PT/EN) if international reach is desired

## Notes
- User explicitly declined contact form — only email display with copy button.
- All book series and book counts confirmed by user.
- File tree:
  - `/app/frontend/src/pages/` — Home, Books, Series, Contos, Contact
  - `/app/frontend/src/components/` — Navigation, Footer, BookCover
  - `/app/frontend/src/data/books.js` — series + books data (single source of truth)
  - `/app/frontend/src/constants/testIds.js` — all data-testid keys
