const fs = require('fs');
const file = 'app/guides/[slug]/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const regex = /\{article\.affiliateLink && \([\s\S]*?<\/div>\s*\)\}/;

const replacement = `          <div className="mt-8 flex justify-center">
            <Button
              render={<a href={article.affiliateLink || \`https://www.amazon.fr/s?k=\${encodeURIComponent(article.title)}\`} target="_blank" rel="noopener noreferrer" />}
              nativeButton={false}
              size="lg"
              className="w-full sm:w-auto"
            >
              Voir le prix sur Amazon
            </Button>
          </div>`;

content = content.replace(regex, replacement);
fs.writeFileSync(file, content);
