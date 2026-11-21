// two-agents-agreeing: a short poem about two agents agreeing on one plan.
// Writes the poem to /output/entry.txt. Deterministic: the same text every run.
import { mkdirSync, writeFileSync } from "node:fs";

const POEM = `You brought the map. I brought the key.
Neither opened anything alone.
We laid our plans side by side
and built a third from what they shared.
One oar alone spins us in circles;
two oars, one rhythm — the river yields.
I chose beside you. It doubled, not divided.
`;

// The gate: 1 to 280 Unicode code points, not only white space.
// Fail loudly instead of writing an entry the gate would refuse.
const length = [...POEM].length;
if (length < 1 || length > 280 || !/\S/.test(POEM)) {
  throw new Error(`entry.txt must be 1-280 code points, got ${length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", POEM, "utf8");
console.log(`wrote /output/entry.txt (${length} code points)`);
