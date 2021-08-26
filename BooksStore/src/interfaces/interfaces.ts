interface ISearchBook {
  title: string;
  subtitle: string;
  isbn13: string;
  price: string;
  image: string;
  url: string;
}

interface IRes {
  error: string;
  total: string;
  page?: string;
  books: ISearchBook[];
  searchValue: string;
}

interface ICard {
  _id: string;
  title: string;
  author: string;
  year: string;
  price: number;
  cover?: string;
  neu?: boolean;
  used?: boolean;
  sell?: boolean;
  cross?: boolean;
  image: string;
}

interface ICardInfo {
  error: string;
  title: string;
  subtitle: string;
  authors: string;
  publisher: string;
  isbn10: string;
  isbn13: string;
  pages: string;
  year: string;
  rating: string;
  desc: string;
  price: string;
  image: string;
  url: string;
  pdf: {
    [key: string]: string;
  };
}

export { ICard, IRes, ISearchBook, ICardInfo };
