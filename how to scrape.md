- go to https://genshin-impact.fandom.com/wiki/Chat/Gallery in firefox
  - ad blocker will help
- scroll up and down some so it loads all the thumbnails
- put this in the browser console:
  ```js
  data = $$(".wikia-gallery-item")
    .map((item) => [
      item.querySelector("img.thumbimage"),
      item.querySelector(".lightbox-caption"),
    ])
    .map(([img, caption]) => ({
      href: img.src.replace(/revision\/latest\/.*$/, "revision/latest"),
      name: caption.innerText.replace(/\s+/g, " "),
    }));
  ```
- right click on the array printed at the end (data) and Copy Object
- paste into genshin-stickers.json
- run npm install
- run download.js
