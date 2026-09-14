const fs = require('fs');

let content = fs.readFileSync('app/guides/[slug]/page.tsx', 'utf8');

const replacement = `          <div className="mt-8 flex justify-center">
            <Button
              render={<a href={article.affiliateLink || \`https://www.amazon.fr/s?k=\${encodeURIComponent(article.title.split(' : ')[0].split(' - ')[0].split(' — ')[0])}&tag=whatelsebyvin-21\`} target="_blank" rel="noopener noreferrer" />}
              nativeButton={false}
              size="lg"
              className="w-full sm:w-auto"
            >
              Voir le prix sur Amazon
            </Button>
          </div>`;

content = content.replace(/<div className="mt-8 flex justify-center">[\s\S]*?<\/div>/, replacement);

fs.writeFileSync('app/guides/[slug]/page.tsx', content);
