import { createRequire } from 'node:module';
import { copyFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const jpeg = require('jpeg-js');

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

function lerp(a, b, t) {
  return Math.round(a + (b - a) * t);
}

function hexToRgb(hex) {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function gradient(x, y, w, h, from, to) {
  const t = (x / (w - 1) + y / (h - 1)) / 2;
  return [lerp(from[0], to[0], t), lerp(from[1], to[1], t), lerp(from[2], to[2], t)];
}

function inRect(x, y, rx, ry, rw, rh) {
  return x >= rx && x < rx + rw && y >= ry && y < ry + rh;
}

function warehouseOverlay(x, y, w, h, base) {
  const sx = w / 1200;
  const sy = h / 630;
  if (inRect(x, y, 210 * sx, 210 * sy, 780 * sx, 280 * sy)) return [10, 37, 64];
  if (inRect(x, y, 250 * sx, 160 * sy, 700 * sx, 56 * sy)) return [27, 79, 138];
  if (inRect(x, y, 540 * sx, 128 * sy, 120 * sx, 40 * sy)) return [211, 47, 47];
  if (inRect(x, y, 300 * sx, 280 * sy, 180 * sx, 110 * sy)) return [232, 240, 254];
  if (inRect(x, y, 510 * sx, 260 * sy, 180 * sx, 130 * sy)) return [245, 247, 250];
  if (inRect(x, y, 720 * sx, 300 * sy, 150 * sx, 100 * sy)) return [232, 240, 254];
  return base;
}

function writeJpeg(filePath, width, height, paint) {
  const data = Buffer.alloc(width * height * 4);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const [r, g, b] = paint(x, y, width, height);
      const i = (y * width + x) * 4;
      data[i] = r;
      data[i + 1] = g;
      data[i + 2] = b;
      data[i + 3] = 255;
    }
  }
  const jpegData = jpeg.encode({ data, width, height }, 85);
  mkdirSync(dirname(filePath), { recursive: true });
  writeFileSync(filePath, jpegData.data);
}

const covers = [
  ['fiyatlar-2026.jpg', '#0A2540', '#1B4F8A'],
  ['depo-secim-kriterleri.jpg', '#0A2540', '#1B4F8A'],
  ['tasinma-gecici-depolama.jpg', '#1B4F8A', '#0A2540'],
  ['kurumsal-arsiv-kvkk.jpg', '#0A2540', '#4A90D9'],
  ['e-ticaret-stok-adana.jpg', '#0A2540', '#4A90D9'],
  ['tadilat-esya-saklama.jpg', '#8B1E1E', '#E31E24'],
  ['mobilya-depolama-ipuclari.jpg', '#8B1E1E', '#E31E24'],
  ['ogrenci-esya-depolama.jpg', '#1B4F8A', '#0A2540'],
];

for (const [name, fromHex, toHex] of covers) {
  const from = hexToRgb(fromHex);
  const to = hexToRgb(toHex);
  writeJpeg(join(root, 'public/blog', name), 1200, 630, (x, y, w, h) =>
    warehouseOverlay(x, y, w, h, gradient(x, y, w, h, from, to))
  );
}

writeJpeg(join(root, 'public/og.jpg'), 1200, 630, (x, y, w, h) =>
  warehouseOverlay(x, y, w, h, gradient(x, y, w, h, hexToRgb('#0A2540'), hexToRgb('#1B4F8A')))
);

writeJpeg(join(root, 'public/images/hero-depo.jpg'), 1600, 1200, (x, y, w, h) =>
  warehouseOverlay(x, y, w, h, gradient(x, y, w, h, hexToRgb('#071828'), hexToRgb('#1B4F8A')))
);

const sharedOg = join(root, 'public/og.jpg');
const ogTargets = [
  'seyhan',
  'yuregir',
  'cukurova',
  'saricam',
  'ceyhan',
  'kozan',
  'imamoglu',
  'karatas',
  'karaisali',
  'pozanti',
  'aladag',
  'feke',
  'saimbeyli',
  'tufanbeyli',
  'yumurtalik',
  'kisisel-esya-depolama',
  'mobilya-depolama',
  'kurumsal-arsiv-depolama',
  'e-ticaret-stok-depolama',
  'ogrenci-esya-depolama',
];

mkdirSync(join(root, 'public/og'), { recursive: true });
for (const slug of ogTargets) {
  copyFileSync(sharedOg, join(root, 'public/og', `${slug}.jpg`));
}

console.log('placeholder images written');
