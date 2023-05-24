#!/usr/bin/env node
const path = require("path");
const sh = require("shelljs");

let stickersPath = "./genshin-stickers.json";
if (typeof process.argv[2] === "string" && process.argv[2].endsWith(".json")) {
  stickersPath = process.argv[2];
  if (!path.isAbsolute(stickersPath)) {
    stickersPath = path.resolve(process.cwd(), stickersPath);
  }
}

const stickers = require(stickersPath);

sh.mkdir("-p", "stickers");

const prefixDigits = String(stickers.length).length;

let i = -1;
for (const { href, name } of stickers) {
  i++;
  const filename = name.replace(/[^A-Za-z0-9 ]/g, "");
  const prefix = String(i).padStart(prefixDigits, "0");

  sh.exec(`curl '${href}' -o './stickers/${prefix} ${filename}.png'`);
}
