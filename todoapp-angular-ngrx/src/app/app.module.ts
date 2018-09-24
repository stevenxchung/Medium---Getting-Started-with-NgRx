import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';

import { TodoEffects } from './store/todo/todo.effects';
import { EffectsModule } from '@ngrx/effects';
import * as TodoReducer from './store/todo/todo.reducer';

@NgModule({
  declarations: [AppComponent, TodoListComponent, TodoListItemComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
    StoreModule.forRoot({ todos: TodoReducer.TodoReducer }),
    EffectsModule.forRoot([TodoEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
