"use strict";
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
        return 'El libro con ISBN ' + this.isbn + ' creado por' + this.autor + ' tiene ' + this.numeroPaginas + ' páginas.';
    }
}
const libro1 = new Libro('ISBN1', 'Libro1', 'Autor1', 300);
const libro2 = new Libro('ISBN2', 'Libro2', 'Autor2', 250);
console.log(libro1.toString());
console.log(libro2.toString());
if (libro1.getNumeroPaginas() > libro2.getNumeroPaginas()) {
    console.log('Libro1 tiene más páginas que Libro2.');
}
else {
    console.log('Libro2 tiene más páginas que Libro1.');
}
