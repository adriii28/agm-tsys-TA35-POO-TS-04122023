"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Libro = void 0;
class Libro {
    constructor(isbn, titulo, autor, numeroPaginas) {
        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
        this.numeroPaginas = numeroPaginas;
    }
    getISBN() {
        return this.isbn;
    }
    getTitulo() {
        return this.titulo;
    }
    getAutor() {
        return this.autor;
    }
    getNumeroPaginas() {
        return this.numeroPaginas;
    }
    setISBN(isbn) {
        this.isbn = isbn;
    }
    setTitulo(titulo) {
        this.titulo = titulo;
    }
    setAutor(autor) {
        this.autor = autor;
    }
    setNumeroPaginas(numeroPaginas) {
        this.numeroPaginas = numeroPaginas;
    }
    toString() {
        return ("El libro con ISBN " +
            this.isbn +
            " creado por " +
            this.autor +
            " tiene " +
            this.numeroPaginas +
            " paginas.");
    }
}
exports.Libro = Libro;
