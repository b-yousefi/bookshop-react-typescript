class BooksFilter {
  publicationIds: string[];
  categoryIds: string[];
  authorIds: string[];
  doRefresh: boolean;
  constructor(
    publicationIds: string[] = [],
    categoryIds: string[] = [],
    authorIds: string[] = []
  ) {
    this.publicationIds = publicationIds;
    this.categoryIds = categoryIds;
    this.authorIds = authorIds;
    this.doRefresh = true;
  }

  set refresh(value: boolean) {
    this.doRefresh = value;
  }
}

export default BooksFilter;
