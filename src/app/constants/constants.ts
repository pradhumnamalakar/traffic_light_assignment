// traffic-constants.ts

export const DEFAULT_GREEN_DURATION = 5000; // default 5 seconds
export const DEFAULT_YELLOW_DURATION = 1000; // default 1 second

export const INITIAL_COLORS: Record<string, string> = {
  north: 'green',
  east: 'red',
  south: 'red',
  west: 'red',
};

export const DIRECTION_SEQUENCE: Record<string, string> = {
  north: 'east',
  east: 'south',
  south: 'west',
  west: 'north',
};
