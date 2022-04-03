import { Component} from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {
  //i18nSelect
  nombre:string='Juan Esteban';
  genero:string='Masculino';
  invitacionMapa={
    'Masculino':'invitarlo',
    'Femenino':'invitarla'
  }
  //i18nPlural
  clientes:string[]=['María','Juan','Diego','Cristian'];
  clientesMapa={
    '=0':'no tenemos ningún cliente esperando.',
    '=1':'tenemos un cliente esperando.',
    '=2':'tenemos dos clientes esperando.',
    '=3':'tenemos tres clientes esperando.',
    'other':'tenemos # clientes esperando'
  }
  cambiarCliente():void{
    this.nombre='Claudia';
    this.genero='Femenino';
  }
  eliminarCliente():void{this.clientes.pop();}
  //KeyValue Pipe
  persona={
    nombre:"Juan Esteban",
    edad:21,
    direccion:'Cl 53 # 31 - 71'
  }
  //JSON Pipe
  heroes=[
    {
      nombre:"SuperMan",
      vuela:true,
      poder:100
    },
    {
      nombre:"BatMan",
      vuela:true,
      poder:200
    },
    {
      nombre:"Hulk",
      vuela:false,
      poder:400
    },
    {
      nombre:"AquaMan",
      vuela:false,
      poder:900
    }
  ]
  //Async pipe
  miObservable=interval(5000);
  valorPromesa = new Promise( (resolve,reject) =>{
    setTimeout(() =>{
      resolve('Fin de la promesa');
    },350);
  });
}
