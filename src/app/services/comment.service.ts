import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { Observable } from 'rxjs';
import { addComment, disableComment, fullComment, updateComment, userComments } from '../models/Comments';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private _httpClient : HttpClient, private _toast : NbToastrService, private _router : Router) { }

  getComment(id : string) : Observable<Comment>
  {
    return this._httpClient.get<Comment>("http://localhost:56172/api/Comment/" + id);
  }
  update(comment : updateComment) 
  {
    return this._httpClient.put<updateComment>("http://localhost:56172/api/Comment" , comment).subscribe(()=>{
      this._router.navigate(['user/myprofil'])  
      this._toast.success("modification réussie", "Success")
      },
      (error) => {this._toast.danger("Erreur lors de la modification")});
  }
  add(comment : addComment)
  {
    return this._httpClient.post<addComment>("http://localhost:56172/api/Comment", comment).subscribe(()=> {
      this._toast.success("Commentaires ajouté", "Success")
    },
    (error)=>{this._toast.danger("Erreur lors de l'ajout du commentaire")})
  }
  getAll() : Observable<fullComment[]>
  {
    return this._httpClient.get<fullComment[]>("http://localhost:56172/api/Comment/GetComments");
  }
  delete(comment : disableComment)
  {
    return this._httpClient.request('delete', "http://localhost:56172/api/Comment/", {body : comment}).subscribe(()=>{
      this._toast.success("modification réussie", "Success")
      },
      (error) => {this._toast.danger("Erreur lors de la modification")});
  }
}
