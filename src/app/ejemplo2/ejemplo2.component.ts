import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {DadoComponent} from "../dado/dado.component";

@Component({
  selector: 'app-ejemplo2',
  standalone: true,
  imports: [
    RouterOutlet,
    DadoComponent
  ],
  templateUrl: './ejemplo2.component.html',
  styleUrl: './ejemplo2.component.css'
})
export class Ejemplo2Component {
  title = 'Simulador de dados';

  //Propiedades
  resultado: string = "";
  valor1 : number = this.generarNumero()
  valor2 : number = this.generarNumero()
  valor3 : number = this.generarNumero()

  //Funcion para generar un numero aleatorio
  generarNumero() {
    return Math.floor(Math.random() * 6) + 1;
  }

  //Funcion para hacer la tirada y verificar el resultado
  tirarDados() {
    this.valor1 = this.generarNumero()
    this.valor2 = this.generarNumero()
    this.valor3 = this.generarNumero()

    //Comparar si los valores son iguales
    if (this.valor1 == this.valor2 && this.valor1 == this.valor3) {
      this.resultado = "Felicidades, has ganado!!!";
    } else {
      this.resultado = "Lo siento, has perdido.";
    }
  }
}
