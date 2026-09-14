const fs = require('fs');
const file = 'app/guides/[slug]/page.tsx';
let content = fs.readFileSync(file, 'utf8');
content = content.replace(
  \https://www.amazon.fr/s?k=\\$\\{encodeURIComponent(article.title)}\,
  \https://www.amazon.fr/s?k=\\$\\{encodeURIComponent(article.title)}&tag=whatelsebyvin-21\
);
fs.writeFileSync(file, content);
