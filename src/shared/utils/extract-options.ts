export type Card = { type?: string; attribute?: string };

export function extractOptions(cards: Card[]) {
  const types = new Set<string>();
  const attributes = new Set<string>();

  for (const c of cards) {
    if (c.type) types.add(c.type);
    if (c.attribute) attributes.add(c.attribute);
  }

  return [...Array.from(types).sort(), ...Array.from(attributes).sort()];
}
