"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cine = void 0;
class Cine {
    constructor(pelicula, precioEntrada) {
        this.asientos = new Array(8)
            .fill(null)
            .map(() => new Array(8).fill(null));
        this.pelicula = pelicula;
        this.precioEntrada = precioEntrada;
    }
    getPelicula() {
        return this.pelicula;
    }
    getPrecioEntrada() {
        return this.precioEntrada;
    }
    sentarEspectador(e) {
        const fila = Math.floor(Math.random() * 8);
        const columna = Math.floor(Math.random() * 8);
        const posicionesLibres = [];
        if (this.puedeSentarse(e)) {
            for (let i = 0; i < this.asientos.length; i++) {
                for (let j = 0; j < this.asientos[i].length; j++) {
                    if (this.asientos[i][j] === null) {
                        posicionesLibres.push(`${i} ${j}`);
                    }
                }
            }
            if (posicionesLibres.length === 0) {
                return false;
            }
            else {
                const posicion = Math.floor(Math.random() * posicionesLibres.length);
                const [posicionMatriz1, posicionMatriz2] = posicionesLibres[posicion].split(" ");
                const matriz1 = parseInt(posicionMatriz1);
                const matriz2 = parseInt(posicionMatriz2);
                this.asientos[matriz1][matriz2] = e;
                return true;
            }
        }
        else {
            return false;
        }
    }
    puedeSentarse(e) {
        return (e.getDinero() >= this.precioEntrada &&
            e.getEdad() >= this.pelicula.getEdadMinima());
    }
}
exports.Cine = Cine;
