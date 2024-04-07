// Data
let nextFont = 0;
const fontsFamilies = [
  'serif',
  'sans-serif',
  'monospace',
  'cursive',
  'fantasy',
];

// DOM elements
const brandText = document.getElementById('brand');

// Event listeners
brandText.addEventListener('click', () => {
  brandText.style.fontFamily = fontsFamilies[nextFont];
  nextFont = nextFont + 1 === fontsFamilies.length ? 0 : nextFont + 1;
});