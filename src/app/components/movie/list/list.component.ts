import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { Movie } from 'src/app/models/Movie.models';
import { AuthService } from 'src/app/services/auth.service';
import { MovieService } from 'src/app/services/movie.service';
import { MovieSynopsisDialogComponent } from '../movie-synopsis-dialog/movie-synopsis-dialog.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  
  listMovie : Movie[];
  isAdmin : boolean;
  constructor(private _router : Router, private _movieServ : MovieService, private _toast : NbToastrService, private _authService : AuthService, protected dialogService: NbDialogService) { 
  }

  ngOnInit(): void {
    this.loadMovie();
  }
  openDialog(synopsis : string)
  {
    this.dialogService.open(MovieSynopsisDialogComponent, {
      context: {title : 'Synopsis', content : synopsis}
    });
  }
  loadMovie()
  {    
    this._movieServ.getAll().subscribe((data : Movie[])=>{
      this.listMovie = data;
      this._toast.success('Liste des Films chargées avec succès', 'Succès')
    },
    (error) => {this._toast.danger('Problème de chargement de la liste' , 'error')}
    )       
  }
  getDetail(id : string)
  {
    this._router.navigate(['movie/detail/'+id])
  }

}
