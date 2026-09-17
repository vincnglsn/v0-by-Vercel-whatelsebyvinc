const fs = require('fs');
const path = require('path');

function fixEncoding(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content
    .replace(/SÃ©lectionnÃ©/g, 'Sélectionné')
    .replace(/prÃ©sentÃ©/g, 'présenté')
    .replace(/sÃ©lectionne/g, 'sélectionne')
    .replace(/amÃ©liorer/g, 'améliorer')
    .replace(/prÃ©sente/g, 'présente')
    .replace(/honnÃªtement/g, 'honnêtement')
    .replace(/vÃ©ritables/g, 'véritables')
    .replace(/dÃ©marque/g, 'démarque')
    .replace(/marchÃ©/g, 'marché')
    .replace(/DÃ©couvrir/g, 'Découvrir')
    .replace(/traitÃ©s/g, 'traités')
    .replace(/catÃ©gorie/g, 'catégorie')
    .replace(/SÃ©lection/g, 'Sélection')
    .replace(/derriÃ¨re/g, 'derrière')
    .replace(/passionnÃ©/g, 'passionné')
    .replace(/dÃ©Ã§oit/g, 'déçoit')
    .replace(/affiliÃ©s/g, 'affiliés')
    .replace(/surcoÃ»t/g, 'surcoût')
    .replace(/mÃªme/g, 'même')
    .replace(/Ã /g, 'à')
    .replace(/dÃ©couvrir/g, 'découvrir');
    
  fs.writeFileSync(filePath, content, 'utf8');
}

fixEncoding('components/hero.tsx');
fixEncoding('components/about-section.tsx');
fixEncoding('app/layout.tsx');
fixEncoding('app/page.tsx');
console.log('Fixed');
