export class PageResponseDTO<T extends object> {
  content: T[];
  pageable: {
    pageNumber: number;
    pageSize: number;
  };
  totalPages: number;
  totalElements: number;
  last: boolean;
  first: boolean;

  constructor(data: PageResponseDTO<T>) {
    this.content = data.content;
    this.pageable = {
      pageNumber: data.pageable.pageNumber,
      pageSize: data.pageable.pageSize,
    };
    this.totalPages = data.totalPages;
    this.totalElements = data.totalElements;
    this.last = data.last;
    this.first = data.first;
  }
}
