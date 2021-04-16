import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/movie/list/list.component';
import { MovieSearchComponent } from './components/movie/movie-search/movie-search.component';
import { AuthComponent } from './components/user/auth/auth.component';
import { RegisterComponent } from './components/user/register/register.component';

const routes: Routes = [
  {path : 'home', component : HomeComponent},
  {path : 'user/auth', component : AuthComponent},
  {path : 'user/register', component : RegisterComponent},
  {path : 'movie/list', component : ListComponent},
  {path : 'movie/search', component : MovieSearchComponent},
  {path : '', redirectTo : 'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
