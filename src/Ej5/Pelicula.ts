export class Pelicula {
  private titulo: string;
  private duracion: number;
  private edadMinima: number;
  private director: string;

  constructor(
    titulo: string,
    duracion: number,
    edadMinima: number,
    director: string
  ) {
    this.titulo = titulo;
    this.duracion = duracion;
    this.edadMinima = edadMinima;
    this.director = director;
  }

  getTitulo(): string {
    return this.titulo;
  }

  getDuracion(): number {
    return this.duracion;
  }

  getEdadMinima(): number {
    return this.edadMinima;
  }

  getDirector(): string {
    return this.director;
  }
}
