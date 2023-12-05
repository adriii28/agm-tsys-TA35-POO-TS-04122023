"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Serie_1 = require("./Ej1/Serie");
const Videojuego_1 = require("./Ej1/Videojuego");
const Libro_1 = require("./Ej2/Libro");
const Raices_1 = require("./Ej3/Raices");
const Alumno_1 = require("./Ej4/Alumno");
const Aula_1 = require("./Ej4/Aula");
const Profesor_1 = require("./Ej4/Profesor");
const Cine_1 = require("./Ej5/Cine");
const Espectador_1 = require("./Ej5/Espectador");
const Pelicula_1 = require("./Ej5/Pelicula");
//Ej1
console.log('-- EJERCICIO 1 --');
const series = [];
const videojuegos = [];
series[0] = new Serie_1.Serie('Serie1', 5, true, 'Drama', 'Creador1');
series[1] = new Serie_1.Serie('Serie2', 8, false, 'Comedia', 'Creador2');
series[2] = new Serie_1.Serie('Serie3', 4, true, 'Aventura', 'Creador3');
series[3] = new Serie_1.Serie('Serie4', 6, false, 'Fantasia', 'Creador4');
series[4] = new Serie_1.Serie('Serie5', 7, true, 'Ciencia Ficcion', 'Creador5');
videojuegos[0] = new Videojuego_1.Videojuego('Juego1', 15, 'Accion', 'Compañia1');
videojuegos[1] = new Videojuego_1.Videojuego('Juego2', 10, 'Aventura', 'Compañia2');
videojuegos[2] = new Videojuego_1.Videojuego('Juego3', 20, 'Estrategia', 'Compañia3');
videojuegos[3] = new Videojuego_1.Videojuego('Juego4', 12, 'Simulacion', 'Compañia4');
videojuegos[4] = new Videojuego_1.Videojuego('Juego5', 18, 'Deportes', 'Compañia5');
series[1].entregar();
series[3].entregar();
videojuegos[0].entregar();
videojuegos[2].entregar();
videojuegos[4].entregar();
const seriesEntregadas = series.filter((serie) => serie.isEntregado());
const videojuegosEntregados = videojuegos.filter((videojuego) => videojuego.isEntregado());
console.log('Series entregadas:', seriesEntregadas.length);
console.log('Videojuegos entregados:', videojuegosEntregados.length);
seriesEntregadas.forEach((serie) => serie.devolver());
videojuegosEntregados.forEach((videojuego) => videojuego.devolver());
const videojuegoMasHoras = videojuegos.reduce((max, videojuego) => videojuego.getHorasEstimadas() > max.getHorasEstimadas() ? videojuego : max, videojuegos[0]);
const serieMasTemporadas = series.reduce((max, serie) => serie.getNumeroTemporadas() > max.getNumeroTemporadas() ? serie : max, series[0]);
console.log('Videojuego con mas horas estimadas:');
console.log(videojuegoMasHoras.toString());
console.log('Serie con mas temporadas:');
console.log(serieMasTemporadas.toString());
//Ej2
console.log('-- EJERCICIO 2 --');
const libro1 = new Libro_1.Libro('ISBN1', 'Libro1', 'Autor1', 300);
const libro2 = new Libro_1.Libro('ISBN2', 'Libro2', 'Autor2', 250);
console.log(libro1.toString());
console.log(libro2.toString());
if (libro1.getNumeroPaginas() > libro2.getNumeroPaginas()) {
    console.log('Libro 1 tiene mas páginas que Libro 2.');
}
else {
    console.log('Libro 2 tiene mas páginas que Libro 1.');
}
//Ej3
console.log('-- EJERCICIO 3 --');
const ecuacion = new Raices_1.Raices(1, -3, 2);
ecuacion.calcular();
//Ej4
console.log('-- EJERCICIO 4 --');
const profeAula = new Profesor_1.Profesor('Dr. Smith', 40, 'M', 'Matematicas');
const alumno1 = new Alumno_1.Alumno('Juan', 18, 'M', 90);
const alumno2 = new Alumno_1.Alumno('Ana', 20, 'F', 80);
const alumnosAula = [alumno1, alumno2];
const aula = new Aula_1.Aula(1, 30, 'Matematicas', alumnosAula, profeAula);
console.log('Materia aula: ' + aula.getMateria());
console.log('Se puede dar clase? ' + (aula.sePuedeDarClasse() ? 'Si' : 'No'));
aula.mostrarAlumnosAprobados();
//Ej5
console.log('-- EJERCICIO 5 --');
const pelicula = new Pelicula_1.Pelicula('Interestellar', 120, 12, 'Christopher Nolan');
const espectador = new Espectador_1.Espectador('Paco', 25, 50);
const cine = new Cine_1.Cine(pelicula, 10);
console.log('Titulo: ' +
    cine.getPelicula().getTitulo() +
    ', duración: ' +
    cine.getPelicula().getDuracion() +
    ' minutos');
console.log('Hay sitio?' + (cine.sentarEspectador(espectador) ? 'Si' : 'No'));
console.log('Precio entrada:' + cine.getPrecioEntrada());
