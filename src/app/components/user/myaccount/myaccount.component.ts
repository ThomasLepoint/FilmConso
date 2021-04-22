import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { completeUser, User } from 'src/app/models/User.models';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.scss']
})
export class MyaccountComponent implements OnInit {
  user : completeUser;
  fakeArray = [1, 2, 3, 4, 5];
  constructor(private _service : UserService, private _router : Router) { }

  ngOnInit(): void {
    this.loadUser();
  }
  loadUser()
  {
    let userId = localStorage.getItem('id');
    this._service.getUser(userId).subscribe((data : completeUser) => {this.user = data , console.log(data);
    }
    )
  }
  numSequence(n: number): Array<number> {
    return Array(n);
  }
  updateUser()
  {
    this._router.navigate(['user/myprofil/update']);
  }
  updateComment(id : string)
  {
    this._router.navigate(['comment/update/' + id]);
  }
}
