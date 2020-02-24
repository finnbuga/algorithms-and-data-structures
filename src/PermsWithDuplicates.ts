import MultiSet from "./MultiSet";

/**
 * Find all permutations of a given string with duplicate characters
 */
export default function getPermutations(s: string): string[] {
  const chars: MultiSet = new MultiSet(...s.split(""));

  return getPerms(chars);
}

/**
 * Find all permutations of a given Multi Set
 */
function getPerms(chars: MultiSet): string[] {
  if (chars.size === 0) {
    return [""];
  }

  const perms: string[] = [];
  const uniqueChars: string[] = chars.uniques();
  uniqueChars.forEach(char =>
    perms.push(...getPermsThatStartWithChar(chars, char))
  );
  return perms;
}

/**
 * Find all permutations of a given Multi Set with the restriction that
 * they must all start with the given character (must me in the MultiSet)
 */
function getPermsThatStartWithChar(chars: MultiSet, char: string): string[] {
  chars.remove(char);
  const permsWithoutChar = getPerms(chars);
  chars.add(char);

  return permsWithoutChar.map(perm => char + perm);
}
