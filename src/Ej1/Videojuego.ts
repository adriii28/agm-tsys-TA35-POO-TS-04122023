export class Videojuego implements Entregable {
  private titulo: string;
  private horasEstimadas: number;
  private entregado: boolean = false;
  private genero: string;
  private compania: string;

  constructor(
    titulo: string,
    horasEstimadas: number = 10,
    genero: string = "",
    compania: string = ""
  ) {
    this.titulo = titulo;
    this.horasEstimadas = horasEstimadas;
    this.genero = genero;
    this.compania = compania;
  }

  entregar(): void {
    this.entregado = true;
  }
  devolver(): void {
    this.entregado = false;
  }
  isEntregado(): boolean {
    return this.entregado;
  }
  compareTo(a: Object): number {
    if (a instanceof Videojuego) {
      return this.horasEstimadas - a.horasEstimadas;
    }
    return 0;
  }

  getTitulo(): string {
    return this.titulo;
  }

  getHorasEstimadas(): number {
    return this.horasEstimadas;
  }

  getGenero(): string {
    return this.genero;
  }

  getCompania(): string {
    return this.compania;
  }

  setTitulo(titulo: string): void {
    this.titulo = titulo;
  }

  setHorasEstimadas(horasEstimadas: number): void {
    this.horasEstimadas = horasEstimadas;
  }

  setGenero(genero: string): void {
    this.genero = genero;
  }

  setCompania(compania: string): void {
    this.compania = compania;
  }

  toString(): string {
    return `Videojuego: Título: ${this.titulo}, Horas Estimadas: ${this.horasEstimadas}, Entregado: ${this.entregado}, Género: ${this.genero}, Compañía: ${this.compania}`;
  }
}
