import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { FourOfourComponent } from '../components/errors/four-ofour/four-ofour.component';
import { NbActionsModule, NbButtonModule, NbCardModule, NbContextMenuModule, NbDatepicker, NbDatepickerModule, NbDialogModule, NbIconModule, NbInputModule, NbLayoutModule, NbListModule, NbMenuModule, NbPopoverModule, NbProgressBarModule, NbSelectModule, NbSidebarModule, NbToastrModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '../services/token.interceptor';
import { ListMoviesComponent } from './movies/list-movies/list-movies.component';
import { AddMoviesComponent } from './movies/add-movies/add-movies.component';
import { BanUserComponent } from './users/ban-user/ban-user.component';
import { AddStaffComponent } from './staff/add-staff/add-staff.component';
import { CommentListComponent } from './comment/comment-list/comment-list.component';
import { BanCommentComponent } from './comment/ban-comment/ban-comment.component';
import { UpdateMovieComponent } from './movies/update-movie/update-movie.component';


@NgModule({
  declarations: [
    AdminComponent,
       ListUsersComponent,
       ListMoviesComponent,
       AddMoviesComponent,
       BanUserComponent,
       AddStaffComponent,
       CommentListComponent,
       BanCommentComponent,
       UpdateMovieComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
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
    NbSelectModule
  ],
  providers: [
    { provide : HTTP_INTERCEPTORS, useClass : TokenInterceptor, multi : true}
  ],
})
export class AdminModule { }
