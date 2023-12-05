"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profesor = void 0;
const Persona_1 = require("./Persona");
class Profesor extends Persona_1.Persona {
    constructor(nombre, edad, sexo, materia) {
        super(nombre, edad, sexo);
        this.materia = "";
        this.materia = materia;
    }
    getMateria() {
        return this.materia;
    }
    setMateria(materia) {
        this.materia = materia;
    }
    asistencia() {
        // Simulación de asistencia para profesor
        const random = Math.floor(Math.random() * 5) + 1;
        return random !== 1;
    }
}
exports.Profesor = Profesor;
