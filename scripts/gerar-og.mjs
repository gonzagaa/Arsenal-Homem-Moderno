// Gera assets/img/og.jpg (1200x630), a imagem de compartilhamento (Open Graph e Twitter Card):
// a foto do hero desktop com o H1 por cima, na Geist, como na página.
//
// Uso, a partir da raiz do projeto:
//   npm install --prefix scripts            uma vez
//   npm run og --prefix scripts
//
// Usa o Chrome instalado na máquina (puppeteer-core). Se ele não estiver no caminho padrão,
// informe com a variável CHROME_PATH. Precisa de internet para baixar a Geist do Google Fonts.

import { readFile, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer-core';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SAIDA = path.join(RAIZ, 'assets', 'img', 'og.jpg');

const candidatos = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].filter(Boolean);
let chrome;
for (const c of candidatos) { try { await access(c); chrome = c; break; } catch {} }
if (!chrome) throw new Error('Chrome não encontrado. Informe o caminho em CHROME_PATH.');

const foto = (await readFile(path.join(RAIZ, 'assets', 'img', 'hero-desktop.png'))).toString('base64');

// O mesmo H1 do index.html (copy, seção 1).
const html = `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist:wght@300;500;600&display=block">
<style>
*{margin:0;box-sizing:border-box}
body{width:1200px;height:630px;overflow:hidden;background:#01050F;font-family:'Geist',sans-serif;-webkit-font-smoothing:antialiased}
.foto{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:0% 30%}
.sombra{position:absolute;inset:0;background:linear-gradient(90deg,rgba(1,5,15,.92) 0%,rgba(1,5,15,.72) 34%,rgba(1,5,15,0) 56%),linear-gradient(0deg,rgba(1,5,15,.55) 0%,rgba(1,5,15,0) 30%)}
.texto{position:absolute;left:72px;top:0;bottom:0;width:540px;display:flex;flex-direction:column;justify-content:center;gap:26px}
.pill{display:inline-flex;align-items:center;gap:12px;font-size:20px;font-weight:500;letter-spacing:-.005em;color:#A9B8CB}
.pill::before{content:"";width:15px;height:18px;background:linear-gradient(180deg,#F1F4F8,#8FA3BE);clip-path:polygon(50% 0,100% 13%,100% 46%,86% 74%,50% 100%,14% 74%,0 46%,0 13%)}
h1{font-weight:300;font-size:56px;line-height:1.08;letter-spacing:-.03em;text-wrap:balance;color:#E9EEF5}
h1 strong{font-weight:600;background:linear-gradient(180deg,#FFFFFF 0%,#D9E2EE 45%,#9FB2CB 100%);-webkit-background-clip:text;background-clip:text;color:transparent}
</style></head><body>
<img class="foto" src="data:image/png;base64,${foto}" alt="">
<div class="sombra"></div>
<div class="texto"><span class="pill">Arsenal Homem Blindado</span>
<h1>Tem homem que só aprende isso depois de ser traído. <strong>Você pode aprender antes.</strong></h1></div>
</body></html>`;

const browser = await puppeteer.launch({ executablePath: chrome, headless: true });
const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
await page.setContent(html, { waitUntil: 'networkidle0' });
await page.evaluate(() => document.fonts.ready);
const geist = await page.evaluate(() => document.fonts.check('300 56px Geist') && document.fonts.check('600 56px Geist'));
if (!geist) throw new Error('A Geist não carregou (sem internet?). A imagem não foi gerada.');
await page.screenshot({ path: SAIDA, type: 'jpeg', quality: 86 });
await browser.close();
console.log('assets/img/og.jpg gerado (1200x630).');
