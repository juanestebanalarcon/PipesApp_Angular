import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {
  
  enMayusculas:boolean=true;
  ordenarPor:string="";
  heroes:Heroe[]=[
    {
      nombre:"SuperMan",
      vuela:true,
      color:Color.amarillo,
      poder:200
    },
    {
      nombre:"BatMan",
      vuela:true,
      color:Color.azul,
      poder:400
    },
    {
      nombre:"Batichica",
      vuela:false,
      color:Color.verde,
      poder:700
    },
    {
      nombre:"Robbin",
      vuela:false,
      color:Color.rojo,
      poder:1000
    }

  ]
  cambiarEstado(){
        this.enMayusculas=!this.enMayusculas;
    }
    cambiarOrden(valor:string){
      this.ordenarPor=valor;
    }
}
