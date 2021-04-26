import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FourOfourComponent } from '../components/errors/four-ofour/four-ofour.component';
import { FilmResolverService } from '../services/film-resolver.service';
import { AdminComponent } from './admin.component';
import { CommentListComponent } from './comment/comment-list/comment-list.component';
import { ListMoviesComponent } from './movies/list-movies/list-movies.component';
import { UpdateMovieComponent } from './movies/update-movie/update-movie.component';
import { AddStaffComponent } from './staff/add-staff/add-staff.component';
import { ListUsersComponent } from './users/list-users/list-users.component';

const routes: Routes = [
  {path : '', component: AdminComponent, children : [
    {path : 'users/list', component: ListUsersComponent },
    {path : 'movies/list', component : ListMoviesComponent},
    {path : 'comment/list', component : CommentListComponent},
    {path : 'staff/add', component:AddStaffComponent},
    {path : 'movie/update/:id',resolve : {completeMovie : FilmResolverService},  component : UpdateMovieComponent}
  ]},
  {path : '404', component:FourOfourComponent},
  {path : '', redirectTo : 'home', pathMatch:'full'},
  {path : '**', redirectTo : '404'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
