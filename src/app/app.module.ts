import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { HttpClientModule } from '@angular/common/http';

import { AboutUsComponent } from './components/about-us/about-us.component';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { TodoDetailsComponent } from './components/todo-details/todo-details.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { RatingComponent } from './shared/rating/rating.component';
import { MenuComponent } from './shared/menu/menu.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgModule} from '@angular/core';


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
  
    AboutUsComponent,
  
    NotFoundComponent,
    TodoDetailsComponent,
    CreateTaskComponent,
    RatingComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
