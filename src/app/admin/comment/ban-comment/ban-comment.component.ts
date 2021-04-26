import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { disableComment } from 'src/app/models/Comments';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-ban-comment',
  templateUrl: './ban-comment.component.html',
  styleUrls: ['./ban-comment.component.scss']
})
export class BanCommentComponent implements OnInit {
  id : string
  name : string
  form : FormGroup
  constructor(private _builder : FormBuilder,protected dialogRef : NbDialogRef<string>, private _service : CommentService ) { }

  ngOnInit(): void {
    this.form = this._builder.group({
      'reason' : [null, Validators.required]
    })
  }
  banComment()
  {
    let comment : disableComment
    comment = this.form.value
    comment.id = this.id;
    this._service.delete(comment);
  }
  close() {
    this.dialogRef.close();
  }

}
