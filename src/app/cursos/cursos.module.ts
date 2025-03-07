import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoListComponent } from './curso-list/curso-list.component';
import { CursoFormComponent } from './curso-form/curso-form.component';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: CursoListComponent },
      { path: 'novo', component: CursoFormComponent },
      { path: 'editar/:id', component: CursoFormComponent }
    ]),
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    ReactiveFormsModule
  ]
})
export class CursosModule { }
