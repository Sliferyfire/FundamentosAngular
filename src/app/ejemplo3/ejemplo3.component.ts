import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-ejemplo3',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule
  ],
  templateUrl: './ejemplo3.component.html',
  styleUrl: './ejemplo3.component.css'
})
export class Ejemplo3Component {
  title = 'ejemplo_3';

  // Propiedades
  producto = {
    id: 0,
    descripcion: '',
    precio: 0
  }

  productos = [
    {id: 1, descripcion: 'gansito', precio: 16,},
    {id: 2, descripcion: 'cocaCola', precio: 28,},
    {id: 3, descripcion: 'sabritas', precio: 18,},
    {id: 4, descripcion: 'pepsi', precio: 25,},
    {id: 5, descripcion: 'tortillas', precio: 18,}
  ]

  // Funcion para agregar un producto al carrito
  agregarProducto() {
    // Validar que el id no sea cero
    if (this.producto.id == 0) {
      alert('El ID debe ser diferente a 0');
      return;
    }
    // Verificar que el id no sea repetido
    for (let i = 0; i < this.productos.length; i++) {
      if (this.producto.id == this.productos[i].id) {
        alert('Ya existe un producto con ese ID');
        return;
      }
    }
    // Agregamos el producto al arreglo
    this.productos.push({
      id: this.producto.id,
      descripcion: this.producto.descripcion,
      precio: this.producto.precio,
    })
    // Reiniciamos el objeto producto a sus valores iniciales
    this.producto.id = 0;
    this.producto.descripcion = '';
    this.producto.precio = 0;
  }

  // Funcion para seleccionar un producto existente
  seleccionarProducto(productoSeleccioado: {id: number; descripcion: string;  precio: number}) {
    this.producto.id = productoSeleccioado.id;
    this.producto.descripcion = productoSeleccioado.descripcion;
    this.producto.precio = productoSeleccioado.precio;
  }

  // Funcion para modificar el producto
  modificarProducto(){
    for (let i = 0; i < this.productos.length; i++) {
      if (this.producto.id == this.productos[i].id){
        this.productos[i].descripcion = this.producto.descripcion;
        this.productos[i].precio = this.producto.precio;
        // Restablecer el objeto producto
        this.producto.id = 0;
        this.producto.descripcion = '';
        this.producto.precio = 0;
        return;
      }
    }
    alert('No existe ese ID')
  }

  // Funcion para eliminar un producto
  eliminarProducto(id: number){
    for (let i = 0; i < this.productos.length; i++) {
      if (id == this.productos[i].id) {
        this.productos.splice(i, 1)
      }
    }
  }
}
