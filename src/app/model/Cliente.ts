export interface Cliente {
  idcliente?: number;
  nombres: string;
  apellidos: string;
  dni: string;
  telefono: string;
  direccion: string;
  fechanacimiento: string;
  sexo: string;
  correo: string;
  password?: string;
  estado?: string;
  roleIds?: number[];
}
