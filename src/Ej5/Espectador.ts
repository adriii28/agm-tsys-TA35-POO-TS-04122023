export class Espectador {
  private nombre: string;
  private edad: number;
  private dinero: number;

  constructor(nombre: string, edad: number, dinero: number) {
    this.nombre = nombre;
    this.edad = edad;
    this.dinero = dinero;
  }

  getNombre(): string {
    return this.nombre;
  }

  getEdad(): number {
    return this.edad;
  }

  getDinero(): number {
    return this.dinero;
  }

  toString(): string {
    return `Espectador [nombre=${this.nombre}, edad=${this.edad}, dinero=${this.dinero}]`;
  }
}
