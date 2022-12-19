import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPage } from '../interface/interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  info: any = {};
  cargada = false;
  equipo: any[] = [];

  constructor(
    public http: HttpClient, ){
      
        this.http.get("assets/data/info.pagina.json")
        .subscribe( ( resp: any) =>{
          this.cargada = true;
          this.info = resp;
          console.log(resp);
        });

        this.http.get("https://luman-portafolio-default-rtdb.europe-west1.firebasedatabase.app/equipo.json")
        .subscribe( ( resp: any) =>{
          this.equipo = resp;
          console.log(resp);
        });

      }

        

  
    }