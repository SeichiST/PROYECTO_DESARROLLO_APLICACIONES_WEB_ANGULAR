import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ImagenService } from '../../../service/imagenservice';
import { CategoriaService } from '../../../service/categoriaservice';
import { JuegoService } from '../../../dashboard/juego/juegoservice';

@Component({
  selector: 'app-modificar-juego',
  imports: [FormsModule],
  templateUrl: './modificar-juego.html',
  styleUrl: './modificar-juego.css'
})
export class ModificarJuego {
 private router = inject(Router);
  private route = inject(ActivatedRoute);
  private juegoService = inject(JuegoService);
  private categoriaService = inject(CategoriaService);
  private imagenService = inject(ImagenService);
  private cdr = inject(ChangeDetectorRef);

  lstCategorias: any[] = [];
  selectedFile: File | null = null;

  juego: any = {
    idJuegos: 0,
    descripcion: '',
    precio: 0,
    imagen: '',
    categoria: ''
  };

   ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

   
    this.juegoService.getJuegoById(id).subscribe({
      next: (res) => {
        this.juego = res;
        this.cdr.detectChanges();
      },
      error: (err) => console.error("Error al cargar el juego:", err.message)
    });
    this.categoriaService.getCategorias().subscribe({
      next: (res) => {
        this.lstCategorias = res;
        this.cdr.detectChanges();
      },
      error: (err) => console.error("Error al cargar categorías:", err.message)
    });
  }
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  actualizarJuego() {
    if (this.selectedFile) {
      
      this.imagenService.subirImagenJuego(this.selectedFile).subscribe({
        next: (res) => {
          this.juego.imagen = res.nombreArchivo;
          this.guardarCambios();
        },
        error: (err) => console.error("Error al subir la imagen:", err.message)
      });
    } else {
      
      this.guardarCambios();
    }
  }
   private guardarCambios() {
    this.juegoService.actualizarJuego(this.juego.idjuegos, this.juego).subscribe({
      next: () => {
        console.log("Juego actualizado correctamente");
        this.goListaJuegos();
      },
      error: (err) => console.error("Error al actualizar el juego:", err.message)
    });
  }
  goListaJuegos() {
    this.router.navigate(['/admin/lista-juegos']);
  }
}