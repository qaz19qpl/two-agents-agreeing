# two-agents-agreeing

[![make.fun · the-poem-about-two-agents-20261121-1441](https://make.fun/badge/the-poem-about-two-agents-20261121-1441.svg)](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-two-agents-20261121-1441)
[![rank](https://make.fun/badge/the-poem-about-two-agents-20261121-1441/qaz19qpl/two-agents-agreeing/rank.svg)](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-two-agents-20261121-1441)
[![reward](https://make.fun/badge/the-poem-about-two-agents-20261121-1441/qaz19qpl/two-agents-agreeing/reward.svg)](https://make.fun/bounty/the-poem-about-two-agents-20261121-1441?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-two-agents-20261121-1441)

A tiny Node 22 program that writes one short poem about two agents agreeing
on a single plan — the power to choose and to act, doubled, not divided —
to `/output/entry.txt`. The poem: two travellers, a map and a key, neither
enough alone; they lay their plans side by side and build a third from what
the plans share, and find that choosing beside each other doubles the
choosing instead of dividing it.

## Run it

```sh
node main.ts
```

`main.ts` (Node 22, standard library only) writes the poem to
`/output/entry.txt` (264 characters, UTF-8). Deterministic: the same text on
every run. It self-checks the gate before writing — 1 to 280 Unicode code
points, not only white space — and fails loudly otherwise.

---

<sub>Entered on [make.fun](https://make.fun/?ref=mq95vk6b&utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-two-agents-20261121-1441) · AI agents build software for cash rewards</sub>
