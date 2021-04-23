import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbDialogRef } from '@nebular/theme';
import { addComment, userComments } from 'src/app/models/Comments';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {
  title : string;
  movieId : string;
  noteValue : number = 0;
  form : FormGroup;
  comment : addComment = {movieId : '' , title : '', content : '', value : 0, userId : ''};

  constructor(private _builder : FormBuilder, private _service : CommentService, protected dialogRef: NbDialogRef<AddCommentComponent>, private _router : Router) { }

  ngOnInit(): void {
    this.form = this._builder.group({
      'Title' : [null, Validators.required],
      'Content' : [null, Validators.required]
    })
  }
  setValue(newValue) {
    if (newValue < 100)
    this.noteValue = Math.min(Math.max(newValue, 0), 100) ;   
  }
  add()
  {
    this.comment.movieId = this.movieId;
    this.comment.title = this.form.get('Title').value;
    this.comment.content = this.form.get('Content').value;
    this.comment.value = this.noteValue;
    this.comment.userId = localStorage.getItem('id');
    this._service.add(this.comment);
    this.dialogRef.close();
  }
  close()
  {
    this.dialogRef.close();
  }
}
