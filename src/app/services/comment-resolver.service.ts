import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CommentService } from './comment.service';

@Injectable({
  providedIn: 'root'
})
export class CommentResolverService implements Resolve<Comment> {

  constructor(
    private _service : CommentService,
    private _toast : NbToastrService
  ) { }

  resolve(route : ActivatedRouteSnapshot) : Observable<Comment>
  {
    return this._service.getComment(route.params['id']).pipe(catchError(e => {this._toast.primary(e.message); return of(e)}))
  }
}
