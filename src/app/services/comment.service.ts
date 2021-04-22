import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private _httpClient : HttpClient, private _toast : NbToastrService, private _router : Router) { }

  getComment(id : string) : Observable<Comment>
  {
    return this._httpClient.get<Comment>("http://localhost:56172/api/Comment/" + id);
  }
}
