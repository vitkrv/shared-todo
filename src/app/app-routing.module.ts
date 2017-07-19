import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateTodoComponent} from './create-todo/create-todo.component';
import {TodoListComponent} from './todo-list/todo-list.component';

const routes: Routes = [
  {
    path: '',
    component: CreateTodoComponent
  },
  {
    path: 'lists/:id',
    component: TodoListComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
