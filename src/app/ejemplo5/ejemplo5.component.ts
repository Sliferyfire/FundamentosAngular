import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-ejemplo5',
  standalone: true,
  imports: [
    RouterOutlet,
    ReactiveFormsModule
  ],
  templateUrl: './ejemplo5.component.html',
  styleUrl: './ejemplo5.component.css'
})
export class Ejemplo5Component {
  title = 'ejemplo_5';

  // Propiedades
  nombreCliente = '';
  emailCliente = '';
  mensajeCliente = '';
  statusCliente = '';
  municipioCliente = '';
  autorizacionCliente = false;

  enviado = false;

  // Formulario
  formContacto = new FormGroup({
    nombre: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    mensaje: new FormControl('', [
      Validators.required,
      Validators.maxLength(100),
    ]),
    status: new FormControl('', [Validators.required,]),
    municipio: new FormControl('', [Validators.required]),
    autorizacion: new FormControl(false)
  });

  // Funcion que se ejecuta cuandose envia el formulario
  onSubmit() {
    this.enviado = true;
    if(this.formContacto.valid){
      this.nombreCliente = this.formContacto.value.nombre!;
      this.emailCliente = this.formContacto.value.email!;
      this.mensajeCliente = this.formContacto.value.mensaje!;
      this.statusCliente = this.formContacto.value.status!;
      this.municipioCliente = this.formContacto.value.municipio!;
      this.autorizacionCliente = this.formContacto.value.autorizacion!;
      this.enviado = false;
    }
  }
}
