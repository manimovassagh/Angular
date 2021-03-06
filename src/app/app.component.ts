import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password=''
  includeLetters=false
  title = 'angular';

  onButtonClick(){
    console.log(this.includeLetters)
this.password='my password'  }

onChangeUseLetters(){
this.includeLetters=!this.includeLetters;
}
}
