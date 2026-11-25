// One Line, One Laugh: Roast Your Fridge — a single roast line for the house judge.
// The fridge's ice maker is the star of this roast: loud, proud, and paid in a single cube of ice.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const roast =
  "My fridge's ice maker grinds like it's chewing gravel, then proudly delivers a single cube — a salary paid in ice.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), roast, "utf8");
console.log(`Wrote ${roast.length} chars to entry.txt`);
