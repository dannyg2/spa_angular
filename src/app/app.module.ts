import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

//RUTAS
import { APP_ROUTING } from "./app.routes";
//SERVICIOS
import { HeroesService } from "./servicios/heroes.service";
//COMPONENTES
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/shared/navbar/navbar.component";
import { HomeComponent } from "./components/shared/home/home.component";
import { AboutComponent } from "./components/shared/about/about.component";
import { HeroesComponent } from "./components/shared/heroes/heroes.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent
  ],
  imports: [BrowserModule, APP_ROUTING],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
