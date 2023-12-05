"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Espectador = void 0;
class Espectador {
    constructor(nombre, edad, dinero) {
        this.nombre = nombre;
        this.edad = edad;
        this.dinero = dinero;
    }
    getNombre() {
        return this.nombre;
    }
    getEdad() {
        return this.edad;
    }
    getDinero() {
        return this.dinero;
    }
    toString() {
        return `Espectador [nombre=${this.nombre}, edad=${this.edad}, dinero=${this.dinero}]`;
    }
}
exports.Espectador = Espectador;
