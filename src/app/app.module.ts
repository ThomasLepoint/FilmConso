import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbButtonModule, NbCardModule, NbInputModule, NbListModule, NbMenuModule, NbToastrModule, NbDialogModule, NbContextMenuModule, NbTreeGridModule, NbPopoverModule, NbDatepicker, NbDatepickerModule, NbIconModule, NbProgressBarModule, NbActionsModule } from '@nebular/theme';
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
import { TokenInterceptor } from './services/token.interceptor';
import { UsersListComponent } from './components/user/users-list/users-list.component';
import { MyaccountComponent } from './components/user/myaccount/myaccount.component';
import { MyaccountupdateComponent } from './components/user/myaccountupdate/myaccountupdate.component';
import { UpdateCommentComponent } from './components/comments/update-comment/update-comment.component';
import { AddCommentComponent } from './components/comments/add-comment/add-comment.component';
import { ListCommentComponent } from './components/comments/list-comment/list-comment.component';
import { FourOfourComponent } from './components/errors/four-ofour/four-ofour.component';

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
    UsersListComponent,
    MyaccountComponent,
    MyaccountupdateComponent,
    UpdateCommentComponent,
    AddCommentComponent,
    ListCommentComponent,
    FourOfourComponent,
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
    NbPopoverModule,
    NbDatepickerModule.forRoot(),
    NbIconModule,
    NbProgressBarModule,
    NbActionsModule,
  ],
  exports : [
    FormsModule,
    ReactiveFormsModule,
    FourOfourComponent
  ],
  providers: [
    { provide : HTTP_INTERCEPTORS, useClass : TokenInterceptor, multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
