import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './pages/search/search.component';
import {
  AboutUsComponent,
  PortafolioComponent,
  ProductComponent,
  ContactUsComponent,
} from './shared/index.paginas'

const routes: Routes = [
  { path: 'home', component: PortafolioComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'search/:termino', component: SearchComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];



@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true } )],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  useHash: true | undefined

 }
