import { Component, OnInit } from '@angular/core';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { fullComment } from 'src/app/models/Comments';
import { CommentService } from 'src/app/services/comment.service';
import { CommentDetailComponent } from '../comment-detail/comment-detail.component';

@Component({
  selector: 'app-list-comment',
  templateUrl: './list-comment.component.html',
  styleUrls: ['./list-comment.component.scss']
})
export class ListCommentComponent implements OnInit {
  
  listComment : fullComment[] = [];

  constructor(private _service : CommentService, private _toast : NbToastrService, protected dialogService: NbDialogService) { }

  ngOnInit(): void {
    this.loadComment()    
  }
  loadComment()
  {
    this._service.getAll().subscribe((data : fullComment[])=> {
      this.listComment = data;
      console.log(data);
      
      this._toast.success("Liste de scommentaires chargées avec succès")},
    (error) => {this._toast.danger("Erreur au chargement de la page")})
  }
  numSequence(n: number): Array<number> {
    return Array(n);
  }
  openDialog(comment_ : fullComment)
  {
    this.dialogService.open(CommentDetailComponent, {
      context: {comment : comment_}
    });
  }

}
