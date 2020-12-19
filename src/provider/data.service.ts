import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as querystring from 'querystring';
import { environment } from '../environments/environment';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  filters = {};
  private subject = new Subject<any>();

  constructor(private http: HttpClient) {
    this.filters = {
      limit: 150,
      launch_year: undefined,
      launch_success: 'true',
      land_success: 'true',
    };
  }

  getData(url): any {
    this.http.get(url).subscribe(data => {
      this.subject.next(data);
    }, err => {
        console.error(err);
    });
  }

  getUpdatedUrl(): string {
    const updatedUrl = `${environment.API_BASE_URL}${querystring.stringify({ ...this.filters })}`;
    return updatedUrl;
  }

  updateFilter(name, value): any {
    this.filters[name] = value;
    this.getData(this.getUpdatedUrl());
  }

  onLaunches(): Observable<any> {
    return this.subject.asObservable();
  }

  getAllLaunches(): any {
    this.getData(environment.API_BASE_URL);
  }

  getAppliedFilters(): any {
    return this.filters;
  }

}
