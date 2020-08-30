import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesGraphComponent } from './sales-graph.component';
import { ChartModule } from 'primeng/chart';

describe('SalesGraphComponent', () => {
  let component: SalesGraphComponent;
  let fixture: ComponentFixture<SalesGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartModule],
      declarations: [ SalesGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
