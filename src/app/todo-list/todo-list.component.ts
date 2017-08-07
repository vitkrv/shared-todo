import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import {TodoItemModel} from '../models/todo-item.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  listId: string;
  list: FirebaseListObservable<any[]>;
  newItemText: string;

  constructor(public route: ActivatedRoute,
              public afAuth: AngularFireAuth,
              public afDatabase: AngularFireDatabase,
              public router: Router) {
    this.afAuth.auth.signInAnonymously();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.listId = params['id'];
        this.getData();
      }
    );
  }

  addItem(text) {
    this.list.push(new TodoItemModel(text))
      .then(() => this.newItemText = '');
  }

  removeItem(item) {
    this.list.remove(item);
  }

  updateItem(item) {
    this.list.update(item.$key, item);
  }

  getData() {
    this.list = this.afDatabase.list('lists/' + this.listId);

    this.list.$ref.once('value', (snapshot) => {
      if (!snapshot.exists()) {
        this.router.navigate(['']);
      }
    });

    this.list.subscribe((item) => {
      console.log(item);
    });
  }

  focusElement($event) {
    const target = $event.target;
    if (!target || target.nodeName !== 'LI') {
      return;
    }
    target.querySelector('input.form-control').focus();
  }
}
