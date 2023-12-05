"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Videojuego = void 0;
class Videojuego {
    constructor(titulo, horasEstimadas = 10, genero = "", compania = "") {
        this.entregado = false;
        this.titulo = titulo;
        this.horasEstimadas = horasEstimadas;
        this.genero = genero;
        this.compania = compania;
    }
    entregar() {
        this.entregado = true;
    }
    devolver() {
        this.entregado = false;
    }
    isEntregado() {
        return this.entregado;
    }
    compareTo(a) {
        if (a instanceof Videojuego) {
            return this.horasEstimadas - a.horasEstimadas;
        }
        return 0;
    }
    getTitulo() {
        return this.titulo;
    }
    getHorasEstimadas() {
        return this.horasEstimadas;
    }
    getGenero() {
        return this.genero;
    }
    getCompania() {
        return this.compania;
    }
    setTitulo(titulo) {
        this.titulo = titulo;
    }
    setHorasEstimadas(horasEstimadas) {
        this.horasEstimadas = horasEstimadas;
    }
    setGenero(genero) {
        this.genero = genero;
    }
    setCompania(compania) {
        this.compania = compania;
    }
    toString() {
        return `Videojuego: Título: ${this.titulo}, Horas Estimadas: ${this.horasEstimadas}, Entregado: ${this.entregado}, Género: ${this.genero}, Compañía: ${this.compania}`;
    }
}
exports.Videojuego = Videojuego;
