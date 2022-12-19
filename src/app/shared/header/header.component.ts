import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InformationService } from '../../services/information.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor( 
    public _is: InformationService,
    private router: Router,
    ){}

  ngOnInit() {}

  buscarProducto( termino: string){
    if( termino.length < 1 ){
      return;
    }

    this.router.navigate(['/search',  termino]);

    
  }

}
