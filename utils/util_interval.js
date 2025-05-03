export function getInterval(allIntervals, driverNumber) {
  const entry = allIntervals.find((d) => d.driver_number === driverNumber);

  if (!entry) {
    return 'N/A';
  }

  if ((entry.interval === null || entry.interval === 0) && entry.gap_to_leader === 0) {
    return 'Leader';
  }

  if (typeof entry.interval === 'number') {
    return entry.interval.toFixed(3);
  }

  return 'N/A';
}

export function formatInterval(interval, gapToLeader) {
  if (interval === 0 && (gapToLeader === 0 || gapToLeader === null)) {
    return 'Leader';
  }
  if (typeof interval === 'number' && interval > 0) {
    return interval.toFixed(3);
  }
  return 'N/A';
}

export function formatGap(gapToLeader, interval) {
  if (interval === 0 && (gapToLeader === 0 || gapToLeader === null)) {
    return 'Leader';
  }
  if (gapToLeader === null && typeof interval === 'number' && interval > 0) {
    return 'N/A';
  }
  if (typeof gapToLeader === 'number') {
    return gapToLeader.toFixed(3);
  }
  return 'N/A';
}
