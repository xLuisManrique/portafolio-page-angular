import { Component } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html'
})
export class PortafolioComponent {

  constructor(
    public productoService: ProductosService,
  ){}

}
