import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { NgifComponent } from './components/ngif/ngif.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NgforComponent } from './components/ngfor/ngfor.component';

const routes: Routes = [
  { path: 'ngif', component: NgifComponent },
  { path: 'ngclass', component: NgClassComponent },
  { path: 'ngfor', component: NgforComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '', component: InicioComponent, pathMatch: 'full'},
  { path: '**', redirectTo: '/', pathMatch: 'full'}
  //{ path: '**', component: PageNotFoundComponent },
  //{ path: 'hero/:id',      component: HeroDetailComponent },
  //{ path: 'heroes', component: HeroListComponent, data: { title: 'Heroes List' }},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
