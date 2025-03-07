import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CursoService } from '../curso.service';
import { Curso } from '../curso.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  standalone: true,
  styleUrls: ['./curso-form.component.css']
})
export class CursoFormComponent implements OnInit {
  form: FormGroup;
  cursoId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private cursoService: CursoService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      inicioAulas: ['', Validators.required],
      fimAulas: ['', Validators.required],
      ativo: [true]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.cursoId = +params['id'];
        this.cursoService.getById(this.cursoId).subscribe(curso => {
          this.form.patchValue(curso);
        });
      }
    });
  }

  onSubmit(): void {
    const curso: Curso = this.form.value;
    if (this.cursoId) {
      this.cursoService.update(this.cursoId, curso).subscribe(() => {
        this.router.navigate(['/cursos']);
      });
    } else {
      this.cursoService.create(curso).subscribe(() => {
        this.router.navigate(['/cursos']);
      });
    }
  }
}
