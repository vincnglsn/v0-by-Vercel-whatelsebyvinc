const fs = require('fs');
let content = fs.readFileSync('components/blog-section.tsx', 'utf8');

content = content.replace(
  "import { useState, useMemo } from 'react'",
  "import { useState, useMemo, useEffect, Suspense } from 'react'\nimport { useSearchParams } from 'next/navigation'"
);

content = content.replace(
  "export function BlogSection() {",
  "function BlogSectionInner() {\n  const searchParams = useSearchParams();\n  const initialQuery = searchParams.get('q') || '';"
);

content = content.replace(
  "const [search, setSearch] = useState('')",
  "const [search, setSearch] = useState(initialQuery);\n\n  useEffect(() => {\n    const q = searchParams.get('q');\n    if (q) setSearch(q);\n  }, [searchParams]);"
);

content += `\n\nexport function BlogSection() {
  return (
    <Suspense fallback={<div className="py-24 text-center">Chargement...</div>}>
      <BlogSectionInner />
    </Suspense>
  )
}\n`;

fs.writeFileSync('components/blog-section.tsx', content);
