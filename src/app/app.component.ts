import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length=0;
  password='';
  includeLetters=false;
  includeNumbers=false;
  includeSymbols=false;


  onChangeLength(value:string){
const parsedValue=parseInt(value);
  }
  
onButtonClick(){
this.password='my password'}

onChangeUseLetters(){
this.includeLetters=!this.includeLetters;
}
onChangeUseNumbers(){
this.includeNumbers=!this.includeNumbers;
}
onChangeUseSymbols(){
this.includeSymbols=!this.includeSymbols;
}
}
