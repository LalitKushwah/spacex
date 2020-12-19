import { ComponentFixture, inject, TestBed } from '@angular/core/testing';

import { LaunchesComponent } from './launches.component';
import { DataService } from '../../provider/data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LaunchesComponent', () => {
  let component: LaunchesComponent;
  let fixture: ComponentFixture<LaunchesComponent>;
  let dataService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchesComponent ],
      imports: [HttpClientTestingModule],
      providers: [DataService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchesComponent);
    dataService = TestBed.inject(DataService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', inject([DataService], (service: DataService) => {
    service.subject.next();
    expect(component).toBeTruthy();
    expect(component.isLoading).toBeFalsy();
  }));

  it('should create - 2', inject([DataService], (service: DataService) => {
    service.subject.next(null);
  }));
});
