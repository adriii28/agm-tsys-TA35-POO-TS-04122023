"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pelicula = void 0;
class Pelicula {
    constructor(titulo, duracion, edadMinima, director) {
        this.titulo = titulo;
        this.duracion = duracion;
        this.edadMinima = edadMinima;
        this.director = director;
    }
    getTitulo() {
        return this.titulo;
    }
    getDuracion() {
        return this.duracion;
    }
    getEdadMinima() {
        return this.edadMinima;
    }
    getDirector() {
        return this.director;
    }
}
exports.Pelicula = Pelicula;
