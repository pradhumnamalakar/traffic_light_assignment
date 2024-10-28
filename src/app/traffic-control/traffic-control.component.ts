import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TraficLightComponent } from '../trafic-light/trafic-light.component';
import { DEFAULT_GREEN_DURATION, DEFAULT_YELLOW_DURATION, DIRECTION_SEQUENCE, INITIAL_COLORS } from '../constants/constants';

@Component({
  selector: 'app-traffic-control',
  standalone: true,
  providers: [],
  imports: [RouterOutlet, CommonModule, TraficLightComponent, FormsModule],
  templateUrl: './traffic-control.component.html',
  styleUrl: './traffic-control.component.scss'
})
export class TrafficControlComponent {
  greenDuration = DEFAULT_GREEN_DURATION; // 5 seconds
  yellowDuration = DEFAULT_YELLOW_DURATION; // 1 second
  colors: Record<string, string> = { ...INITIAL_COLORS };
  greenDurationInput!: number;

  private activeDirection = 'north'; // Starts with North as green
  private trafficCycleTimeout!: any;

  ngOnInit() {
    this.updateTrafficLights();
  }

  /**
   * @description Function to update the green signal duration
   */
  updateGreenDuration() {
    this.greenDuration = this.greenDurationInput ? this.greenDurationInput * 1000 : DEFAULT_GREEN_DURATION;
    this.resetTrafficCycle();
  }

  /**
   * @description Function to update the traffic lights
   */
  updateTrafficLights() {
    const nextDirection = DIRECTION_SEQUENCE[this.activeDirection];

    if (this.colors[this.activeDirection] === 'red') {
      this.colors[this.activeDirection] = 'yellow';
      this.trafficCycleTimeout = setTimeout(() => {
        this.colors[this.activeDirection] = 'green';
      }, this.yellowDuration);

      this.setGreenToRed(nextDirection, this.greenDuration, this.yellowDuration);
    } else {
      //for the first signal starting from green
      this.setGreenToRed(nextDirection, this.greenDuration);
    }
  }

  /**
   * @description Function to set the green to red transition
   */
  private setGreenToRed(nextDirection: string, greenDuration: number, yellowDuration = 0) {
    this.trafficCycleTimeout = setTimeout(() => {
      this.colors[this.activeDirection] = 'red';
      this.activeDirection = nextDirection;
      this.updateTrafficLights();
    }, greenDuration + yellowDuration);
  }

  /**
   * @description Function to reset the traffic lights
   */
  private resetTrafficCycle() {
    this.clearCycleTimeout();
    this.colors = { ...INITIAL_COLORS };
    this.activeDirection = 'north';
    this.updateTrafficLights();
  }

  /**
   * @description Function to clear the traffic settimeout subscription
   */
  private clearCycleTimeout() {
    if (this.trafficCycleTimeout) {
      clearTimeout(this.trafficCycleTimeout);
    }
  }

  /**
   * @description called during unmount of component
   */
  ngOnDestroy() {
    if (this.trafficCycleTimeout) {
      clearTimeout(this.trafficCycleTimeout);
    }
  }
}