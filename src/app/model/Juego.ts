import { Categoria } from "./Categoria";

export interface Juego {
    idjuegos: number;
    descripcion: string;
    precio: number;
    imagen: string;
    categoria: Categoria;
    activo: boolean;
}