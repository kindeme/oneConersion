import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'oneConversion';
  showMsg = false;
  switchValue = "three";
  users =[
    {id: 1, name:'john'},
    {id: 2, name:'Flore'}
  ];
    
  

}
