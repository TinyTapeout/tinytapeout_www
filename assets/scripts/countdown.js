// SPDX-License-Identifier: Apache-2.0
// Copyright 2025 Tiny Tapeout Ltd.
// Author: Uri Shaked

(function () {
  const supabaseProject = 'tinytapeout';
  const supabaseKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFvdXZqeXhpaHB1ZGhibWJ1ZXBrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg2NTIxODYsImV4cCI6MTk5NDIyODE4Nn0.-A6x_iXHNEq6VOC2KEE1zDzcTT8PXnZNnu6LhzJqnvo';
  const databaseEndpoint = `https://${supabaseProject}.supabase.co/rest/v1/`;

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
      const queryUrl = new URL('shuttles', databaseEndpoint);
      queryUrl.searchParams.set(
        'select',
        'tiles_total,tiles_used,subsidized_pcbs_total,subsidized_pcbs_sold,deadline,pcbs_sold',
      );
      queryUrl.searchParams.set('slug', `eq.${shuttleSlug}`);
      queryUrl.searchParams.set('apikey', supabaseKey);
      const res = await fetch(queryUrl);
      const resJson = await res.json();
      const shuttle = resJson[0];
      deadline = new Date(shuttle.deadline);
      const tilesPercent = (shuttle.tiles_used / shuttle.tiles_total) * 100;
      let pcbsSold = shuttle.pcbs_sold;
      if (shuttle.subsidized_pcbs_total) {
        pcbsTotal = shuttle.subsidized_pcbs_total;
        pcbsSold = shuttle.subsidized_pcbs_sold;
      }
      const pcbsPercent = (pcbsSold / pcbsTotal) * 100;
      tileStats.textContent = `${Math.round(100 - tilesPercent)}% left`;
      pcbStatsCounter.textContent = `${Math.round(100 - pcbsPercent)}% left`;
      tileProgress.style.width = `${tilesPercent}%`;
      pcbProgress.style.width = `${pcbsPercent}%`;
      if (!pcbsTotal) {
        pcbStats.style.display = 'none';
      }
      return resJson;
    }

    /** @type {WebSocket | null} */
    let ws = null;

    function autoUpdateStats() {
      const wsUrl = new URL('/realtime/v1/websocket', databaseEndpoint);
      wsUrl.protocol = 'wss:';
      wsUrl.searchParams.set('apikey', supabaseKey);
      wsUrl.searchParams.set('vsn', '1.0.0');
      let heartbeatTimer = null;
      ws = new WebSocket(wsUrl);
      ws.onopen = () => {
        ws.send(
          JSON.stringify({
            topic: 'realtime:schema-db-changes',
            event: 'phx_join',
            payload: {
              config: {
                postgres_changes: [
                  {
                    event: 'UPDATE',
                    schema: 'public',
                    table: 'shuttles',
                    filter: `slug=eq.${shuttleSlug}`,
                  },
                ],
              },
            },
            ref: '1',
          }),
        );
        heartbeatTimer = setInterval(() => {
          ws.send(
            JSON.stringify({
              event: 'heartbeat',
              topic: 'phoenix',
              payload: {},
              ref: '1',
            }),
          );
        }, 30000);
      };
      ws.onmessage = async (event) => {
        const payload = JSON.parse(event.data);
        if (payload.event === 'postgres_changes') {
          void fetchStats();
        }
      };
      ws.onclose = () => {
        if (heartbeatTimer) {
          clearInterval(heartbeatTimer);
          heartbeatTimer = null;
        }
        ws = null;
      };
    }

    fetchStats();
    autoUpdateStats();

    // disconnect socket on visibility change:
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        if (ws) {
          ws.close();
          ws = null;
        }
      } else {
        if (!ws) {
          fetchStats();
          autoUpdateStats();
        }
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
