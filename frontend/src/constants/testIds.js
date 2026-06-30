export const NAV = {
  brand: 'nav-brand',
  home: 'nav-home-link',
  books: 'nav-books-link',
  shortStories: 'nav-shortstories-link',
  contact: 'nav-contact-link',
  mobileToggle: 'nav-mobile-toggle',
};

export const HOME = {
  hero: 'home-hero',
  heroName: 'home-hero-name',
  heroSubtitle: 'home-hero-subtitle',
  bioSection: 'home-bio-section',
  ctaBooks: 'home-cta-books',
  ctaContact: 'home-cta-contact',
  emergentLink: 'home-emergent-link',
};

export const BOOKS = {
  page: 'books-page',
  seriesCard: (slug) => `series-card-${slug}`,
  seriesLink: (slug) => `series-link-${slug}`,
};

export const SERIES = {
  page: (slug) => `series-page-${slug}`,
  bookCard: (id) => `book-card-${id}`,
  amazonLink: (id) => `book-amazon-${id}`,
  comingSoon: (id) => `book-coming-soon-${id}`,
};

export const CONTACT = {
  page: 'contact-page',
  emailDisplay: 'contact-email-display',
  copyButton: 'contact-copy-button',
  mailtoLink: 'contact-mailto-link',
};
