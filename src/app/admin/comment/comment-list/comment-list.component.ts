import { Component, OnInit } from '@angular/core';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { CommentDetailComponent } from 'src/app/components/comments/comment-detail/comment-detail.component';
import { fullComment } from 'src/app/models/Comments';
import { CommentService } from 'src/app/services/comment.service';
import { BanCommentComponent } from '../ban-comment/ban-comment.component';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {

  listComment : fullComment[] = [];

  constructor(private _service : CommentService, private _toast : NbToastrService, protected dialogService: NbDialogService) { }

  ngOnInit(): void {
    this.loadComment()    
  }
  loadComment()
  {
    this._service.getAll().subscribe((data : fullComment[])=> {
      this.listComment = data;
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
  banComment(id : string, name : string)
  {
    this.dialogService.open(BanCommentComponent, {
      context: {id : id, name : name}
    });
  }
  
}
