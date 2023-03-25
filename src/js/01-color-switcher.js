const controls = { 
  start: document.querySelector('[data-start]'), 
  stop: document.querySelector('[data-stop]'), 
}; 
 
let colorSwitchIntervalId = null; 
let currentColor = null; 
 
setControlsState(false); 
 
controls.start.addEventListener('click', startColorSwitchInterval); 
controls.stop.addEventListener('click', stopColorSwitchInterval); 
 
function startColorSwitchInterval() { 
  setControlsState(true); 
 
  colorSwitchIntervalId = setInterval(() => { 
    currentColor = getRandomHexColor(); 
    setBodyBackgroundColor(currentColor); 
  }, 1000); 
} 
 
function stopColorSwitchInterval() { 
  setControlsState(false); 
 
  clearInterval(colorSwitchIntervalId); 
  if (currentColor) setBodyBackgroundColor(currentColor); 
} 
 
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
 
function setBodyBackgroundColor(color) { 
  document.body.style.backgroundColor = color; 
} 
 
function setControlsState(state) { 
  controls.start.disabled = state; 
  controls.stop.disabled = !state; 
} 
 
export { controls, startColorSwitchInterval, stopColorSwitchInterval };