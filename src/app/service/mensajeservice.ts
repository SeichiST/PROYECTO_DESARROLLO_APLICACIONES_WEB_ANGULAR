import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Mensaje } from "../model/Mensaje";

@Injectable({
    providedIn: 'root'
})
export class MensajeService{

    private http = inject(HttpClient);
    private url = 'http://localhost:8085/api/v1/mensaje'

    constructor(private httpClient: HttpClient){}

    getMensajes(): Observable<Mensaje[]> {
    return this.http.get<Mensaje[]>(this.url);
    }

    enviarMensaje(mensaje: any): Observable<any> {
        return this.http.post<any>(this.url, mensaje);
    }
}