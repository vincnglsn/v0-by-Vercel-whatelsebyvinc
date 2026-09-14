const fs = require('fs');

function rename() {
  let content = fs.readFileSync('lib/content.ts', 'utf8');

  const replacements = {
    'iPhone 17 Pro': 'iPhone 15 Pro',
    'Galaxy S26': 'Galaxy S24 Ultra',
    'Pixel 10 Pro': 'Pixel 8 Pro',
    'POCO F8 Ultra': 'POCO F6 Pro',
    'Watch Ultra 3': 'Apple Watch Ultra 2',
    'Watch Series 11': 'Apple Watch Series 9',
    'TV F 65" (2026)': 'TV LG OLED 65"',
    'Echo Dot Max': 'Echo Studio',
    'L40s Pro Ultra': 'Dreame L20 Ultra',
    'Roomba Plus 415 Combo': 'iRobot Roomba Combo'
  };

  for (const [oldName, newName] of Object.entries(replacements)) {
    content = content.replace(new RegExp(oldName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), newName);
  }

  fs.writeFileSync('lib/content.ts', content);
}

rename();
