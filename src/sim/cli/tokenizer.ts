export function tokenize(input: string): string[] {
  const tokens: string[] = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < input.length; i++) {
    const c = input[i];
    if (c === '"') {
      inQuotes = !inQuotes;
    } else if (c === ' ' && !inQuotes) {
      if (current.length > 0) {
        tokens.push(current);
        current = '';
      }
    } else {
      current += c;
    }
  }

  if (current.length > 0) {
    tokens.push(current);
  }

  return tokens;
}

export function matchKeyword(token: string, candidates: string[]): {
  match: string | null;
  ambiguous: boolean;
  matches: string[];
} {
  const lower = token.toLowerCase();

  // Exact match first
  for (const c of candidates) {
    if (c.toLowerCase() === lower) {
      return { match: c, ambiguous: false, matches: [c] };
    }
  }

  // Prefix match
  const matches = candidates.filter((c) => c.toLowerCase().startsWith(lower));
  if (matches.length === 1) {
    return { match: matches[0], ambiguous: false, matches };
  }
  if (matches.length > 1) {
    return { match: null, ambiguous: true, matches };
  }

  return { match: null, ambiguous: false, matches: [] };
}
