import {Component} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Router} from '@angular/router';

import {TodoListModel} from '../models/todo-list.model';
import {TodoItemModel} from '../models/todo-item.model';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent {
  constructor(public afDatabase: AngularFireDatabase, public router: Router) {
  }

  createTodo() {
    // Generate token on the Firebase
    const newList = new TodoListModel('Your ToDo list', [new TodoItemModel('Hi, I am your first ToDo.')]);
    this.afDatabase.app.database()
      .ref('lists/' + newList.createdAt)
      .set(newList);

    // Navigate to created listItems$
    this.router.navigate(['/lists', newList.createdAt]);
  }
}
