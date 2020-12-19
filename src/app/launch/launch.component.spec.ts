import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketLaunchComponent } from './launch.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RocketLaunchComponent', () => {
  let component: RocketLaunchComponent;
  let fixture: ComponentFixture<RocketLaunchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RocketLaunchComponent ],
      imports: [HttpClientTestingModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketLaunchComponent);
    component = fixture.componentInstance;
    component.details = { links: { mission_patch_small: '' } };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
