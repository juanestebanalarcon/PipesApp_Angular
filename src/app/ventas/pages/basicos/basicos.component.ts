import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {
  nombreLower: string ="juanes";
  nombreUpper:string = "JUANES";
  nombreCompleto:string ="jUan eStEbAn AlArCoN";
  fecha: Date=new Date();
  constructor() { }


}
