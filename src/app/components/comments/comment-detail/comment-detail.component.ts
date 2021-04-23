import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { fullComment } from 'src/app/models/Comments';

@Component({
  selector: 'app-comment-detail',
  templateUrl: './comment-detail.component.html',
  styleUrls: ['./comment-detail.component.scss']
})
export class CommentDetailComponent implements OnInit {
  
  comment : fullComment
  constructor(protected dialogRef: NbDialogRef<CommentDetailComponent>) { }

  ngOnInit(): void {
    console.log(this.comment);
    
  }
  close()
  {
    this.dialogRef.close();
  }
  numSequence(n: number): Array<number> {
    return Array(n);
  }
}
