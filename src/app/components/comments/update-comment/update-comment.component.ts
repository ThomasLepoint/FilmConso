import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { userComments } from 'src/app/models/Comments';

@Component({
  selector: 'app-update-comment',
  templateUrl: './update-comment.component.html',
  styleUrls: ['./update-comment.component.scss']
})
export class UpdateCommentComponent implements OnInit {
  comment : userComments;

  constructor(private _actRoute : ActivatedRoute, private _router : Router) { }

  ngOnInit(): void {
    this.comment = this._actRoute.snapshot.data['Comment'];
  }
  updateComment(id : string)
  {
    
  }

}
