import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { completeMovie, insertMovie } from 'src/app/models/Movie.models';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.scss']
})
export class UpdateMovieComponent implements OnInit {
  idMovie : string;
  movie : insertMovie
  releaseDate : Date;
  form : FormGroup;

  constructor(private _actRoute : ActivatedRoute, private _movieService : MovieService, private _builder : FormBuilder, private _toast : NbToastrService, private _router : Router) { }

  ngOnInit(): void {
    this.movie = this._actRoute.snapshot.data['completeMovie'];
    this.idMovie = this._actRoute.snapshot.params['id']
    this.form = this._builder.group({
      'title' : [this.movie.title, Validators.required],
      'releaseDate' : [this.movie.releaseDate, null],
      'synopsis' : [this.movie.synopsis, null],
    });
  }
  updateMovie()
  {
    this.movie = this.form.value 
    this.movie.id = this.idMovie  
    console.log(this.movie);
    
    this._movieService.update(this.movie)
  }
}
