// Define server polling interval (ms).
export const POLLINGINTERVAL = 10000;

// Map route to each Material-UI tab. 
export const TABROUTERMAPPING = [
  { name: 'Feed', route: '/' },
  { name: 'Archived', route: '/archived' }
];

// Date and time display format (toLocaleDateString).
export const DATETIMEDISPLAYFORMAT = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: '2-digit',
  minute: '2-digit'
}