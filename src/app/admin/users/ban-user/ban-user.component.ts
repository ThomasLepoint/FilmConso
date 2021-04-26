import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { deleteUser } from 'src/app/models/User.models';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-ban-user',
  templateUrl: './ban-user.component.html',
  styleUrls: ['./ban-user.component.scss']
})
export class BanUserComponent implements OnInit {
  id : string
  name : string
  form : FormGroup
  user : deleteUser
  constructor(protected dialogRef : NbDialogRef<string>, private _builder : FormBuilder, private _service : UserService,) { }

  ngOnInit(): void {
    this.form = this._builder.group({
      'reason' : [null, Validators.required],
      'disable_Until' : [null, Validators.required]
    })
  }
  banUser()
  {
    this.user = this.form.value
    this.user.id = this.id;
    this.user.reason = this.form.get("reason").value
    this.user.disable_Until = this.form.get("disable_Until").value
    this._service.banUser(this.user)
    this.ngOnInit();
    this.close();
  }
  close() {
    this.dialogRef.close();
  }
}
