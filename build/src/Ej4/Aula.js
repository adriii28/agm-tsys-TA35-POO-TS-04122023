"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aula = void 0;
class Aula {
    constructor(id, maxAlumnos, materia, alumnos, profe) {
        this.id = id;
        this.maxAlumnos = maxAlumnos;
        this.materia = materia;
        this.alumnos = alumnos;
        this.profe = profe;
    }
    mostrarAlumnosAprobados() {
        let contadorFamales = 0;
        let contadorMales = 0;
        for (let i = 0; i < this.alumnos.length; i++) {
            if (this.alumnos[i].getSexo() === "F" && this.alumnos[i].getNota() >= 5) {
                contadorFamales++;
            }
            else if (this.alumnos[i].getSexo() === "M" &&
                this.alumnos[i].getNota() >= 5) {
                contadorMales++;
            }
        }
        console.log(`Alumnos aprobados: ${contadorMales}`);
        console.log(`Alumnas aprobadas: ${contadorFamales}`);
    }
    sePuedeDarClasse() {
        return (this.profe.asistencia() &&
            this.profe.getMateria() === this.materia &&
            this.isMitadAlumnosAsistidos());
    }
    isMitadAlumnosAsistidos() {
        let contador = 0;
        for (let i = 0; i < this.alumnos.length; i++) {
            if (this.alumnos[i].asistencia()) {
                contador++;
            }
        }
        return contador > this.alumnos.length / 2;
    }
    getMaxAlumnos() {
        return this.maxAlumnos;
    }
    setMaxAlumnos(maxAlumnos) {
        this.maxAlumnos = maxAlumnos;
    }
    getMateria() {
        return this.materia;
    }
    setMateria(materia) {
        this.materia = materia;
    }
    getProfe() {
        return this.profe;
    }
    setProfe(profe) {
        this.profe = profe;
    }
}
exports.Aula = Aula;
