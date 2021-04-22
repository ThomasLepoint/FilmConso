import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateCommentComponent } from './components/comments/update-comment/update-comment.component';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/movie/list/list.component';
import { MovieDetailComponent } from './components/movie/movie-detail/movie-detail.component';
import { MovieSearchComponent } from './components/movie/movie-search/movie-search.component';
import { AuthComponent } from './components/user/auth/auth.component';
import { MyaccountComponent } from './components/user/myaccount/myaccount.component';
import { MyaccountupdateComponent } from './components/user/myaccountupdate/myaccountupdate.component';
import { RegisterComponent } from './components/user/register/register.component';
import { UsersListComponent } from './components/user/users-list/users-list.component';
import { CommentResolverService } from './services/comment-resolver.service';
import { UserResolverService } from './services/user-resolver.service';

const routes: Routes = [
  {path : 'home', component : HomeComponent},
  {path : 'user/auth', component : AuthComponent},
  {path : 'user/register', component : RegisterComponent},
  {path : 'user/list', component : UsersListComponent},
  {path : 'user/myprofil', resolve : {completeUser : UserResolverService}, component: MyaccountComponent},
  {path : 'user/myprofil/update', resolve : {completeUser : UserResolverService}, component : MyaccountupdateComponent},
  {path : 'movie/list', component : ListComponent},
  {path : 'movie/search', component : MovieSearchComponent},
  {path : 'movie/detail/:id', component:MovieDetailComponent},
  {path : 'comment/update/:id', resolve : {Comment : CommentResolverService},component : UpdateCommentComponent},
  {path : '', redirectTo : 'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
