export interface DetalleVenta {
    idventa: number;
    idjuegos: number;
    cantidad: number;
    precio: number;
    estado: string;
    juego?: any;
}