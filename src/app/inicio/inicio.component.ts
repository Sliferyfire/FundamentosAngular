import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    RouterOutlet,
    ReactiveFormsModule,
    RouterLink,
    NgClass
  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  title = "Evaluacion primer parcial To Do List"

  fechaHoy: string;

  //Propiedades
  toDoList: any;
  toDoForm = new FormGroup(
    {
      nombreTarea: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      descripcionTarea: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      fechaTarea: new FormControl('', [
        Validators.required,
      ]),
      completado: new FormControl(false),
    }
  )

  toDoObject: any;
  enviado = false;

  constructor() {
    const hoy = new Date();
    this.fechaHoy = hoy.toISOString().split("T")[0];
    this.toDoList = [];
    let datos = localStorage.getItem('toDoList')
    console.log(datos)
    if (datos != null) {
      let arreglo = JSON.parse(datos);
      if (arreglo != null) {
        for (let tarea of arreglo) {
          this.toDoList.push(tarea);
        }
      }
    }
  }

  // Funcion para agregar tareas
  agregarTarea() {
    this.enviado = true;
    if (this.toDoForm.valid) {
      if (this.toDoForm.value.completado == null)
        this.toDoForm.value.completado = false;
      this.toDoObject = {
        nombreTarea: this.toDoForm.value.nombreTarea,
        descripcionTarea: this.toDoForm.value.descripcionTarea,
        fechaTarea: this.toDoForm.value.fechaTarea,
        completado: this.toDoForm.value.completado
      }
      this.toDoList.push(this.toDoObject);
      localStorage.setItem('toDoList', JSON.stringify(this.toDoList));
      this.toDoForm.reset()
      this.enviado = false;
    }
  }

  // Funcion para borrar una tarea
  borrarTarea(possicion: number) {
    this.toDoList.splice(possicion, 1);
    localStorage.clear()
    localStorage.setItem('toDoList', JSON.stringify(this.toDoList))
  }

  // Funcion para borrar todas las tareas
  borrarTareas() {
    localStorage.clear();
    this.toDoList = [];
  }

  // Funcion para marcar como completada una tarea
  toggleCompletado(index: number) {
    this.toDoList[index].completado = !this.toDoList[index].completado;
    localStorage.setItem('toDoList', JSON.stringify(this.toDoList));
  }

}
