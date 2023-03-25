import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
export const countdown = {
  daysElement: document.querySelector('[data-days]'),
  hoursElement: document.querySelector('[data-hours]'),
  minutesElement: document.querySelector('[data-minutes]'),
  secondsElement: document.querySelector('[data-seconds]'),
  startButton: document.querySelector('[data-start]'),
  dateTimePickerElement: document.querySelector('#datetime-picker'),
  countdownInterval: null,
  startDate: null,
};
export const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    handleDateSelection(selectedDate);
  },
};
countdown.startButton.disabled = true;
flatpickr(countdown.dateTimePickerElement, options);
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}
function updateCountdown(remainingMs) {
  const { days, hours, minutes, seconds } = convertMs(remainingMs);
  countdown.secondsElement.textContent = seconds.toString().padStart(2, '0');
  countdown.minutesElement.textContent = minutes.toString().padStart(2, '0');
  countdown.hoursElement.textContent = hours.toString().padStart(2, '0');
  countdown.daysElement.textContent = days.toString().padStart(2, '0');
}
function runCountdown(selectedDate) {
  const timeUntilSelectedDate = selectedDate.getTime() - countdown.startDate;
  countdown.countdownInterval = setInterval(() => {
    const timeLeft = timeUntilSelectedDate - (Date.now() - countdown.startDate);
    if (timeLeft <= 0) {
      clearInterval(countdown.countdownInterval);
      updateCountdown(0);
      return;
    }
    updateCountdown(timeLeft);
  }, 1000);
}

function handleDateSelection(selectedDate) {
  const isOnPast = selectedDate < options.defaultDate;
  if (isOnPast) {
    Notiflix.Report.warning(
      'Попередження',
      'Оберіть дату з майбутнього',
      'Добре'
    );
    countdown.startButton.disabled = true;
    return;
  }
  countdown.startButton.disabled = false;
  countdown.startButton.addEventListener('click', () => {
    countdown.startDate = Date.now();
    countdown.startButton.disabled = true;
    runCountdown(selectedDate);
  });
}
countdown.dateTimePickerElement.addEventListener('change', e => {
  const selectedDate = e.target._flatpickr.selectedDates[0];
  handleDateSelection(selectedDate);
});
