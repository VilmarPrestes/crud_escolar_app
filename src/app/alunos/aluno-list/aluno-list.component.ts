import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../aluno.service';
import { Aluno } from '../aluno.model';

@Component({
  selector: 'app-aluno-list',
  templateUrl: './aluno-list.component.html',
  standalone: true,
  styleUrls: ['./aluno-list.component.css']
})
export class AlunoListComponent implements OnInit {
  alunos: Aluno[] = [];

  constructor(private alunoService: AlunoService) { }

  ngOnInit(): void {
    this.loadAlunos();
  }

  loadAlunos(): void {
    this.alunoService.getAll().subscribe(
      alunos => this.alunos = alunos,
      error => console.error('Erro ao carregar alunos', error)
    );
  }

  deleteAluno(id: number): void {
    this.alunoService.delete(id).subscribe(
      () => this.loadAlunos(),
      error => console.error('Erro ao deletar aluno', error)
    );
  }
}
