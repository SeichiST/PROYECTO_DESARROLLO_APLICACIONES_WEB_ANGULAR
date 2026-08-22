import {ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UsuarioSesion } from '../../model/UsuarioSesion';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit {
  private router = inject(Router);
  private authService = inject(AuthService);
  private cdr = inject(ChangeDetectorRef);

  usuarioLogueado: UsuarioSesion | null = null;
  isDropdownOpen: boolean = false;
  ngOnInit() {
    this.authService.usuario$.subscribe((user) => {
      this.usuarioLogueado = user;
      this.cdr.detectChanges();
    });
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  closeDropdown() {
    this.isDropdownOpen = false;
  }
  
  goInicio() {
    this.closeDropdown();
    this.router.navigate(['/producto/inicio']);
  }

  goJuegos() {
    this.closeDropdown();
    this.router.navigate(['/producto/juegos']);
  }

  goNosotros() {
    this.closeDropdown();
    this.router.navigate(['/producto/nosotros']);
  }

  goContacto() {
    this.closeDropdown();
    this.router.navigate(['/producto/contactanos']);
  }

  goCarrito() {
    this.closeDropdown();
    this.router.navigate(['/carrito/ver']);
  }

  goRegistro() {
    this.closeDropdown();
    this.router.navigate(['/producto/registro']);
  }

  goHistorial() {
    this.closeDropdown();
    this.router.navigate(['/cliente/historial']);
  }

  goAdmin() {
    this.closeDropdown();
    this.router.navigate(['/admin/lista-juegos']);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/producto/inicio']);
    this.cdr.detectChanges();
  }
}