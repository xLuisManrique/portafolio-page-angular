import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductoInterface } from '../interface/interfaces/info-producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: ProductoInterface[] = [];
  productosFiltrado: ProductoInterface[] = [];

  constructor(
    private http: HttpClient,
  ) 
  { 
    this.cargarProductos();
  }

  private cargarProductos(){

    return new Promise<void>( ( resolve, reject ) =>{
      this.http.get('https://luman-portafolio-default-rtdb.europe-west1.firebasedatabase.app/productos_idx.json')
      .subscribe( ( resp: any) =>{
        this.productos = resp;
        this.cargando = false;
        resolve();
      });
    });
  }

  getProductos( id: string){
    console.log(id);
  return this.http.get(`https://luman-portafolio-default-rtdb.europe-west1.firebasedatabase.app/productos/${id}.json`)
  }

  buscarProducto (termino: string) {

    if ( this.productos.length === 0){
      this.cargarProductos().then( ()=>{
        this.filtrarProductos( termino );
      })
    }else{
      this.filtrarProductos( termino );
    }

    this.productosFiltrado = this.productos.filter( producto => {
      return true;
    });
  }

  private filtrarProductos(termino: string){
    this.productosFiltrado = [];

    termino = termino.toLocaleLowerCase();

    this.productos.forEach( prod => {
      const tituloLower = prod.titulo.toLocaleLowerCase();
      if ( prod.categoria.indexOf( termino) >= 0 || tituloLower.indexOf( termino) >= 0  ){
        this.productosFiltrado.push( prod );
      }
    });

  }
  

}