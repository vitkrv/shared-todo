import {Component} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Router} from '@angular/router';
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
    const timestamp = +new Date();
    this.afDatabase.app.database()
      .ref('lists/' + timestamp)
      .set([new TodoItemModel('Hi, I am your first ToDo.')]);

    // Navigate to created list
    this.router.navigate(['/lists', timestamp]);
  }
}
