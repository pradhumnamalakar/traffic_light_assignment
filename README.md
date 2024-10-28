# TrafficLightSimulator

A web-based simulation for a traffic light system at a four-road junction, built with Angular. This application visually represents the traffic light sequences, including green, yellow, and red lights with customizable durations for the green light. It simulates traffic flow by controlling the light changes in each direction in a cyclic manner.

## Features

- **Configurable Light Durations**: The green light duration can be adjusted by the user, while the yellow and red light durations are automatically set based on traffic requirements.
- **Cyclic Traffic Light Control**: Manages traffic lights in a clockwise direction across four junctions (North, East, South, and West).
- **Visual Representation**: Each direction’s signal is displayed as a colored square (`div`) in the UI, which changes colors according to the light sequence.
- **Automatic Reset on Update**: Updating the green light duration resets the cycle, starting the traffic flow from the beginning.

## Technologies Used

- **Angular**: Framework for building the application.
- **TypeScript**: Used to write type-safe code, helping to avoid common runtime errors.
- **HTML/CSS**: For the layout and styling of the traffic light interface.

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [Angular CLI](https://angular.io/cli)

### Installation


1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/traffic-light-simulator.git
   cd traffic-light-simulator
   npm install

    
### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.