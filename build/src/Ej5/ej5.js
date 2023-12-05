"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cine_1 = require("./Cine");
const Espectador_1 = require("./Espectador");
const Pelicula_1 = require("./Pelicula");
const pelicula = new Pelicula_1.Pelicula("El Gran Film", 120, 12, "Director Genial");
const espectador = new Espectador_1.Espectador("Juan", 25, 50);
const cine = new Cine_1.Cine(pelicula, 10);
console.log('Título: ' + cine.getPelicula().getTitulo() + ', Duración: ' + cine.getPelicula().getDuracion() + ' minutos');
console.log('¿Puede sentarse el espectador?' + cine.sentarEspectador(espectador) ? "Sí" : "No");
console.log(`Precio de entrada: ${cine.getPrecioEntrada()}`);