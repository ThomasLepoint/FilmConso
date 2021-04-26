import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { Observable } from 'rxjs';
import { person } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class StaffServiceService {

  constructor(private _httpClient : HttpClient, private _toast : NbToastrService, private _router : Router) { }

  create(staff : person)
  {
    this._httpClient.post<person>("http://localhost:56172/api/Staff" , staff).subscribe(()=> {
      this._toast.success("Personne ajoutée", "Success")
    },
    (error)=>{this._toast.danger("Erreur lors de l'ajout de la personne")})
  }
  getAll() : Observable<person[]>
  {
    return this._httpClient.get<person[]>("http://localhost:56172/api/Staff");
  }
}
