import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';

const routes: Routes = [
  {path:'', redirectTo:"/home", pathMatch:"full" },
  { path:'home', component: HomeComponent},
  {path:'about', component:AboutComponent},
  //{path:'login', component:LoginComponent},
  //{path:'signup', component:SignupComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
