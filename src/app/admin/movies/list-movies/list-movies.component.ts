import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { MovieSynopsisDialogComponent } from 'src/app/components/movie/movie-synopsis-dialog/movie-synopsis-dialog.component';
import { Movie } from 'src/app/models/Movie.models';
import { MovieService } from 'src/app/services/movie.service';
import { AddMoviesComponent } from '../add-movies/add-movies.component';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss']
})
export class ListMoviesComponent implements OnInit {

  listMovie : Movie[];
  isAdmin : boolean;
  constructor(private _router : Router, private _movieServ : MovieService, private _toast : NbToastrService, protected dialogService: NbDialogService) { 
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
    this._router.navigate(['admin/movie/update/'+id])
  }
  AddFilm()
  {
    this.dialogService.open(AddMoviesComponent, {
    }).onClose.subscribe(()=>this.ngOnInit());
  }
}
