import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbButtonModule, NbCardModule, NbInputModule, NbListModule, NbMenuModule, NbToastrModule, NbDialogModule, NbContextMenuModule, NbTreeGridModule, NbPopoverModule, NbDatepicker, NbDatepickerModule, NbIconModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NavComponent } from './components/nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { AuthComponent } from './components/user/auth/auth.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ListComponent } from './components/movie/list/list.component';
import { MovieSearchComponent } from './components/movie/movie-search/movie-search.component';
import { MovieSynopsisDialogComponent } from './components/movie/movie-synopsis-dialog/movie-synopsis-dialog.component';
import { MovieDetailComponent } from './components/movie/movie-detail/movie-detail.component';
import { CommentDetailComponent } from './components/comments/comment-detail/comment-detail.component';
import { CreateMovieComponent } from './components/movie/create-movie/create-movie.component';
import { UpdateMovieComponent } from './components/movie/update-movie/update-movie.component';
import { AddPersonComponent } from './components/person/add-person/add-person.component';
import { UpdatePersonComponent } from './components/person/update-person/update-person.component';
import { ListPersonComponent } from './components/person/list-person/list-person.component';
import { ListUserComponent } from './components/admin/list-user/list-user.component';
import { ListCommentsAdminComponent } from './components/admin/list-comments-admin/list-comments-admin.component'
import { TokenInterceptor } from './services/token.interceptor';
import { UsersListComponent } from './components/user/users-list/users-list.component';
import { MyaccountComponent } from './components/user/myaccount/myaccount.component';
import { MyaccountupdateComponent } from './components/user/myaccountupdate/myaccountupdate.component';
import { UpdateCommentComponent } from './components/comments/update-comment/update-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AuthComponent,
    RegisterComponent,
    ListComponent,
    MovieSearchComponent,
    MovieSynopsisDialogComponent,
    MovieDetailComponent,
    CommentDetailComponent,
    CreateMovieComponent,
    UpdateMovieComponent,
    AddPersonComponent,
    UpdatePersonComponent,
    ListPersonComponent,
    ListUserComponent,
    ListCommentsAdminComponent,
    UsersListComponent,
    MyaccountComponent,
    MyaccountupdateComponent,
    UpdateCommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'corporate' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbButtonModule,
    NbCardModule,
    NbInputModule,
    NbListModule,
    FormsModule,
    ReactiveFormsModule,
    NbMenuModule.forRoot(),
    NbContextMenuModule,
    NbToastrModule.forRoot(),
    NbDialogModule.forRoot(),
    NbSidebarModule.forRoot(),
    HttpClientModule,
    NbDialogModule.forRoot(),
    NbPopoverModule,
    NbDatepickerModule.forRoot(),
    NbEvaIconsModule,
    NbIconModule,
  ],
  providers: [
    { provide : HTTP_INTERCEPTORS, useClass : TokenInterceptor, multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
