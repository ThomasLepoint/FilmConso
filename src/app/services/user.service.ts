import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { Observable } from 'rxjs';
import { completeUser, deleteUser, registerUser, User } from '../models/User.models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  registerUser : registerUser;

  constructor(private _httpClient : HttpClient, private _toast : NbToastrService, private _router : Router) { }

  register(user : registerUser)
  {
      this._httpClient.post<registerUser>("http://localhost:56172/api/User/", user).subscribe(()=>{
      this._router.navigate(['user/auth'])  
      this._toast.success("Inscription réussie", "Success")
      },
      (error) => {this._toast.danger("Erreur lors de l'inscription")});
  }
  update(user : completeUser)
  {
    this._httpClient.put<completeUser>("http://localhost:56172/api/User/", user).subscribe(()=>{
      this._router.navigate(['user/myprofil'])  
      this._toast.success("modification réussie", "Success")
      },
      (error) => {this._toast.danger("Erreur lors de la modification")});
  }
  getUsers() : Observable<User[]>
  {
    if(localStorage.getItem('token'))
    {
      return this._httpClient.get<User[]>("http://localhost:56172/api/User/GetALl");
    }  
  }
  getUser(id : string) : Observable<completeUser>
  {
    if(localStorage.getItem('token'))
    {
      return this._httpClient.get<completeUser>("http://localhost:56172/api/User/" + id)
    }
  }
  banUser(user : deleteUser)
  {
    return this._httpClient.request('delete', "http://localhost:56172/api/User/" + user.id, {body : user}).subscribe(()=>{
      this._toast.success("modification réussie", "Success")
      },
      (error) => {this._toast.danger("Erreur lors de la modification")});
  }
  switchRole(id : string)
  {
    return this._httpClient.put("http://localhost:56172/api/User/SwitchRole", {Id : id}).subscribe(()=>{
      this._toast.success("modification réussie", "Success")
      },
      (error) => {this._toast.danger("Erreur lors de la modification")});
  }
}
