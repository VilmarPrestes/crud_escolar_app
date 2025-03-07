import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlunoService } from '../aluno.service';
import { Aluno } from '../aluno.model';
import { Router, ActivatedRoute } from '@angular/router';
import { CursoService } from '../../cursos/curso.service';
import { Curso } from '../../cursos/curso.model';

@Component({
  selector: 'app-aluno-form',
  standalone: true,
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit {
  form: FormGroup;
  alunoId: number | null = null;
  cursos: Curso[] = [];

  constructor(
    private fb: FormBuilder,
    private alunoService: AlunoService,
    private cursoService: CursoService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      cpf: ['', Validators.required],
      situacao: ['', Validators.required],
      cursoId: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadCursos();
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.alunoId = +params['id'];
        this.alunoService.getById(this.alunoId).subscribe(aluno => {
          this.form.patchValue(aluno);
        });
      }
    });
  }

  loadCursos(): void {
    this.cursoService.getAll().subscribe(
      cursos => this.cursos = cursos,
      error => console.error('Erro ao carregar cursos', error)
    );
  }

  onSubmit(): void {
    const aluno: Aluno = this.form.value;
    if (this.alunoId) {
      this.alunoService.update(this.alunoId, aluno).subscribe(() => {
        this.router.navigate(['/alunos']);
      });
    } else {
      this.alunoService.create(aluno).subscribe(() => {
        this.router.navigate(['/alunos']);
      });
    }
  }
}
