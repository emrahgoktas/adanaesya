const VOWELS = 'aeıioöuü';
const VOICELESS = 'çfhkpsşt';

function lastVowel(word: string): string {
  const lower = word.toLocaleLowerCase('tr-TR');
  for (let i = lower.length - 1; i >= 0; i -= 1) {
    if (VOWELS.includes(lower[i] ?? '')) {
      return lower[i] ?? 'a';
    }
  }
  return 'a';
}

function isFrontVowel(vowel: string): boolean {
  return 'eiöü'.includes(vowel);
}

function endsWithVowel(word: string): boolean {
  const last = word.toLocaleLowerCase('tr-TR').slice(-1);
  return VOWELS.includes(last);
}

function endsWithVoiceless(word: string): boolean {
  const last = word.toLocaleLowerCase('tr-TR').slice(-1);
  return VOICELESS.includes(last);
}

/** İstanbul’da, Seyhan’da, Yüreğir’de, Karataş’ta */
export function locative(name: string): string {
  const front = isFrontVowel(lastVowel(name));
  const suffix = endsWithVoiceless(name) ? (front ? 'te' : 'ta') : front ? 'de' : 'da';
  return `${name}’${suffix}`;
}

/** Seyhan’dan, Yüreğir’den, Karataş’tan */
export function ablative(name: string): string {
  const front = isFrontVowel(lastVowel(name));
  const suffix = endsWithVoiceless(name) ? (front ? 'ten' : 'tan') : front ? 'den' : 'dan';
  return `${name}’${suffix}`;
}

/** Seyhan’daki, Çukurova’daki */
export function locativeAdj(name: string): string {
  return `${locative(name)}ki`;
}

/** Seyhan’ın, Çukurova’nın, Yüreğir’in */
export function genitive(name: string): string {
  const vowel = lastVowel(name);
  const afterVowel: Record<string, string> = {
    a: 'nın',
    ı: 'nın',
    e: 'nin',
    i: 'nin',
    o: 'nun',
    u: 'nun',
    ö: 'nün',
    ü: 'nün',
  };
  const afterConsonant: Record<string, string> = {
    a: 'ın',
    ı: 'ın',
    e: 'in',
    i: 'in',
    o: 'un',
    u: 'un',
    ö: 'ün',
    ü: 'ün',
  };
  const suffix = endsWithVowel(name) ? (afterVowel[vowel] ?? 'nın') : (afterConsonant[vowel] ?? 'ın');
  return `${name}’${suffix}`;
}
