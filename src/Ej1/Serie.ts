export class Serie implements Entregable {
  private titulo: string;
  private numeroTemporadas: number;
  private entregado: boolean;
  private genero: string;
  private creador: string;

  constructor(
    titulo: string,
    numeroTemporadas: number = 3,
    entregado: boolean = false,
    genero: string = "",
    creador: string = ""
  ) {
    this.titulo = titulo;
    this.numeroTemporadas = numeroTemporadas;
    this.entregado = entregado;
    this.genero = genero;
    this.creador = creador;
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
    if (a instanceof Serie) {
      return this.numeroTemporadas - a.numeroTemporadas;
    }
    return 0;
  }
  getTitulo(): string {
    return this.titulo;
  }

  getNumeroTemporadas(): number {
    return this.numeroTemporadas;
  }

  getGenero(): string {
    return this.genero;
  }

  getCreador(): string {
    return this.creador;
  }

  setTitulo(titulo: string): void {
    this.titulo = titulo;
  }

  setNumeroTemporadas(numeroTemporadas: number): void {
    this.numeroTemporadas = numeroTemporadas;
  }

  setGenero(genero: string): void {
    this.genero = genero;
  }

  setCreador(creador: string): void {
    this.creador = creador;
  }
  toString(): string {
    return `Serie: Título: ${this.titulo}, Temporadas: ${this.numeroTemporadas}, Entregado: ${this.entregado}, Género: ${this.genero}, Creador: ${this.creador}`;
  }
}
