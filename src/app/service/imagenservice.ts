import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {
    constructor(private httpClient: HttpClient) { }

  subirImagenJuego(file: File): Observable<{ nombreArchivo: string }> {
    const formData = new FormData();
    formData.append('file', file);
    return this.httpClient.post<{ nombreArchivo: string }>(
      "http://localhost:8085/api/v1/imagenes/juegos",
      formData
    );
}
}
