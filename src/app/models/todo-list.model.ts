export class TodoListModel {
  createdAt: number;

  constructor(public name = '...', public items = []) {
    this.createdAt = +new Date();
  }
}
