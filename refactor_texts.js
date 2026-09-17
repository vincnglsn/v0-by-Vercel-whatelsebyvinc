const fs = require('fs');

function replaceInFile(filePath, replacements) {
  let content = fs.readFileSync(filePath, 'utf8');
  for (const [search, replace] of replacements) {
    // using string replace for exact match or regex
    content = content.split(search).join(replace);
  }
  fs.writeFileSync(filePath, content, 'utf8');
}

// 1. app/layout.tsx
replaceInFile('app/layout.tsx', [
  ['maison connectée testés', 'maison connectée sélectionnés']
]);

// 2. app/page.tsx
replaceInFile('app/page.tsx', [
  ['testés et sélectionnés', 'sélectionnés avec soin']
]);

// 3. components/hero.tsx
replaceInFile('components/hero.tsx', [
  ['Testé et sélectionné', 'Sélectionné'],
  ['ce que je garde&nbsp;— et ce\n            qui finit au fond d\\'un tiroir', 'leurs véritables atouts et ce\n            qui les démarque sur le marché'],
  ['"Ce qui vaut le coup, et ce qui finit au tiroir."', '"Sélectionner ce qui vaut vraiment le coup."'],
  ['produits traités', 'produits sélectionnés'],
  ['Découvrir les objets traités', 'Découvrir nos sélections'],
  ['D\u00E9couvrir les objets trait\u00E9s', 'D\u00E9couvrir nos s\u00E9lections'], // In case of unicode issues
  ['ce que je garde&nbsp;— et ce qui finit au fond d\\'un tiroir.', 'leurs véritables atouts et ce qui les démarque sur le marché.'],
  ['Test\u00E9 et s\u00E9lectionn\u00E9', 'S\u00E9lectionn\u00E9'],
  ['produits trait\u00E9s', 'produits s\u00E9lectionn\u00E9s'],
]);

// 4. components/about-section.tsx
replaceInFile('components/about-section.tsx', [
  ['chaque objet passe entre mes mains, s\\'invite chez moi et\n              partage ma routine.', 'je passe au crible les meilleurs objets du marché pour vous les présenter.'],
  ['chaque objet passe entre mes mains, s\\'invite chez moi et partage ma routine.', 'je passe au crible les meilleurs objets du marché pour vous les présenter.'],
  ['évaluer ces produits', 'sélectionner ces produits'],
  ['\u00E9valuer ces produits', 's\u00E9lectionner ces produits']
]);

// 5. components/blog-section.tsx
replaceInFile('components/blog-section.tsx', [
  ['Fiches produits et objets traités', 'Fiches produits et objets sélectionnés'],
  ['Fiches produits et objets trait\u00E9s', 'Fiches produits et objets s\u00E9lectionn\u00E9s'],
  ['Lire le test complet', 'Découvrir ce produit']
]);

// 6. components/categories.tsx
replaceInFile('components/categories.tsx', [
  ['{cat.count} tests', '{cat.count} produits']
]);

// 7. components/newsletter.tsx
replaceInFile('components/newsletter.tsx', [
  ['Les nouveaux tests', 'Les nouvelles sélections']
]);

// 8. lib/content.ts
replaceInFile('lib/content.ts', [
  ['que je garde après les avoir testés — et ceux que je renvoie.', 'qui retiennent mon attention et méritent leur place chez vous.'],
  ['testé au quotidien.', 'sélectionné pour leur quotidien.'],
  ['testés pendant 3 mois', 'passés au crible'],
  ['Après un hiver complet de test, les guirlandes et spots que je garde partagent', 'Les guirlandes et spots qui se démarquent partagent'],
  ['mon test complet', 'présentation complète'],
  ['J\\'ai testé les distributeurs', 'Zoom sur les distributeurs'],
  ['Sur les modèles testés', 'Sur les modèles analysés']
]);

// also we might need to change /fiches-produits/page.tsx
replaceInFile('app/fiches-produits/page.tsx', [
  ['objets traités', 'objets sélectionnés'],
  ['objets trait\u00E9s', 'objets s\u00E9lectionn\u00E9s']
]);

console.log('Replacements completed.');
