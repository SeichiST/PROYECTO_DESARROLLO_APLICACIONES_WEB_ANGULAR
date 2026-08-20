import { Injectable } from '@angular/core';
import { Juego } from '../model/Juego';

export interface ItemCarrito {
  juego: Juego;
  cantidad: number;
  subtotal: number;
}

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private items: ItemCarrito[] = [];

  constructor() {
    this.cargarCarrito();
  }

  agregarItem(juego: Juego, cantidad: number) {
    const itemExistente = this.items.find(i => i.juego.idjuegos === juego.idjuegos);
    
    if (itemExistente) {
      itemExistente.cantidad += cantidad;
      itemExistente.subtotal = itemExistente.juego.precio * itemExistente.cantidad;
    } else {
      this.items.push({
        juego,
        cantidad,
        subtotal: juego.precio * cantidad
      });
    }
    this.guardarCarrito();
  }

  obtenerCarrito() {
    return this.items;
  }

  eliminarItem(idJuego: number) {
    this.items = this.items.filter(item => item.juego.idjuegos !== idJuego);
    this.guardarCarrito();
  }

  limpiarCarrito() {
    this.items = [];
    this.guardarCarrito();
  }
  
  private guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(this.items));
  }

  private cargarCarrito() {
    const data = localStorage.getItem('carrito');
    if (data) {
      this.items = JSON.parse(data);
    }
  }
}