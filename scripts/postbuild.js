import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const manifestPath = resolve('dist/my-portfolio/server/angular-app-manifest.mjs');

if (existsSync(manifestPath)) {
    let content = readFileSync(manifestPath, 'utf8');
    const targetRoutes = `  routes: [
    {
      "renderMode": 2,
      "route": "/"
    },
    {
      "renderMode": 0,
      "route": "/projects/*"
    },
    {
      "renderMode": 0,
      "route": "/**"
    }
  ],`;

    content = content.replace(/routes:\s*\[[\s\S]*?\],/, targetRoutes);
    writeFileSync(manifestPath, content, 'utf8');
    console.log('✓ Successfully synchronized angular-app-manifest.mjs with dynamic SSR routes.');
}

