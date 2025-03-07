import {RouterModule, Routes} from '@angular/router';
import { AlunoListComponent } from './alunos/aluno-list/aluno-list.component';
import { CursoListComponent } from './cursos/curso-list/curso-list.component';
import {NgModule} from '@angular/core';

export const routes: Routes = [
  { path: 'alunos', component: AlunoListComponent },
  { path: 'cursos', component: CursoListComponent },
  { path: '', redirectTo: '/cursos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
