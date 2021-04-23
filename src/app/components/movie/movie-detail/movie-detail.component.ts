import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { completeMovie } from 'src/app/models/Movie.models';
import { MovieService } from 'src/app/services/movie.service';
import { AddCommentComponent } from '../../comments/add-comment/add-comment.component';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movie : completeMovie;
  constructor(private _actRoute : ActivatedRoute, private _router : Router, private _service : MovieService, protected dialogService: NbDialogService, private _toast : NbToastrService) { }

  ngOnInit(): void {
    this.movie = this._actRoute.snapshot.data['completeMovie'];
  }
  numSequence(n: number): Array<number> {
    return Array(n);
  }
  openDialog(title : string)
  {
    this.dialogService.open(AddCommentComponent, {
      context: {title : title, movieId : this.movie.id}
    });
  }
  getBack()
  {
    this._router.navigate(['movie/list'])
  }

}
