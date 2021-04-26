import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { User } from 'src/app/models/User.models';
import { UserService } from 'src/app/services/user.service';
import { BanUserComponent } from '../ban-user/ban-user.component';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  listUsers : User[] = [];
  
  constructor(private _service : UserService, private _toast : NbToastrService, private _router : Router, protected _dialog : NbDialogService) { }

  ngOnInit(): void {
    this.loadUser()
  }
  loadUser()
  {
    this._service.getUsers().subscribe((data : User[]) => {
      this.listUsers = data;     
      this._toast.success('Liste des utilisateurs chargée avec succès', 'Succès')
    },
    (error) => {this._toast.danger(error)})
  }
  banUser(id : string, name : string)
  {
    this._dialog.open(BanUserComponent, {
      context: {id : id, name : name}
    });
  }
  switchRole(id : string)
  {
    this._service.switchRole(id)
  }

}
