const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, '../content');
const outputFile = path.join(contentDir, 'index.ts');

// Directories to scan
const contentTypes = ['posts', 'reviews', 'podcasts', 'explainers'];

// Map directory names to export names (if different)
const exportNames = {
  'podcasts': 'episodes'
};

function getMdxFiles(dir) {
  const fullPath = path.join(contentDir, dir);
  if (!fs.existsSync(fullPath)) return [];
  
  return fs.readdirSync(fullPath)
    .filter(file => file.endsWith('.mdx'))
    .map(file => file.replace('.mdx', ''));
}

function generateImports(contentType, files) {
  return files.map((file, index) => {
    const varName = `${contentType}${index + 1}`;
    return `import * as ${varName} from "./${contentType}/${file}.mdx";`;
  }).join('\n');
}

function generateArray(contentType, count) {
  const items = Array.from({ length: count }, (_, i) => `${contentType}${i + 1}`);
  const exportName = exportNames[contentType] || contentType;
  return `export const ${exportName} = [${items.join(', ')}].map(shapePosts);`;
}

let imports = [];
let arrays = [];

contentTypes.forEach(contentType => {
  const files = getMdxFiles(contentType);
  if (files.length > 0) {
    imports.push(generateImports(contentType, files));
    arrays.push(generateArray(contentType, files.length));
  }
});

const content = `import type React from "react";

${imports.join('\n\n')}

export type MdxModule = {
  metadata: Record<string, any>;
  default: React.ComponentType;
};

export type PostWithContent = {
  slug: string;
  title: string;
  category: string;
  author: string;
  authorSlug: string;
  date: string;
  image: string;
  excerpt: string;
  Content: React.ComponentType;
};

function shapePosts(mod: MdxModule) {
  return { ...mod.metadata, Content: mod.default } as PostWithContent;
}

${arrays.join('\n')}
`;

fs.writeFileSync(outputFile, content, 'utf-8');
console.log('✅ Generated content/index.ts automatically');

