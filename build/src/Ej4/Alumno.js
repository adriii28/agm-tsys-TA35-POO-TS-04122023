"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alumno = void 0;
const Persona_1 = require("./Persona");
class Alumno extends Persona_1.Persona {
    constructor(nombre, edad, sexo, nota) {
        super(nombre, edad, sexo);
        this.nota = 0;
        this.nota = nota;
    }
    asistencia() {
        // Simulación de asistencia
        const random = Math.floor(Math.random() * 2) + 1;
        return random === 1;
    }
    getNota() {
        return this.nota;
    }
    setNota(nota) {
        this.nota = nota;
    }
}
exports.Alumno = Alumno;
