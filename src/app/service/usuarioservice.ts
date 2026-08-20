import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Cliente } from "../model/Cliente";

@Injectable({
    providedIn: 'root'
})
export class UsuarioService{

    constructor(private httpClient : HttpClient){}

    getCliente(): Observable<Cliente[]>{
        return this.httpClient.get<Cliente[]>("http://localhost:8085/api/v1/cliente");
    }

    registrarCliente(cliente : Cliente): Observable<any>{
        return this.httpClient.post<any>("http://localhost:8085/api/v1/cliente", cliente)
    }
    
    getClienteById(id: number):Observable<Cliente>{
        return this.httpClient.get<Cliente>("http://localhost:8085/api/v1/cliente/" + id);
    }

    actualizarUsuario(id: number, cliente : Cliente): Observable<Cliente>{
        return this.httpClient.patch<Cliente>("http://localhost:8085/api/v1/cliente/" + id, cliente)
    }
}