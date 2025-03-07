import { Component, OnInit } from '@angular/core';
import { CursoService } from '../curso.service';
import { Curso } from '../curso.model';
import {CommonModule} from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {Router} from '@angular/router';

@Component({
  selector: 'app-curso-list',
  templateUrl: './curso-list.component.html',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  styleUrls: ['./curso-list.component.css']
})
export class CursoListComponent implements OnInit {
  cursos: Curso[] = [];

  constructor(private cursoService: CursoService, private router: Router) { }

  ngOnInit(): void {
    this.loadCursos();
  }

  loadCursos(): void {
    this.cursoService.getAll().subscribe(
      cursos => this.cursos = cursos,
      error => console.error('Erro ao carregar cursos', error)
    );
  }

  deleteCurso(id: number): void {
    this.cursoService.delete(id).subscribe(
      () => this.loadCursos(),
      error => console.error('Erro ao deletar curso', error)
    );
  }

  editCurso(id: number): void {
    this.router.navigate(['/cursos/editar', id]); // Navega para a página de edição
  }
}
