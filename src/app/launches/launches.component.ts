import { Component, Input, OnInit } from '@angular/core';
// import * as querystring from 'querystring';
import { DataService } from '../../provider/data.service';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.scss']
})
export class LaunchesComponent implements OnInit {
  isLoading = true;
  launches = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.onLaunches().subscribe(data => {
      this.launches = data;
      this.isLoading = false;
    }, err => {
      console.error(err);
      this.isLoading = false;
    });
    this.fetchData();
  }

  fetchData(): any {
    this.dataService.getAllLaunches();
  }

}
