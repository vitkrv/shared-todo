import {Component} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Shared Todo';

  constructor(public afAuth: AngularFireAuth) {
    this.afAuth.auth.signInAnonymously();
  }
}
