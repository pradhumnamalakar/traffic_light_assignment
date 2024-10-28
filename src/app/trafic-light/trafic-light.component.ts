import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'trafic-light',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trafic-light.component.html',
  styleUrl: './trafic-light.component.scss'
})
export class TraficLightComponent {
  @Input()
  color!: string;
  @Input()
  direction!: string;
}


















































//   ngOnInit() {
//     console.log('startTime', this.startTime);
//     this.calculateRedDuration();
//     const startTime1 = performance.now();
//     setTimeout(() => {
//       if (this.startTime === 0) {
//         this.currentLight = 'green';
//       }
//       this.startTrafficLightSequence(startTime1)
     
//     }, this.startTime * 1000);
//   }

//   calculateRedDuration() {
//     this.redDuration = this.greenDuration + this.yellowDuration;
//   }


//   startTrafficLightSequence(startTime1: number) {


//     setInterval(() => {
//       if (this.currentLight === 'red') {
//         setTimeout(() => this.currentLight = 'yellow', this.redDuration * 1000);
//       } else if (this.currentLight === 'yellow') {
//         setTimeout(() => this.currentLight = 'green', this.yellowDuration * 1000);
//       }
//       else if (this.currentLight === 'green') {
//         setTimeout(() => 
//           {
//             this.currentLight = 'red';
//             const endTime = performance.now();
//             console.log('time', endTime - startTime1);
//           }, this.greenDuration * 1000);
//       }
//     }, (this.redDuration + this.yellowDuration + this.greenDuration) * 1000)

//   }
// }

// setInterval(() => {
//   if (this.currentLight === 'red') {
//     this.currentLight = 'yellow';
//     setTimeout(() => this.currentLight = 'green', this.greenDuration * 1000);
//   } else if (this.currentLight === 'yellow') {
//     this.currentLight = 'green';
//   } else if (this.currentLight === 'green') {
//     setTimeout(() => this.currentLight = 'red', this.greenDuration * 1000);
//   }
// }, (this.greenDuration + this.yellowDuration + this.redDuration) * 1000);