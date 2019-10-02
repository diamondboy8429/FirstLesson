import { Component } from '@angular/core';

@Component({
  templateUrl: './word.component.html',
  selector: 'app-mycomponent',
  styles:[`
    h2{
        color: red; 
    }
    h3{
        color: blue;
    }
    p{
        color: purple;
    }
  `]
})
export class AppMyComponent{
  en: String = 'Hello';
  vn: String = 'Xin chao';
}
