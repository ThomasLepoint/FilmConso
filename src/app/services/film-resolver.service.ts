import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { completeMovie } from '../models/Movie.models';
import { MovieService } from './movie.service';

@Injectable({
  providedIn: 'root'
})
export class FilmResolverService  implements Resolve<completeMovie> {

  constructor(private _service : MovieService, private _toast : NbToastrService) { }

  resolve(route : ActivatedRouteSnapshot) : Observable<completeMovie>
  {
    return this._service.get(route.params['id']).pipe(catchError(e => {this._toast.primary(e.message); return of(e)}))
  }
}

