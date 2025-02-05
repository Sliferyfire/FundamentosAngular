import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-dado',
  standalone: true,
  imports: [],
  templateUrl: './dado.component.html',
  styleUrl: './dado.component.css'
})
export class DadoComponent {
  //Propiedades
  //valorDado: number = Math.floor(Math.random() * 6) + 1;
  @Input() valorDado: string = ""
}
