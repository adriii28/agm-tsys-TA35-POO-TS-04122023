"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Raices = void 0;
class Raices {
    constructor(a, b, c) {
        this.a = 0;
        this.b = 0;
        this.c = 0;
        this.a = a;
        this.b = b;
        this.c = c;
    }
    getDiscriminante() {
        return Math.pow(this.b, 2) - 4 * this.a * this.c;
    }
    tieneRaices() {
        return this.getDiscriminante() >= 0;
    }
    tieneRaiz() {
        return this.getDiscriminante() === 0;
    }
    calcular() {
        if (this.tieneRaices()) {
            this.obtenerRaices();
        }
        else if (this.tieneRaiz()) {
            this.obtenerRaiz();
        }
        else {
            console.log("No tiene solución");
        }
    }
    obtenerRaices() {
        const raiz1 = (-this.b + Math.sqrt(this.getDiscriminante())) / (2 * this.a);
        const raiz2 = (-this.b - Math.sqrt(this.getDiscriminante())) / (2 * this.a);
        console.log(`Raíz 1: ${raiz1}, Raíz 2: ${raiz2}`);
    }
    obtenerRaiz() {
        const raiz = -this.b / (2 * this.a);
        console.log(`Raíz única: ${raiz}`);
    }
}
exports.Raices = Raices;
