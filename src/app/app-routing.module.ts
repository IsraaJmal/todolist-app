import { TodoDetailsComponent } from './components/todo-details/todo-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { AboutUsComponent } from './components/about-us/about-us.component';

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';

const routes: Routes = [
  // {path:'home',component:HomeComponent},
  // {path:'about',component:AboutUsComponent},
  // {path:'about-details',component:HomeComponent},
  // {path:'contact',component:ContactUsComponent},
  {path:'todo',component:TodoListComponent},
  {path:'create-task',component:CreateTaskComponent},
  // {path:'todo/details/:id/:title',component:HomeComponent},
  {path:'todo/details/:id',component:TodoDetailsComponent},
  {path:'',component:TodoListComponent},
  {path:'**',component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
