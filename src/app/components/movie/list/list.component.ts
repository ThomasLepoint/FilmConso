import { Component, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { Movie } from 'src/app/models/Movie.models';
import { AuthService } from 'src/app/services/auth.service';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  
  listMovie : Movie;
  isAdmin : boolean;

  constructor(private _movieServ : MovieService, private _toast : NbToastrService, private _authService : AuthService) { }

  ngOnInit(): void {
    this.loadMovie();
  }
  loadMovie()
  {    
    this._movieServ.getAll().subscribe((data : Movie)=>{
      this.listMovie = data     
      console.log(this.listMovie);
      this._toast.success('Liste des Films chargées avec succès', 'Succès')
    },
    (error) => {this._toast.danger('Problème de chargement de la liste' , 'error')}
    )       
  }

}
