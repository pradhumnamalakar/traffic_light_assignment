import { Component } from '@angular/core';
import { TrafficControlComponent } from './traffic-control/traffic-control.component';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [],
  imports: [TrafficControlComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}