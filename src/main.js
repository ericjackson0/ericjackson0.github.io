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
const letterO = document.querySelector('.letterO');

const wrapper = document.querySelector('.wrapper');
const themeButtonGrayscale = document.getElementById('theme-grayscale');
const themeButtonRainbow = document.getElementById('theme-rainbow');

// Event listeners
letterO.addEventListener('click', () => {
  brandText.style.fontFamily = fontsFamilies[nextFont];
  nextFont = nextFont + 1 === fontsFamilies.length ? 0 : nextFont + 1;
});

brandText.addEventListener('mouseover', () => {
  letterO.innerHTML = '😵‍💫';
});
brandText.addEventListener('mouseout', () => {
  letterO.innerHTML = 'o';
});

// // Functions
function setGrayscaleTheme() {
  wrapper.className = 'wrapper wrapper--grayscale';
}
function setRainbowTheme() {
  wrapper.className = 'wrapper wrapper--rainbow';
}
