import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthComponent } from './components/user/auth/auth.component';

const routes: Routes = [
  {path : 'home', component : HomeComponent},
  {path : 'user/auth', component : AuthComponent},
  {path : '', redirectTo : 'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
