import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// ROUTES
import { AppRoutingModule } from './app-routing.module';

// COMPONENTS
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ProductComponent } from './pages/product/product.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

// SERVICES
import { InformationService } from './services/information.service';
import { SearchComponent } from './pages/search/search.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutUsComponent,
    ProductComponent,
    ContactUsComponent,
    SearchComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [InformationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
