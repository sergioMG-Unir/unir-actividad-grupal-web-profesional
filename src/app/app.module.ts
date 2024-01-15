import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// Recordar anadir aqui los componentes nuevos
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';
import { NewsComponent } from './news/news.component';
import { WorkComponent } from './work/work.component';
import { AccordionItemComponent } from './accordion-item/accordion-item.component';



// Rutas para diferentes páginas en el proyecto
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'about',
    component: AboutComponent,
    children: [{ path: ':id/:name', component: AboutComponent }],
  },
  {
    path: 'services',
    component: ServicesComponent,
    children: [{ path: ':id/:name', component: ServicesComponent }],
  },
  {
    path: 'news',
    component: NewsComponent,
    children: [{ path: ':id/:name', component: NewsComponent }],
  },
  {
    path: 'work',
    component: WorkComponent,
    children: [{ path: ':id/:name', component: WorkComponent }],
  },
  
];

// Y tenemos que anadir la declaracion aqui tambien del compo nuevo
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    NavbarComponent,
    AboutComponent,
    FooterComponent,
    ServicesComponent,
    NewsComponent,
    WorkComponent,
    AccordionItemComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  bootstrap: [AppComponent],
})
export class AppModule {}
