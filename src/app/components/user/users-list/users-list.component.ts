import { Component, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { User } from 'src/app/models/User.models';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  listUsers : User[] = [];
  
  constructor(private _service : UserService, private _toast : NbToastrService) { }

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

}
