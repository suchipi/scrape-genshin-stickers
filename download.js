#!/usr/bin/env node
const sh = require("shelljs");
const genshinStickers = require("./genshin-stickers.json");

sh.mkdir("-p", "stickers");

const prefixDigits = String(genshinStickers.length).length;

let i = -1;
for (const { href, name } of genshinStickers) {
  i++;
  const filename = name.replace(/[^A-Za-z0-9 ]/g, "");
  const prefix = String(i).padStart(prefixDigits, "0");

  sh.exec(`curl '${href}' -o './stickers/${prefix} ${filename}.png'`);
}
