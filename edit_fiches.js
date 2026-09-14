const fs = require('fs');
const file = 'app/fiches-produits/page.tsx';
let content = fs.readFileSync(file, 'utf8');
content = content.replace(
  "import { SiteFooter } from '@/components/site-footer'",
  "import { SiteFooter } from '@/components/site-footer'\nimport { BackButton } from '@/components/back-button'"
);
content = content.replace(
  '<h1 className="font-serif',
  '<BackButton />\n            <h1 className="font-serif'
);
fs.writeFileSync(file, content);
