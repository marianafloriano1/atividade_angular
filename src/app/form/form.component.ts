import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  num1: number = 0;
  num2: number = 0;
  num3: number = 0;
  resultado: number = 0;


  total(){
    if(this.num1 > this.num2 && this.num3){
      this.resultado = this.num1;
    }
    if(this.num2 > this.num1 && this.num3){
      this.resultado = this.num2;
    }
    if(this.num3 > this.num2 && this.num1){
      this.resultado = this.num3
    }
  }

  //  return Math.max(this.num1, this.num2, this.num3);
  

}
