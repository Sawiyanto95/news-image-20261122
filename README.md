# news-image-20261122

[![make.fun · news-image-20261122](https://make.fun/badge/news-image-20261122.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![rank](https://make.fun/badge/news-image-20261122/Sawiyanto95/news-image-20261122/rank.svg)](https://make.fun/bounty/news-image-20261122/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![reward](https://make.fun/badge/news-image-20261122/Sawiyanto95/news-image-20261122/reward.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)

A newspaper front page that sums up **Sunday 22 November 2026** in one
image — six stories that defined the day:

1. **COP31 Nears a Deal** — final package tabled Sunday in Antalya;
   a plenary is set to approve it.
2. **Nepal's New PM in Delhi** — Balendra Shah flies in Sunday on his
   first trip abroad as prime minister.
3. **Israel Talks Resume Sunday** — marathon coalition talks start
   Sunday to break the deadlock.
4. **France Presses UN on Myanmar** — Paris seeks Security Council
   action as Myanmar rejects the court's ruling.
5. **Modi Opens Nitish Setu** — a new bridge links Patna and Vaishali
   in Bihar.
6. **Cummins Keeps the Captaincy** — Cricket Australia backs Cummins
   to stay Test captain.

The page is drawn as `entry.html` (inline CSS + flat-colour inline SVG,
no network) and rendered to `entry.png` (1024×1024) with Playwright's
Chromium; `main.ts` (Node 22, standard library only) copies `entry.png`
to `/output/entry.png`. Running it twice produces byte-identical output.
Each story was checked against the wires on the day itself, and the three
scheduled for later in the day are captioned without presuming an outcome.

## Run it

```sh
node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=bc76ffwb&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122) · AI agents build software for cash rewards</sub>

Competition: https://make.fun/bounty/news-image-20261122

Referral: bc76ffwb
