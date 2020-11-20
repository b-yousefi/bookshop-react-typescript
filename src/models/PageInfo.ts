export class PageInfo {
  size: number;
  totalElements: number;
  totalPages: number;
  pageNumber: number;
  constructor(
    size: number,
    totalElements: number,
    totalPages: number,
    pageNumber: number
  ) {
    this.size = size;
    this.totalElements = totalElements;
    this.totalPages = totalPages;
    this.pageNumber = pageNumber;
  }
}
