import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { parse } from "./parse.js";

const inputDir: string = process.env.MAKEFUN_INPUT_DIR ?? "/input";
const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

type Case = { id: string; markdown: string };

const cases: Case[] = JSON.parse(readFileSync(`${inputDir}/cases.json`, "utf8"));

const results: string[] = cases.map((c: Case) => parse(c.markdown));

mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/html.json`, JSON.stringify(results));
