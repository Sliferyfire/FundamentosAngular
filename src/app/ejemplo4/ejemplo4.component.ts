import { Component } from '@angular/core';
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-ejemplo4',
  standalone: true,
  imports: [
    RouterOutlet,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './ejemplo4.component.html',
  styleUrl: './ejemplo4.component.css'
})
export class Ejemplo4Component {
  title = 'ejemplo_4';

  // Propiedades
  listaTareas: string[];
  tarea = new FormControl();


  constructor() {
    this.listaTareas = [];
    let datos = localStorage.getItem('tareas')
    if (datos != null) {
      let arreglo = JSON.parse(datos);
      if (arreglo != null) {
        for (let tarea of arreglo) {
          this.listaTareas.push(tarea);
        }
      }
    }
  }

  // Funcion para agregar tareas
  agregarTarea() {
    this.listaTareas.push(this.tarea.value);
    localStorage.setItem('tareas', JSON.stringify(this.listaTareas));
    this.tarea.setValue('');
  }

  // Funcion para borrar una tarea
  borrarTarea(possicion: number) {
    this.listaTareas.splice(possicion, 1);
    localStorage.clear()
    localStorage.setItem('tareas', JSON.stringify(this.listaTareas))
  }

  // Funcion para borrar todas las tareas
  borrarTareas() {
    localStorage.clear();
    this.listaTareas = [];
  }
}
