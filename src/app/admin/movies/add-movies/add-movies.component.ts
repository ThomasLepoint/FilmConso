import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { insertCasting } from 'src/app/models/Casting.model';
import { insertMovie } from 'src/app/models/Movie.models';
import { person } from 'src/app/models/person.model';
import { MovieService } from 'src/app/services/movie.service';
import { StaffServiceService } from 'src/app/services/staff-service.service';

@Component({
  selector: 'app-add-movies',
  templateUrl: './add-movies.component.html',
  styleUrls: ['./add-movies.component.scss']
})
export class AddMoviesComponent implements OnInit {
  
  casting : person[];
  director : string;
  scriptWriter : string;
  releaseDate : Date;
  form : FormGroup;
  actors : insertCasting[] = []
  insertMovie : insertMovie = new insertMovie();

  constructor(private _staffService : StaffServiceService, private _movieService : MovieService, private _builder : FormBuilder, private _toast : NbToastrService, private _router : Router) { }

  ngOnInit(): void {
    this._staffService.getAll().subscribe((data : person[]) => {this.casting = data})
    this.form = this._builder.group({
      'title' : [null, Validators.required],
      'releaseDate' : [null, null],
      'synopsis' : [null, null],
      'cast' : this._builder.array([])
    });
    this.getCast().push(this.newActor())
    
  }
  getCast() : FormArray {
    return this.form.get("cast") as FormArray
  }
  newActor(): FormGroup {
    return this._builder.group({
      staffId: '',
      character: '',
    })
 }
  AddActor()
  {
   this.getCast().push(this.newActor())
  }
  removeActor()
  {
   this.getCast().removeAt(this.getCast().length - 1)
  }
  addMovie()
  {
    this.insertMovie.title = this.form.value['title']
    this.insertMovie.releaseDate = this.form.value['releaseDate']
    this.insertMovie.synopsis = this.form.value['synopsis']
    this.insertMovie.directorId = this.director;
    this.insertMovie.scriptWriterId = this.scriptWriter;
    this.insertMovie.casting = this.form.value['cast'];
    this._movieService.add(this.insertMovie);
    
  }



}
