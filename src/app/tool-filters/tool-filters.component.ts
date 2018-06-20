import {Component, Input, OnInit} from '@angular/core';
import {SelectionModel} from "@angular/cdk/collections";
import {Subject} from "rxjs/index";
import {takeUntil} from "rxjs/internal/operators";
import {DataLoaderService} from "../services/data-loader.service";

@Component({
  selector: 'app-tool-filters',
  templateUrl: './tool-filters.component.html',
  styleUrls: ['./tool-filters.component.css']
})
export class ToolFiltersComponent implements OnInit {
  @Input() filters: string[];
  @Input() property: string;
  filterSelection = new SelectionModel<string>(true, []);
    private ngUnsubscribe: Subject<any> = new Subject();
  constructor(private dataLoaderService: DataLoaderService) { }

  ngOnInit() {

      this.filterSelection.onChange
          .pipe(takeUntil(this.ngUnsubscribe))
          .subscribe(change => {
              console.log(change);
            //  console.log(this.filterSelection.selected);
              this.dataLoaderService.filterData({property: this.property, filters: this.filterSelection.selected})
          });
  }

}
