import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Input()
  id:any
  title = 'assing1';
  constructor(){
    console.log(this.id);

  }
}
