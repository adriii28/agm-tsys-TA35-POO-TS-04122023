import { Alumno } from "./Alumno";
import { Profesor } from "./Profesor";

export class Aula {
  private id: number;
  private maxAlumnos: number;
  private materia: string;
  private alumnos: Alumno[];
  private profe: Profesor;

  constructor(
    id: number,
    maxAlumnos: number,
    materia: string,
    alumnos: Alumno[],
    profe: Profesor
  ) {
    this.id = id;
    this.maxAlumnos = maxAlumnos;
    this.materia = materia;
    this.alumnos = alumnos;
    this.profe = profe;
  }

  mostrarAlumnosAprobados(): void {
    let contadorFamales: number = 0;
    let contadorMales: number = 0;

    for (let i = 0; i < this.alumnos.length; i++) {
      if (this.alumnos[i].getSexo() === "F" && this.alumnos[i].getNota() >= 5) {
        contadorFamales++;
      } else if (
        this.alumnos[i].getSexo() === "M" &&
        this.alumnos[i].getNota() >= 5
      ) {
        contadorMales++;
      }
    }

    console.log(`Alumnos aprobados: ${contadorMales}`);
    console.log(`Alumnas aprobadas: ${contadorFamales}`);
  }

  sePuedeDarClasse(): boolean {
    return (
      this.profe.asistencia() &&
      this.profe.getMateria() === this.materia &&
      this.isMitadAlumnosAsistidos()
    );
  }

  isMitadAlumnosAsistidos(): boolean {
    let contador: number = 0;
    for (let i = 0; i < this.alumnos.length; i++) {
      if (this.alumnos[i].asistencia()) {
        contador++;
      }
    }
    return contador > this.alumnos.length / 2;
  }

  getMaxAlumnos(): number {
    return this.maxAlumnos;
  }

  setMaxAlumnos(maxAlumnos: number): void {
    this.maxAlumnos = maxAlumnos;
  }

  getMateria(): string {
    return this.materia;
  }

  setMateria(materia: string): void {
    this.materia = materia;
  }

  getProfe(): Profesor {
    return this.profe;
  }

  setProfe(profe: Profesor): void {
    this.profe = profe;
  }
}
