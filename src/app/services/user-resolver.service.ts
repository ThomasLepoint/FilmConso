import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { completeUser } from '../models/User.models';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolverService implements Resolve<completeUser>{

  constructor(
    private _service : UserService,
    private _toast : NbToastrService
  ) { }

  resolve() : Observable<completeUser>
  {
    return this._service.getUser(localStorage.getItem('id')).pipe(catchError(e => {this._toast.primary(e.message); return of(e)}))
  }
}
