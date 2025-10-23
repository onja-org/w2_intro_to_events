// 📝 Solutions for Intro to JavaScript Events

// --- 1️⃣ Click Event ---
const clickBtn = document.getElementById('click-btn');
const clickOutput = document.getElementById('click-output');

clickBtn.addEventListener('click', () => {
  clickOutput.textContent = 'Button clicked! 🎉';
});

// --- 2️⃣ Input Event ---
const textInput = document.getElementById('text-input');
const inputOutput = document.getElementById('input-output');

textInput.addEventListener('input', () => {
  inputOutput.textContent = textInput.value;
});

// --- 3️⃣ Hover Event ---
const hoverBox = document.getElementById('hover-box');

hoverBox.addEventListener('mouseover', () => {
  hoverBox.style.backgroundColor = 'lightgreen';
});

hoverBox.addEventListener('mouseout', () => {
  hoverBox.style.backgroundColor = 'lightblue';
});