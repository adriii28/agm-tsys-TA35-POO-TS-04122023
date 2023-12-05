import { Persona } from "./Persona";

export class Alumno extends Persona {
  private nota: number = 0;

  constructor(nombre: string, edad: number, sexo: string, nota: number) {
    super(nombre, edad, sexo);
    this.nota = nota;
  }

  asistencia(): boolean {
    // Simulación de asistencia
    const random: number = Math.floor(Math.random() * 2) + 1;
    return random === 1;
  }

  getNota(): number {
    return this.nota;
  }

  setNota(nota: number): void {
    this.nota = nota;
  }
}
