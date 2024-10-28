import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrafficControlComponent } from './traffic-control.component';

describe('TrafficControlComponent', () => {
  let component: TrafficControlComponent;
  let fixture: ComponentFixture<TrafficControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrafficControlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrafficControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
