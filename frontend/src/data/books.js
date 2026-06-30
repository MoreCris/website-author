// Data structure for Cristiano Penido's literary work.
// Titles, synopses and Amazon links are placeholders to be replaced by the author.

export const series = [
  {
    slug: 'contos-que-falam-de-deus',
    title: 'Contos que Falam de Deus',
    tagline: 'Sete livros',
    description:
      'Uma coleção de narrativas que explora a presença do divino no cotidiano humano. ' +
      'Histórias breves, contemplativas, que convidam o leitor a reencontrar o sagrado nas pequenas coisas.',
    accent: 'burgundy',
    books: [
      {
        id: 'cfd-1',
        title: 'Volume I',
        synopsis: 'O primeiro volume reúne contos sobre a fé silenciosa que habita os gestos comuns.',
        amazonUrl: '#',
        published: true,
      },
      {
        id: 'cfd-2',
        title: 'Volume II',
        synopsis: 'Personagens em busca de sentido encontram Deus em encontros improváveis.',
        amazonUrl: '#',
        published: true,
      },
      {
        id: 'cfd-3',
        title: 'Volume III',
        synopsis: 'Histórias que atravessam a dúvida e desembocam na luz da reconciliação.',
        amazonUrl: '#',
        published: true,
      },
      {
        id: 'cfd-4',
        title: 'Volume IV',
        synopsis: 'O divino se manifesta no exílio, no exílio interior e no retorno à casa.',
        amazonUrl: '#',
        published: true,
      },
      {
        id: 'cfd-5',
        title: 'Volume V',
        synopsis: 'Contos sobre o silêncio e a escuta — o lugar onde Deus costuma falar.',
        amazonUrl: '#',
        published: true,
      },
      {
        id: 'cfd-6',
        title: 'Volume VI',
        synopsis: 'A graça surge nos lugares mais áridos, transformando ruína em jardim.',
        amazonUrl: '#',
        published: true,
      },
      {
        id: 'cfd-7',
        title: 'Volume VII',
        synopsis: 'Encerramento da série: o reencontro do humano com o seu Criador.',
        amazonUrl: '#',
        published: true,
      },
    ],
  },
  {
    slug: 'historias-reais-de-fe',
    title: 'Histórias Reais de Fé',
    tagline: 'Quatro livros',
    description:
      'Relatos verídicos de homens e mulheres cuja jornada de fé atravessou tempestades reais. ' +
      'Crônicas que documentam a coragem silenciosa de uma vida vivida em comunhão com o invisível.',
    accent: 'burgundy',
    books: [
      {
        id: 'hrf-1',
        title: 'Volume I',
        synopsis: 'Histórias reais que testemunham a fé como força transformadora.',
        amazonUrl: '#',
        published: true,
      },
      {
        id: 'hrf-2',
        title: 'Volume II',
        synopsis: 'Vidas marcadas pela travessia da dor e o reencontro com a esperança.',
        amazonUrl: '#',
        published: true,
      },
      {
        id: 'hrf-3',
        title: 'Volume III',
        synopsis: 'Testemunhos de fé silenciosa em meio ao mundo contemporâneo.',
        amazonUrl: '#',
        published: true,
      },
      {
        id: 'hrf-4',
        title: 'Volume IV',
        synopsis: 'Atualmente em desenvolvimento. Em breve novas histórias verdadeiras.',
        amazonUrl: null,
        published: false,
      },
    ],
  },
  {
    slug: 'ficcao-evangelica',
    title: 'Ficção Evangélica',
    tagline: 'Três livros',
    description:
      'Romances de imaginação ancorada nos valores evangélicos. Tramas que entrelaçam dilemas humanos ' +
      'contemporâneos com a perene busca pelo sentido espiritual.',
    accent: 'burgundy',
    books: [
      {
        id: 'fe-1',
        title: 'Volume I',
        synopsis: 'Um romance que entrelaça destino, perdão e fé numa cidade imaginária.',
        amazonUrl: '#',
        published: true,
      },
      {
        id: 'fe-2',
        title: 'Volume II',
        synopsis: 'Personagens em fuga descobrem-se procurados pela graça.',
        amazonUrl: '#',
        published: true,
      },
      {
        id: 'fe-3',
        title: 'Volume III',
        synopsis: 'Ainda não publicado. Aguarde o lançamento.',
        amazonUrl: null,
        published: false,
      },
    ],
  },
  {
    slug: 'historias-nao-evangelicas',
    title: 'Histórias Não Evangélicas',
    tagline: 'Um livro',
    description:
      'Narrativas livres do registro espiritual, voltadas para temas humanos universais: ' +
      'economia, política, memória e os labirintos do desejo. Um Cristiano Penido em outra chave.',
    accent: 'burgundy',
    books: [
      {
        id: 'hne-1',
        title: 'Volume Único',
        synopsis: 'Contos e crônicas sobre o Brasil, a economia e os caminhos da memória.',
        amazonUrl: '#',
        published: true,
      },
    ],
  },
];

export const getSeriesBySlug = (slug) => series.find((s) => s.slug === slug);

export const totalBooks = series.reduce((acc, s) => acc + s.books.length, 0);
