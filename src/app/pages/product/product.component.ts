import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoDescripcion } from 'src/app/interface/interfaces/info-productodescrip.interface';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {

  producto!: ProductoDescripcion;
  productoID!: string;

  constructor(
    private route: ActivatedRoute,
    public productosService: ProductosService
  ){
  }

  ngOnInit(){
    this.route.params
    .subscribe( parametros =>{
      this.productosService.getProductos(parametros['id'])
      .subscribe( (productos: any) =>{

        this.productoID = parametros['id'];
        this.producto = productos;
      });
    })

  }
  
}
