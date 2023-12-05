"use strict";
// Ejemplo de uso
const profeAula = new Profesor("Dr. Smith", 40, "M", "Matemáticas");
const alumno1 = new Alumno("Juan", 18, "M", 90);
const alumno2 = new Alumno("Ana", 20, "F", 80);
const alumnosAula = [alumno1, alumno2];
const aula = new Aula(1, 30, "Matemáticas", alumnosAula, profeAula);
console.log(`Materia del Aula: ${aula.getMateria()}`);
console.log(`¿Se puede dar clase? ${aula.sePuedeDarClasse() ? "Sí" : "No"}`);
aula.mostrarAlumnosAprobados();
