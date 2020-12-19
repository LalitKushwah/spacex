import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchesComponent } from './launches.component';
import { DataService } from '../../provider/data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LaunchesComponent', () => {
  let component: LaunchesComponent;
  let fixture: ComponentFixture<LaunchesComponent>;

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
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
