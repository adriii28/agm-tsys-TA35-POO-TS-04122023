export abstract class Persona {
  protected nombre: string;
  protected edad: number;
  protected sexo: string;

  constructor(nombre: string, edad: number, sexo: string) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
  }

  abstract asistencia(): boolean;

  getNombre(): string {
    return this.nombre;
  }

  setNombre(nombre: string): void {
    this.nombre = nombre;
  }

  getEdad(): number {
    return this.edad;
  }

  setEdad(edad: number): void {
    this.edad = edad;
  }

  getSexo(): string {
    return this.sexo;
  }

  setSexo(sexo: string): void {
    this.sexo = sexo;
  }
}
