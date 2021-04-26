import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { person } from 'src/app/models/person.model';
import { StaffServiceService } from 'src/app/services/staff-service.service';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.scss']
})
export class AddStaffComponent implements OnInit {
  
  form : FormGroup;
  cast : person

  constructor(private _service : StaffServiceService, private _builder : FormBuilder) { }

  ngOnInit(): void {
    this.form = this._builder.group({
      'firstName' : [null, Validators.required],
      'lastName' : [null, Validators.required],
      'birthDate' : [null, null]
    })
  }
  create()
  {
    this.cast = this.form.value
    this._service.create(this.cast)
  }

}
