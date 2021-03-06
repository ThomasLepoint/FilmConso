import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCommentComponent } from './components/comments/list-comment/list-comment.component';
import { UpdateCommentComponent } from './components/comments/update-comment/update-comment.component';
import { FourOfourComponent } from './components/errors/four-ofour/four-ofour.component';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/movie/list/list.component';
import { MovieDetailComponent } from './components/movie/movie-detail/movie-detail.component';
import { MovieSearchComponent } from './components/movie/movie-search/movie-search.component';
import { AuthComponent } from './components/user/auth/auth.component';
import { MyaccountComponent } from './components/user/myaccount/myaccount.component';
import { MyaccountupdateComponent } from './components/user/myaccountupdate/myaccountupdate.component';
import { RegisterComponent } from './components/user/register/register.component';
import { UsersListComponent } from './components/user/users-list/users-list.component';
import { AdminGuardGuard } from './services/admin-guard.guard';
import { CommentResolverService } from './services/comment-resolver.service';
import { FilmResolverService } from './services/film-resolver.service';
import { UserGuardGuard } from './services/user-guard.guard';
import { UserResolverService } from './services/user-resolver.service';

const routes: Routes = [
  {path : 'home', component : HomeComponent},
  {path : 'user/auth', component : AuthComponent},
  {path : 'user/register', component : RegisterComponent},
  {path : 'user/list', canActivate : [UserGuardGuard] ,component : UsersListComponent},
  {path : 'user/myprofil',canActivate : [UserGuardGuard], resolve : {completeUser : UserResolverService}, component: MyaccountComponent},
  {path : 'user/myprofil/update',canActivate : [UserGuardGuard], resolve : {completeUser : UserResolverService}, component : MyaccountupdateComponent},
  {path : 'movie/list',canActivate : [UserGuardGuard], component : ListComponent},
  {path : 'movie/search', canActivate : [UserGuardGuard],component : MovieSearchComponent},
  {path : 'movie/detail/:id',canActivate : [UserGuardGuard], resolve : {completeMovie : FilmResolverService},component:MovieDetailComponent},
  {path : 'comment/list',canActivate : [UserGuardGuard], component : ListCommentComponent},
  {path : 'comment/update/:id',canActivate : [UserGuardGuard], resolve : {Comment : CommentResolverService},component : UpdateCommentComponent},
  {path : 'admin',canActivate : [AdminGuardGuard], loadChildren : ()=> import('./admin/admin.module').then(m=>m.AdminModule)},
  {path : '404', component:FourOfourComponent},
  {path : '', redirectTo : 'home', pathMatch:'full'},
  {path : '**', redirectTo : '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
