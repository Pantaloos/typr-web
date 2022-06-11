export const getCharSequence = (from, to) => {
  const fromCharCode = from.charCodeAt(0);
  const toCharCode = to.charCodeAt(0);
  const length = toCharCode - fromCharCode + 1;

  if (length < 0) return [];

  const characters = Array.from({ length }, (_, i) =>
    String.fromCharCode(i + fromCharCode)
  );

  return characters;
};
