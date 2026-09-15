const fs = require('fs');

const images = fs.readdirSync('public/images').filter(f => f.endsWith('.jpg') || f.endsWith('.png'));
let content = fs.readFileSync('lib/content.ts', 'utf8');

// We will find all articles in content.ts.
// The structure is roughly:
// slug: '...',
// title: '...',
// ...
// image: '/images/cat-hightech.png',

const articleRegex = /slug: '([^']+)',\s+title: '([^']+)',[\s\S]*?image: '([^']+)'/g;

let newContent = content;

let match;
while ((match = articleRegex.exec(content)) !== null) {
  const slug = match[1];
  const title = match[2];
  const currentImage = match[3];
  
  // We skip top level categories that might match, but let's just replace if it's an article
  // Actually, let's find the best image match for the slug.
  const slugWords = slug.split('-');
  
  // Scoring function
  let bestMatch = null;
  let bestScore = 0;
  
  for (const img of images) {
    if (img.startsWith('cat-') || img.startsWith('slide_') || img === 'logo.png') continue;
    
    let score = 0;
    const imgNameLower = img.toLowerCase();
    
    // Check if image name contains slug words
    for (const word of slugWords) {
      if (word.length > 2 && imgNameLower.includes(word)) {
        score++;
      }
    }
    
    // Exact match is king
    if (imgNameLower.includes(slug)) {
      score += 10;
    }
    
    if (score > bestScore) {
      bestScore = score;
      bestMatch = img;
    }
  }
  
  if (bestMatch && bestScore > 0) {
    // Replace just this article's image
    // Find the specific block to replace safely
    const blockStart = match.index;
    const blockEnd = blockStart + match[0].length;
    const block = content.substring(blockStart, blockEnd);
    const newBlock = block.replace(/image: '[^']+'/, `image: '/images/${bestMatch}'`);
    
    newContent = newContent.replace(block, newBlock);
  }
}

fs.writeFileSync('lib/content.ts', newContent);
console.log('Done!');
