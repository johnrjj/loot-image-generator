import { readFileSync } from "fs";
import { ParsedRequest } from "./types";

const tinos = readFileSync(`${__dirname}/../_fonts/Tinos-Regular.ttf`).toString(
  "base64"
);

function getCss() {
  return `
    @font-face {
        font-family: 'Tinos';
        font-style:  normal;
        font-weight: normal;
        src: url(data:font/woff2;charset=utf-8;base64,${tinos}) format('woff2');
    }

      html,body {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
      }

    body {
        background: #000000;
        color: #ffffff;
        height: 100vh;
        display: flex;
        font-family: Tinos;
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
    }

    .main-container {
        padding: 12px 17px;
        display: flex;
        flex-direction: column;
    }

    .loot-item {
        margin-bottom: 7px;
    }`;
}

export function getHtml(_parsedReq: ParsedRequest, loot: string[] | undefined) {
  return `<!DOCTYPE html>
<html>
    <meta charset="utf-8">
    <title>Generated Image</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        ${getCss()}
    </style>
    <body>
        <div class="main-container">
                ${loot?.map((aLoot) => getImage(aLoot)).join("")}
        </div>
    </body>
</html>`;
}

function getImage(textRun: string) {
  return `
    <div class="loot-item">
        ${textRun}
    </div>
    `;
}
