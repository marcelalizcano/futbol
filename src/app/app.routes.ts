import { RouterModule, Routes } from "@angular/router";
import { FooterComponent } from "./components/footer/footer.component";
import { JamesComponent } from "./components/james/james.component";
import { MessiComponent } from "./components/messi/messi.component";
import { RonaldoComponent } from "./components/ronaldo/ronaldo.component";
import { HomeComponent } from "./components/home/home.component";

const APP_ROUTING: Routes=[
  {path: 'footer', component:FooterComponent},
  {path: 'james', component:JamesComponent},
  {path: 'messi', component:MessiComponent},
  {path: 'ronaldo', component:RonaldoComponent},
  {path: 'home', component:HomeComponent},

  {path: '**', pathMatch: 'full', redirectTo: 'home'},

];
export const APP_ROUTES= RouterModule.forRoot(APP_ROUTING);
