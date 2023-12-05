"use strict";
class Serie {
    constructor(titulo, numeroTemporadas = 3, entregado = false, genero = "", creador = "") {
        this.titulo = titulo;
        this.numeroTemporadas = numeroTemporadas;
        this.entregado = entregado;
        this.genero = genero;
        this.creador = creador;
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
        if (a instanceof Serie) {
            return this.numeroTemporadas - a.numeroTemporadas;
        }
        return 0;
    }
    getTitulo() {
        return this.titulo;
    }
    getNumeroTemporadas() {
        return this.numeroTemporadas;
    }
    getGenero() {
        return this.genero;
    }
    getCreador() {
        return this.creador;
    }
    setTitulo(titulo) {
        this.titulo = titulo;
    }
    setNumeroTemporadas(numeroTemporadas) {
        this.numeroTemporadas = numeroTemporadas;
    }
    setGenero(genero) {
        this.genero = genero;
    }
    setCreador(creador) {
        this.creador = creador;
    }
    toString() {
        return `Serie: Título: ${this.titulo}, Temporadas: ${this.numeroTemporadas}, Entregado: ${this.entregado}, Género: ${this.genero}, Creador: ${this.creador}`;
    }
}
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
const series = [];
const videojuegos = [];
series[0] = new Serie("Serie1", 5, true, "Drama", "Creador1");
series[1] = new Serie("Serie2", 8, false, "Comedia", "Creador2");
series[2] = new Serie("Serie3", 4, true, "Aventura", "Creador3");
series[3] = new Serie("Serie4", 6, false, "Fantasía", "Creador4");
series[4] = new Serie("Serie5", 7, true, "Ciencia Ficción", "Creador5");
videojuegos[0] = new Videojuego("Juego1", 15, "Acción", "Compañía1");
videojuegos[1] = new Videojuego("Juego2", 10, "Aventura", "Compañía2");
videojuegos[2] = new Videojuego("Juego3", 20, "Estrategia", "Compañía3");
videojuegos[3] = new Videojuego("Juego4", 12, "Simulación", "Compañía4");
videojuegos[4] = new Videojuego("Juego5", 18, "Deportes", "Compañía5");
series[1].entregar();
series[3].entregar();
videojuegos[0].entregar();
videojuegos[2].entregar();
videojuegos[4].entregar();
const seriesEntregadas = series.filter((serie) => serie.isEntregado());
const videojuegosEntregados = videojuegos.filter((videojuego) => videojuego.isEntregado());
console.log("Series entregadas:", seriesEntregadas.length);
console.log("Videojuegos entregados:", videojuegosEntregados.length);
seriesEntregadas.forEach((serie) => serie.devolver());
videojuegosEntregados.forEach((videojuego) => videojuego.devolver());
const videojuegoMasHoras = videojuegos.reduce((max, videojuego) => videojuego.getHorasEstimadas() > max.getHorasEstimadas() ? videojuego : max, videojuegos[0]);
const serieMasTemporadas = series.reduce((max, serie) => serie.getNumeroTemporadas() > max.getNumeroTemporadas() ? serie : max, series[0]);
console.log("Videojuego con más horas estimadas:");
console.log(videojuegoMasHoras.toString());
console.log("Serie con más temporadas:");
console.log(serieMasTemporadas.toString());
