import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database-deprecated';
import {AngularFireAuth} from 'angularfire2/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent implements OnInit {
  constructor(public afAuth: AngularFireAuth, public afDatabase: AngularFireDatabase, public router: Router) {
    this.afAuth.auth.signInAnonymously();
  }

  ngOnInit() {
  }

  createTodo() {
    // Generate token on the Firebase
    const timestamp = +new Date();
    this.afDatabase.app.database()
      .ref('lists/' + timestamp)
      .set([
        {
          text: 'Hi, I am your first ToDo.'
        }
      ]);

    // Navigate to created list
    this.router.navigate(['/lists', timestamp]);
  }
}
