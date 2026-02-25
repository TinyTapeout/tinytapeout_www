// SPDX-License-Identifier: Apache-2.0
// Copyright 2025 Tiny Tapeout Ltd.
// Author: Uri Shaked

(function () {
  /** @param {number} n The number to pad. */
  function pad(n) {
    const nStr = n.toString();
    return nStr.length >= 2 ? nStr : `0${nStr}`;
  }

  /** @param {Element} countdownWrapper The countdown wrapper element. */
  function setupCountdown(countdownWrapper) {
    const shuttleSlug = countdownWrapper.dataset.shuttle;
    let deadline = new Date(countdownWrapper.dataset.deadline);
    let pcbsTotal = countdownWrapper.dataset.pcbs ? parseInt(countdownWrapper.dataset.pcbs) : null;

    const timerContainerElement = countdownWrapper.querySelector(
      '.countdown-timer .countdown-timer-tiles',
    );
    const daysElement = countdownWrapper.querySelector('.countdown-timer .cd-days');
    const hoursElement = countdownWrapper.querySelector('.countdown-timer .cd-hours');
    const minutesElement = countdownWrapper.querySelector('.countdown-timer .cd-minutes');
    const secondsElement = countdownWrapper.querySelector('.countdown-timer .cd-seconds');

    const tileStats = countdownWrapper.querySelector('.tile-stats .counter');
    const tileProgress = countdownWrapper.querySelector('.tile-stats .progress-bar-inner');
    const pcbStats = countdownWrapper.querySelector('.pcb-stats');
    const pcbStatsCounter = countdownWrapper.querySelector('.pcb-stats .counter');
    const pcbProgress = countdownWrapper.querySelector('.pcb-stats .progress-bar-inner');

    const shuttleStats = countdownWrapper.querySelector('.shuttle-stats');
    shuttleStats.href = `https://app.tinytapeout.com/shuttles/${shuttleSlug}`;

    async function fetchStats() {
      const res = await fetch(`https://app.tinytapeout.com/api/shuttles/${shuttleSlug}`);
      const shuttle = await res.json();
      deadline = new Date(shuttle.deadline);
      const tilesPercent =
        ((shuttle.tiles.total - shuttle.tiles.available) / shuttle.tiles.total) * 100;
      if (shuttle.pcbs.total) {
        pcbsTotal = shuttle.pcbs.total;
      }
      const pcbsPercent = pcbsTotal ? ((pcbsTotal - shuttle.pcbs.available) / pcbsTotal) * 100 : 0;
      tileStats.textContent = `${Math.round(100 - tilesPercent)}% left`;
      pcbStatsCounter.textContent = `${Math.round(100 - pcbsPercent)}% left`;
      tileProgress.style.width = `${tilesPercent}%`;
      pcbProgress.style.width = `${pcbsPercent}%`;
      if (!pcbsTotal) {
        pcbStats.style.display = 'none';
      }
    }

    let pollTimer = null;

    function startPolling() {
      if (!pollTimer) {
        pollTimer = setInterval(fetchStats, 30000);
      }
    }

    function stopPolling() {
      if (pollTimer) {
        clearInterval(pollTimer);
        pollTimer = null;
      }
    }

    fetchStats();
    startPolling();

    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        stopPolling();
      } else {
        fetchStats();
        startPolling();
      }
    });

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
      timerContainerElement.setAttribute(
        'title',
        deadline.toLocaleString(undefined, { timeZoneName: 'short' }),
      );
    }

    update();
    setInterval(update, 1000);
  }

  document.addEventListener('DOMContentLoaded', function () {
    for (const countdownWrapper of document.querySelectorAll('.countdown-wrapper')) {
      setupCountdown(countdownWrapper);
    }
  });
})();
