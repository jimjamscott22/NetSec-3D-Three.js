export function normalizeCodeForMatching(code: string): string {
  let result = '';
  let inSingleQuote = false;
  let inDoubleQuote = false;
  let i = 0;

  while (i < code.length) {
    const c = code[i];
    const next = code[i + 1] || '';

    if (!inSingleQuote && !inDoubleQuote) {
      // Check single-line comment // or #
      if (c === '/' && next === '/') {
        i += 2;
        while (i < code.length && code[i] !== '\n') i++;
        continue;
      }
      if (c === '#') {
        i++;
        while (i < code.length && code[i] !== '\n') i++;
        continue;
      }
      // Check block comment /* ... */
      if (c === '/' && next === '*') {
        i += 2;
        while (i < code.length && !(code[i] === '*' && code[i + 1] === '/')) i++;
        i += 2;
        continue;
      }
      // Quote start
      if (c === "'") {
        inSingleQuote = true;
        result += c;
        i++;
        continue;
      }
      if (c === '"') {
        inDoubleQuote = true;
        result += c;
        i++;
        continue;
      }
      // Ignore whitespace outside quotes
      if (/\s/.test(c)) {
        i++;
        continue;
      }
      result += c;
      i++;
    } else if (inSingleQuote) {
      result += c;
      if (c === '\\') {
        // Escaped character inside single quote
        i++;
        if (i < code.length) result += code[i];
      } else if (c === "'") {
        inSingleQuote = false;
      }
      i++;
    } else if (inDoubleQuote) {
      result += c;
      if (c === '\\') {
        i++;
        if (i < code.length) result += code[i];
      } else if (c === '"') {
        inDoubleQuote = false;
      }
      i++;
    }
  }

  return result;
}

export function matchesAcceptPatterns(code: string, acceptPatterns: string[]): boolean {
  const normalized = normalizeCodeForMatching(code);
  if (!normalized) return false;

  for (const pattern of acceptPatterns) {
    try {
      const regex = new RegExp(`^${pattern}$`);
      if (regex.test(normalized)) {
        return true;
      }
    } catch (e) {
      console.warn('Invalid regex in accept pattern:', pattern, e);
    }
  }

  return false;
}
