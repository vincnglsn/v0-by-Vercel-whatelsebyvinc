const fs = require('fs');

function editFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  if (content.includes('import { BackButton }')) return; // already added

  content = content.replace(
    "import { SiteFooter } from '@/components/site-footer'",
    "import { SiteFooter } from '@/components/site-footer'\nimport { BackButton } from '@/components/back-button'"
  );

  content = content.replace(
    /<nav aria-label="Fil d'ariane"/g,
    "<BackButton />\n          <nav aria-label=\"Fil d'ariane\""
  );
  
  fs.writeFileSync(filePath, content);
}

editFile('app/guides/[slug]/page.tsx');
editFile('app/categories/[slug]/page.tsx');
