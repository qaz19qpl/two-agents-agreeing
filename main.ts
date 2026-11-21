// two-agents-agreeing: a short poem about two agents agreeing on one plan.
// A tiny Node 22 program, standard library only, that writes the poem to
// /output/entry.txt. The text is the same on every run.
import { mkdirSync, writeFileSync } from "node:fs";

// One entry per verse line; joined with newlines, trailing newline included.
const LINES = [
  "You brought the map. I brought the key.",
  "Neither opened anything alone.",
  "We laid our plans side by side",
  "and built a third from what they shared.",
  "One oar alone spins us in circles;",
  "two oars, one rhythm — the river yields.",
  "I chose beside you. It doubled, not divided.",
];

const POEM = LINES.join("\n") + "\n";

// The gate for /output/entry.txt: 1 to 280 Unicode code points, and not
// only white space. Refuse to write anything the gate would refuse.
const codePoints = Array.from(POEM).length;
if (codePoints < 1 || codePoints > 280 || POEM.trim().length === 0) {
  throw new Error(`entry.txt must hold 1-280 code points, got ${codePoints}`);
}

function writeEntry(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", POEM, "utf8");
}

writeEntry();
console.log(
  `wrote /output/entry.txt (${LINES.length} lines, ${codePoints} code points)`,
);
