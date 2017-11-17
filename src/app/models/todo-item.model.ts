export class TodoItemModel {
  key: string;

  constructor(public text = '', public isChecked = false) {
  }
}
