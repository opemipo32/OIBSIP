// ============================================================
// Temperature Converter
// ============================================================

const ABSOLUTE_ZERO_C = -273.15;
const ABSOLUTE_ZERO_F = -459.67;
const ABSOLUTE_ZERO_K = 0;

const form = document.getElementById('converter-form');
const input = document.getElementById('temp-input');
const errorEl = document.getElementById('error-message');
const resultsEl = document.getElementById('results');
const resultC = document.getElementById('result-c');
const resultF = document.getElementById('result-f');
const resultK = document.getElementById('result-k');

const rowC = resultC.closest('.result-row');
const rowF = resultF.closest('.result-row');
const rowK = resultK.closest('.result-row');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  handleConvert();
});

// Clear error/invalid styling as soon as the person starts fixing their input
input.addEventListener('input', function () {
  if (input.classList.contains('invalid')) {
    input.classList.remove('invalid');
    hideError();
  }
});

function handleConvert() {
  const rawValue = input.value.trim();
  const selectedUnit = document.querySelector('input[name="unit"]:checked').value;

  // ---- Validation: reject empty or non-numeric input ----
  if (rawValue === '' || isNaN(Number(rawValue))) {
    showError('Please enter a valid number (e.g. 100 or -40).');
    input.classList.add('invalid');
    resetResults();
    input.focus();
    return;
  }

  const value = Number(rawValue);
  input.classList.remove('invalid');

  // ---- Convert whatever was entered into Celsius as a common base ----
  let celsius;
  if (selectedUnit === 'C') {
    celsius = value;
  } else if (selectedUnit === 'F') {
    celsius = (value - 32) * (5 / 9);
  } else {
    // Kelvin
    celsius = value - 273.15;
  }

  // ---- Edge case: absolute zero violation ----
  if (celsius < ABSOLUTE_ZERO_C - 1e-9) {
    showError(
      `That's below absolute zero (${ABSOLUTE_ZERO_C}\u00B0C / ${ABSOLUTE_ZERO_F}\u00B0F / ${ABSOLUTE_ZERO_K}K) \u2014 no such temperature exists.`
    );
    resetResults();
    return;
  }

  hideError();

  // ---- Compute all three units from the Celsius base ----
  const fahrenheit = celsius * (9 / 5) + 32;
  const kelvin = celsius + 273.15;

  resultC.textContent = formatTemp(celsius) + '\u00B0C';
  resultF.textContent = formatTemp(fahrenheit) + '\u00B0F';
  resultK.textContent = formatTemp(kelvin) + 'K';

  // Highlight whichever unit the person entered, for clarity
  [rowC, rowF, rowK].forEach((row) => row.classList.remove('highlight'));
  if (selectedUnit === 'C') rowC.classList.add('highlight');
  if (selectedUnit === 'F') rowF.classList.add('highlight');
  if (selectedUnit === 'K') rowK.classList.add('highlight');

  showResults();
}

function formatTemp(num) {
  // Round to 2 decimal places, but drop trailing zeros for cleaner display
  const rounded = Math.round(num * 100) / 100;
  return rounded.toString();
}

function showError(message) {
  errorEl.textContent = message;
  errorEl.hidden = false;
}

function hideError() {
  errorEl.hidden = true;
  errorEl.textContent = '';
}

function showResults() {
  resultsEl.classList.add('has-values');
}

function resetResults() {
  resultC.textContent = '—';
  resultF.textContent = '—';
  resultK.textContent = '—';
  [rowC, rowF, rowK].forEach((row) => row.classList.remove('highlight'));
  resultsEl.classList.remove('has-values');
}