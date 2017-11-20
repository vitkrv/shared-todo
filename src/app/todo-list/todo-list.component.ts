import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';

import {TodoItemModel} from '../models/todo-item.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  listId: string;
  list: Observable<TodoItemModel[]>;
  listRef: AngularFireList<any>;
  newItemText = '';

  constructor(public route: ActivatedRoute,
              public afDatabase: AngularFireDatabase,
              public router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.listId = params['id'];
        this.getData();
      }
    );
  }

  isEmptyText(value) {
    return !value || !value.trim().length;
  }

  addItem(text) {
    if (this.isEmptyText(text)) {
      return;
    }
    this.listRef.push(new TodoItemModel(text))
      .then(() => this.newItemText = '');
  }

  checkItem(item) {
    this.updateItem(item.key, {isChecked: !item.isChecked});
  }

  updateItem(key, item) {
    this.listRef.update(key, item);
  }

  removeItem(key) {
    this.listRef.remove(key);
  }

  getData() {
    this.listRef = this.afDatabase.list<TodoItemModel[]>('lists/' + this.listId + '/items');
    this.list = this.listRef
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({key: c.payload.key, ...c.payload.val()}));
      });

    this.listRef.query.once('value', (snapshot) => {
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
