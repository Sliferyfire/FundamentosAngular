import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo1',
  standalone: true,
  imports: [],
  templateUrl: './ejemplo1.component.html',
  styleUrl: './ejemplo1.component.css'
})
export class Ejemplo1Component {
  title = 'Fundamentos angular';

  //propiedades
  nombre = 'Aaron David';
  aniosServicio = 22;
  email = 'davidop.ti22@gmail.com';
  activo = true;
  alumnos = [24, 23, 26];
  contador = 0;
  valorBtn = true
  numero = 0


  productos = [
    {
      id: 1,
      descripcion: 'Coca Cola',
      precio: 25
    },
    {
      id: 2,
      descripcion: 'Sabritas',
      precio: 18
    },
    {
      id: 3,
      descripcion: 'Gansito',
      precio: 15.50
    }
  ]

  //Funciion que muestar un mensaje dependiendo del valor de la propiedad activa
  estaActivo(){
    if (this.activo)
    {
      return 'Empleado Activo'
    }  else {
      return 'Empleado Inactivo'
    }
  }

  //Metodo que suma los valores del arreglo de alumnos
  sumarAlumnos(){
    let suma = 0;
    for (let i = 0; i < this.alumnos.length; i++){
      suma += this.alumnos[i];
    }
    return suma;
  }

  //Metodo que genera un numero aleatorio entre 1 y 3
  generarNumero(){
    this.numero = Math.floor(Math.random() * 3) + 1;
    return this.numero;
  }

  //Metodo para incrementar el contador
  incrementarContador(){
    this.contador++;
  }

  //Metodo para decrementar el contador
  decrementarContador(){
    this.contador--;
  }

  //Metodo para cambiar el valor del boton
  cambiarValor(){
    this.valorBtn = !this.valorBtn;
  }

}
