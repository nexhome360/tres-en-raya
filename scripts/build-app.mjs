import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = process.cwd();
const dist = resolve(root, 'dist');

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

let html = await readFile(resolve(root, 'conquista.html'), 'utf8');

// Dentro de la app nativa no necesitamos volver a la portada de la arcade.
html = html.replace(/<a href="\.\/"[^>]*>← Juegos<\/a>/g, '');

await writeFile(resolve(dist, 'index.html'), html, 'utf8');

try {
  await cp(resolve(root, 'privacy.html'), resolve(dist, 'privacy.html'));
} catch {
  // La politica de privacidad es opcional durante desarrollo local.
}

console.log('Conquista Europa preparada en dist/index.html');
