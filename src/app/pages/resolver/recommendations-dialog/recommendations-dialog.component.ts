import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-recommendations-dialog',
  templateUrl: './recommendations-dialog.component.html',
  styleUrls: ['./recommendations-dialog.component.scss']
})
export class RecommendationsDialogComponent implements OnInit {
  numSelected = 0;

  constructor(
    public dialogRef: MatDialogRef<RecommendationsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Array<any>
  ) { }

  ngOnInit() {
    console.log(this.data);
  }

  selectRecommendation(item: any, recommendation: string): void {
    item.selectedRecommendation = recommendation;
    this.numSelected++;
  }

  unselectRecommendation(item: any): void {
    item.selectRecommendation = null;
    this.numSelected--;
  }

  closeAndResolve(): void {
    const recommendations = this.data.map(item => {
      if (item.selectRecommendation) {
        return item;
      }
    });
    this.dialogRef.close(recommendations);
  }

  dismiss(): void {
    this.dialogRef.close();
  }
}
