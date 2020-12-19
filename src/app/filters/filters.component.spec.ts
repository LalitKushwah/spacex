import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersComponent } from './filters.component';
import { DataService } from '../../provider/data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FiltersComponent', () => {
  let component: FiltersComponent;
  let fixture: ComponentFixture<FiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltersComponent ],
      imports: [HttpClientTestingModule],
      providers: [DataService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test updatedApiFilter with launch_success is set to true', () => {
    const value = { target: { value: 'true' } };
    const result = component.updateApiFilters('launch_success', value);
    expect(result).toBeUndefined();
  });
  it('should test updatedApiFilter with launch_success is set to false', () => {
    const value = { target: { value: 'false' } };
    component.updateApiFilters('launch_success', value);
    expect(component.filters.launch_success).toBe('false');
  });
});
