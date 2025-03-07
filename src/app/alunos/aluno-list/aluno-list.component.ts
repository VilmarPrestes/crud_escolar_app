import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../aluno.service';
import { Aluno } from '../aluno.model';
import {CommonModule} from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {Router} from '@angular/router';

@Component({
  selector: 'app-aluno-list',
  templateUrl: './aluno-list.component.html',
  imports: [CommonModule, MatTableModule],
  standalone: true,
  styleUrls: ['./aluno-list.component.css']
})
export class AlunoListComponent implements OnInit {
  alunos: Aluno[] = [];

  constructor(private alunoService: AlunoService, private router: Router) { }

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

  editAluno(id: number): void {
    this.router.navigate(['/alunos/editar', id]); // Navega para a página de edição
  }
}
