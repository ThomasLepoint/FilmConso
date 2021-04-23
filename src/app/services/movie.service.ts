import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { Observable } from 'rxjs';
import { completeMovie, Movie } from '../models/Movie.models';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  listMovie : Movie[];
  movie : Movie;

  constructor(private _httpClient : HttpClient, private _toast : NbToastrService, private _router : Router) { }

  getAll() : Observable<Movie[]>
  {
    // let header = new HttpHeaders ({
    //   'Authorization' : 'Bearer '+localStorage.getItem('token') 
    // })    
    // return this._httpClient.get<Movie[]>('http://localhost:56172/api/Movie', {headers : header});
    return this._httpClient.get<Movie[]>('http://localhost:56172/api/Movie');
  }
  get(id : string) : Observable<completeMovie>
  {
    return this._httpClient.get<completeMovie>('http://localhost:56172/api/Movie/'+id);
  }
}
