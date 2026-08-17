import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { PageNotFound } from './page-not-found/page-not-found';
import { JuegoList } from './dashboard/juego/juego-list/juego-list';
import { JuegoDetails } from './dashboard/juego/juego-details/juego-details';

//-----------------------------------
import { Inicio } from './producto/inicio/inicio';
import { Juegos } from './producto/juegos/juegos';
import { DetalleJuego } from './producto/detalle-juego/detalle-juego';
import { Contactanos } from './producto/contactanos/contactanos';
import { Nosotros } from './producto/nosotros/nosotros';
import { Registro } from './producto/registro/registro';
//----------------------------
import { VerCarrito } from './carrito/ver-carrito/ver-carrito';
import { ConfirmarCompra } from './carrito/confirmar-compra/confirmar-compra';
import { HistorialCompras } from './cliente/historial-compras/historial-compras';
import { DetalleVenta } from './cliente/detalle-venta/detalle-venta';
//----------------------------
import { Sidebar } from './admin/sidebar/sidebar';
import { ListaJuegos } from './admin/juegos/lista-juegos/lista-juegos';
import { RegistrarJuego } from './admin/juegos/registrar-juego/registrar-juego';
import { ModificarJuego } from './admin/juegos/modificar-juego/modificar-juego';
import { ListaCategorias } from './admin/categorias/lista-categorias/lista-categorias';
import { RegistrarCategoria } from './admin/categorias/registrar-categoria/registrar-categoria';
import { ModificarCategoria } from './admin/categorias/modificar-categoria/modificar-categoria';
import { ListaUsuarios } from './admin/usuarios/lista-usuarios/lista-usuarios';
import { RegistrarUsuario } from './admin/usuarios/registrar-usuario/registrar-usuario';
import { ModificarUsuario } from './admin/usuarios/modificar-usuario/modificar-usuario';
import { ListaVentas } from './admin/ventas/lista-ventas/lista-ventas';
import { DetalleVenta as DetalleVentaAdmin } from './admin/ventas/detalle-venta/detalle-venta';
import { Mensajes } from './admin/mensajes/mensajes';


export const routes: Routes = [
    {path: "dashboard", component: Dashboard,
        children: [
            {path: "juego", component: JuegoList},
            {path: "juego/:id", component: JuegoDetails}
        ]
    },
    {path: "", redirectTo: "producto/inicio", pathMatch: "full"},

    { path: 'producto/inicio', component: Inicio },
    { path: 'producto/juegos', component: Juegos },
    { path: 'producto/detalles-juego/:id', component: DetalleJuego },
    { path: 'producto/contactanos', component: Contactanos },
    { path: 'producto/nosotros', component: Nosotros },
    { path: 'producto/registro', component: Registro },
    
    { path: 'carrito/ver', component: VerCarrito },
    { path: 'carrito/confirmar', component: ConfirmarCompra },
    { path: 'cliente/historial', component: HistorialCompras },
    { path: 'cliente/detalle-compra/:id', component: DetalleVenta },
    
    {
    path: 'admin', component: Sidebar,
    children: [
        { path: 'lista-juegos', component: ListaJuegos },
        { path: 'registrar-juego', component: RegistrarJuego },
        { path: 'modificar-juego/:id', component: ModificarJuego },

        { path: 'lista-categorias', component: ListaCategorias },
        { path: 'registrar-categoria', component: RegistrarCategoria },
        { path: 'modificar-categoria/:id', component: ModificarCategoria },

        { path: 'lista-usuarios', component: ListaUsuarios },
        { path: 'registrar-usuario', component: RegistrarUsuario },
        { path: 'modificar-usuario/:id', component: ModificarUsuario },

        { path: 'lista-ventas', component: ListaVentas },
        { path: 'detalle-venta/:id', component: DetalleVentaAdmin },
        { path: 'mensajes', component: Mensajes }
    ]
    },

    {path: "**", component: PageNotFound}
];