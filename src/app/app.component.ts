import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'oneConversion';
  showMsg = false;
  switchValue = 'three';
  users = [
    { userId: 10, name: 'John' },
    { userId: 20, name: 'Flore' },
    { userId: 30, name: 'Marie' },
    { userId: 40, name: 'Tiffany' },
    { userId: 50, name: 'Hillary' },
    { userId: 23, name: 'Ryan' },
  ];
}
