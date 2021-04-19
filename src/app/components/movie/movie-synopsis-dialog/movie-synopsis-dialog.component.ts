import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-movie-synopsis-dialog',
  templateUrl: './movie-synopsis-dialog.component.html',
  styleUrls: ['./movie-synopsis-dialog.component.scss']
})
export class MovieSynopsisDialogComponent implements OnInit {
  title : string
  content : string
  constructor(protected dialogRef : NbDialogRef<string>) { }
  synopsis : string;
  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

}
