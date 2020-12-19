import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
// import * as querystring from 'querystring';
import { DataService } from '../../provider/data.service';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.scss']
})
export class LaunchesComponent implements OnInit, OnDestroy {
  isLoading = true;
  launches = [];
  dataSubscription: Subscription;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataSubscription = this.dataService.onLaunches().subscribe(data => {
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

  ngOnDestroy(): any {
    this.dataSubscription.unsubscribe();
  }

}
