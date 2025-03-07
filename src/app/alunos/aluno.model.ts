import { Curso } from '../cursos/curso.model';

export interface Aluno {
  id: number;
  nome: string;
  dataNascimento: Date;
  cpf: string;
  situacao: string;
  curso: Curso;
}
