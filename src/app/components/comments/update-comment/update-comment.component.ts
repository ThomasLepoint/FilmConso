import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { updateComment, userComments } from 'src/app/models/Comments';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-update-comment',
  templateUrl: './update-comment.component.html',
  styleUrls: ['./update-comment.component.scss']
})
export class UpdateCommentComponent implements OnInit {
  comment : userComments;
  updComment : updateComment = {id : '' ,title : '', content : '', value : 0};
  form : FormGroup;

  constructor(private _actRoute : ActivatedRoute, private _router : Router, private _builder : FormBuilder, private _service : CommentService) { }

  ngOnInit(): void {
    this.comment = this._actRoute.snapshot.data['Comment'];
    this.form = this._builder.group({
      'Title' : [this.comment.title, Validators.required],
      'Content' : [this.comment.content, Validators.required],
    });
  }
  update()
  {
    this.updComment.id = this.comment.id;
    this.updComment.title = this.form.get('Title').value
    this.updComment.content = this.form.get('Content').value
    if(this.comment.value > 5) this.updComment.value = 5;
    else this.updComment.value = this.comment.value
    
    this._service.update(this.updComment);    
    
  }
  setValue(newValue) {
    if (newValue < 100)
    this.comment.value = Math.min(Math.max(newValue, 0), 100)    
  }
}
