export class Libro {
  private isbn: string;
  private titulo: string;
  private autor: string;
  private numeroPaginas: number;

  constructor(
    isbn: string,
    titulo: string,
    autor: string,
    numeroPaginas: number
  ) {
    this.isbn = isbn;
    this.titulo = titulo;
    this.autor = autor;
    this.numeroPaginas = numeroPaginas;
  }

  getISBN(): string {
    return this.isbn;
  }

  getTitulo(): string {
    return this.titulo;
  }

  getAutor(): string {
    return this.autor;
  }

  getNumeroPaginas(): number {
    return this.numeroPaginas;
  }

  setISBN(isbn: string): void {
    this.isbn = isbn;
  }

  setTitulo(titulo: string): void {
    this.titulo = titulo;
  }

  setAutor(autor: string): void {
    this.autor = autor;
  }

  setNumeroPaginas(numeroPaginas: number): void {
    this.numeroPaginas = numeroPaginas;
  }

  toString(): string {
    return (
      "El libro con ISBN " +
      this.isbn +
      " creado por " +
      this.autor +
      " tiene " +
      this.numeroPaginas +
      " paginas."
    );
  }
}
