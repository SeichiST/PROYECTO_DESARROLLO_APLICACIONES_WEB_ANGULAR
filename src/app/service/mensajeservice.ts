import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Mensaje } from "../model/Mensaje";

@Injectable({
    providedIn: 'root'
})
export class MensajeService{
    
    private url = 'http://localhost:8085/api/v1/mensaje'

    constructor(private httpClient: HttpClient){}

    getMensajes(): Observable<Mensaje[]>{
        return this.httpClient.get<Mensaje[]>(this.url)
    }
}