(function () {
  const deadline = new Date('2023-11-04T20:00:00Z');

  const daysElement = document.querySelector('.countdown-timer .cd-days');
  const hoursElement = document.querySelector('.countdown-timer .cd-hours');
  const minutesElement = document.querySelector('.countdown-timer .cd-minutes');
  const secondsElement = document.querySelector('.countdown-timer .cd-seconds');

  function pad(n) {
    const nStr = n.toString();
    return (nStr.length >= 2) ? nStr : `0${nStr}`;
  }

  function update() {
    const now = new Date();
    const diff = deadline.getTime() - now.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    daysElement.textContent = days;
    hoursElement.textContent = pad(hours);
    minutesElement.textContent = pad(minutes);
    secondsElement.textContent = pad(seconds);
  };

  update();
  setInterval(update, 1000);
})();
