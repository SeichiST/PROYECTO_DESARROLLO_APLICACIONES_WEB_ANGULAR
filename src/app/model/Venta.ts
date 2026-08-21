export interface DetalleVentaItem {
    idJuego: number;
    descripcionJuego: string;
    cantidad: number;
    precio: number;
    subtotal: number;
}

export interface VentaDetalleResponse {
    idVenta: number;
    idCliente: number;
    nombresCliente: string;
    apellidosCliente: string;
    fechaVenta: string;
    montoTotal: number;
    estado: string;
    detalles: DetalleVentaItem[];
}

export interface Venta {
    idventa?: number;
    cliente?: {
        idcliente?: number;
        nombres?: string;
        apellidos?: string;
    };
    fechaventa?: string;
    montototal?: number;
    estado?: string;
}