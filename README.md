# F1 Live Pitwall

Real‑time Formula 1 telemetry, intervals, positions, stints and team radio in a lightweight WebSocket‑powered dashboard.

Live Demo: [https://f1-live-pitwall.onrender.com](https://f1-live-pitwall.onrender.com)

## Overview

F1 Live Pitwall aggregates live racing data from the OpenF1 API and broadcasts it via a WebSocket server. A Next.js frontend consumes that stream to render up‑to‑the‑second intervals, positions, stint changes, and team radio audio feeds.

## Features

- Live WebSocket feed of driver intervals, positions, stints and team radio
- Grouping of cars by interval gaps (≤ 3s) for quick pitwall insight
- Historical stint tracking with compound and tyre‑age updates