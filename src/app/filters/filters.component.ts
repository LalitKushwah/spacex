import { Component, OnInit } from '@angular/core';
import { DataService } from '../../provider/data.service';


@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  LAUNCH_YEARS = new Array(16).fill(0).map((_, index) => 2006 + index);

  filters: any =  {};

  constructor(private dataService: DataService) {
    this.filters = this.dataService.getAppliedFilters();
   }

  ngOnInit(): void {
    this.filters = this.dataService.getAppliedFilters();
  }

  updateApiFilters(type, event): any {
    const value = event.target.value;
    console.log(this.filters);
    if (this.filters[type] === value) {
      return;
    }
    this.dataService.updateFilter(type, value);
    this.filters = this.dataService.getAppliedFilters();
  }

  transformToString(num): string {
    return num.toString();
  }

}
