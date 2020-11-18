import { FilterItem } from "./FilterItem";

class BooksFilter {
  publications: FilterItem[];
  categories: FilterItem[];
  authors: FilterItem[];
  doRefresh: boolean;
  constructor(
    publications: FilterItem[] = [],
    categories: FilterItem[] = [],
    authors: FilterItem[] = []
  ) {
    this.publications = publications;
    this.categories = categories;
    this.authors = authors;
    this.doRefresh = true;
  }
}

export default BooksFilter;
