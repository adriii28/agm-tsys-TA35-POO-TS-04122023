import { Espectador } from "./Espectador";
import { Pelicula } from "./Pelicula";

export class Cine {
  private pelicula: Pelicula;
  private precioEntrada: number;
  private asientos: Espectador[][] = new Array(8)
    .fill(null)
    .map(() => new Array(8).fill(null));

  constructor(pelicula: Pelicula, precioEntrada: number) {
    this.pelicula = pelicula;
    this.precioEntrada = precioEntrada;
  }

  getPelicula(): Pelicula {
    return this.pelicula;
  }

  getPrecioEntrada(): number {
    return this.precioEntrada;
  }

  sentarEspectador(e: Espectador): boolean {
    const fila = Math.floor(Math.random() * 8);
    const columna = Math.floor(Math.random() * 8);
    const posicionesLibres: string[] = [];

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
      } else {
        const posicion = Math.floor(Math.random() * posicionesLibres.length);
        const [posicionMatriz1, posicionMatriz2] =
          posicionesLibres[posicion].split(" ");
        const matriz1 = parseInt(posicionMatriz1);
        const matriz2 = parseInt(posicionMatriz2);

        this.asientos[matriz1][matriz2] = e;
        return true;
      }
    } else {
      return false;
    }
  }

  puedeSentarse(e: Espectador): boolean {
    return (
      e.getDinero() >= this.precioEntrada &&
      e.getEdad() >= this.pelicula.getEdadMinima()
    );
  }
}
