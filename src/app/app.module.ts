import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { NgifComponent } from './components/ngif/ngif.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NgforComponent } from './components/ngfor/ngfor.component';

// Routing
//import { RouterModule, Routes } from '@angular/router';


/*const appRoutes: Routes = [
  
];*/

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    ContactoComponent,
    NgifComponent,
    NgClassComponent,
    NgforComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    //RouterModule.forRoot( appRoutes, { enableTracing: true } ) // <-- debugging purposes only
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
