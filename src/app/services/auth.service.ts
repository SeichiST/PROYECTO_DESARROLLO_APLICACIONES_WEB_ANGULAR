import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, tap } from 'rxjs';
import { Cliente } from '../model/Cliente';
import { UsuarioSesion } from '../model/UsuarioSesion';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  
  private authUrl = 'http://localhost:8085/api/v1/auth';
  private clienteUrl = 'http://localhost:8085/api/v1/cliente';

  private usuarioSubject = new BehaviorSubject<UsuarioSesion | null>(this.getUsuarioStorage());
  public usuario$ = this.usuarioSubject.asObservable();

  login(credenciales: { correo: string; password: string }): Observable<UsuarioSesion> {
    return this.http.post<UsuarioSesion>(`${this.authUrl}/login`, credenciales).pipe(
      tap((usuario) => {
        localStorage.setItem('usuario_gamer', JSON.stringify(usuario));
        this.usuarioSubject.next(usuario);
      })
    );
  }

  registro(cliente: Cliente): Observable<any> {
    return this.http.post<any>(this.clienteUrl, cliente);
  }

  logout() {
    localStorage.removeItem('usuario_gamer');
    this.usuarioSubject.next(null);
  }

  getUsuarioStorage(): UsuarioSesion | null {
    const data = localStorage.getItem('usuario_gamer');
    return data ? JSON.parse(data) : null;
  }
}