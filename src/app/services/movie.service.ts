import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { Observable } from 'rxjs';
import { completeMovie, insertMovie, Movie } from '../models/Movie.models';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  listMovie : Movie[];
  movie : Movie;

  constructor(private _httpClient : HttpClient, private _toast : NbToastrService, private _router : Router) { }

  getAll() : Observable<Movie[]>
  {
    return this._httpClient.get<Movie[]>('http://localhost:56172/api/Movie');
  }
  get(id : string) : Observable<completeMovie>
  {
    return this._httpClient.get<completeMovie>('http://localhost:56172/api/Movie/'+id);
  }
  add(movie : insertMovie)
  {
    this._httpClient.post<insertMovie>("http://localhost:56172/api/Movie/", movie).subscribe(()=>{
      this._toast.success("Ajout du film réussi", "Success")
      },
      (error) => {this._toast.danger("Erreur lors de l'ajout")});
  }
  update(movie : insertMovie)
  {
    this._httpClient.put<insertMovie>("http://localhost:56172/api/Movie/", movie).subscribe(()=>{
      this._toast.success("Mise à jour réussie", "Success")
      },
      (error) => {this._toast.danger("Erreur lors de la mise à jour")});
  }
}
