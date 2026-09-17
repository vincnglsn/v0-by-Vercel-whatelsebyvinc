const fs = require('fs');

function replaceInFile(filePath, replacements) {
  let content = fs.readFileSync(filePath, 'utf8');
  for (const [search, replace] of replacements) {
    content = content.split(search).join(replace);
  }
  fs.writeFileSync(filePath, content, 'utf8');
}

replaceInFile('components/hero.tsx', [
  ['Testé et sélectionné', 'Sélectionné et présenté'],
  ['ce que je garde&nbsp;— et ce\n            qui finit au fond d\\'un tiroir.', 'leurs véritables atouts et ce\n            qui les démarque sur le marché.'],
  ['"Ce qui vaut le coup, et ce qui finit au tiroir."', '"Sélectionner ce qui vaut vraiment le coup."'],
  ['produits traités', 'produits sélectionnés'],
  ['Découvrir les objets traités', 'Découvrir nos sélections']
]);

replaceInFile('components/about-section.tsx', [
  ['chaque objet passe entre mes mains, s\\'invite chez moi et\n              partage ma routine.', 'je passe au crible les meilleurs objets du marché pour vous les présenter.'],
  ['évaluer ces produits', 'sélectionner ces produits']
]);

replaceInFile('components/blog-section.tsx', [
  ['Fiches produits et objets traités', 'Fiches produits et objets sélectionnés'],
  ['Lire le test complet', 'Découvrir ce produit']
]);

replaceInFile('components/categories.tsx', [
  ['{cat.count} tests', '{cat.count} produits']
]);

replaceInFile('components/newsletter.tsx', [
  ['Les nouveaux tests', 'Les nouvelles sélections']
]);

replaceInFile('lib/content.ts', [
  ['que je garde après les avoir testés — et ceux que je renvoie.', 'qui retiennent mon attention et méritent leur place chez vous.'],
  ['testé au quotidien.', 'sélectionné pour leur quotidien.'],
  ['testés pendant 3 mois', 'passés au crible'],
  ['Après un hiver complet de test, les guirlandes et spots que je garde partagent', 'Les guirlandes et spots qui se démarquent partagent'],
  ['mon test complet', 'présentation complète'],
  ['J\\'ai testé les distributeurs', 'Zoom sur les distributeurs'],
  ['Sur les modèles testés', 'Sur les modèles analysés']
]);

console.log('Done!');
