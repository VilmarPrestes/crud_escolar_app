import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunoListComponent } from './aluno-list/aluno-list.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: AlunoListComponent },
      { path: 'novo', component: AlunoFormComponent },
      { path: 'editar/:id', component: AlunoFormComponent }
    ]),
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    ReactiveFormsModule
  ]
})
export class AlunosModule { }
