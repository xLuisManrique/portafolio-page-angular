import { Component } from '@angular/core';
import { InformationService } from 'src/app/services/information.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html'
})
export class AboutUsComponent {


  constructor (
    public _is: InformationService
  ){}

}
