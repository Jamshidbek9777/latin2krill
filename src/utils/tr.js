// utils/tr.js

const latinToCyrillicMap = {
  sh: "ш",
  ch: "ч",
  "o'": "ў",
  oʻ: "ў",
  "g'": "ғ",
  a: "а",
  b: "б",
  d: "д",
  e: "е",
  f: "ф",
  g: "г",
  h: "x",
  i: "и",
  j: "ж",
  k: "к",
  l: "л",
  m: "м",
  n: "н",
  o: "о",
  p: "п",
  q: "қ",
  r: "р",
  s: "с",
  t: "т",
  u: "у",
  v: "в",
  x: "ҳ",
  y: "й",
  z: "з",
  "'": "ъ",
};

const cyrillicToLatinMap = {
  а: "a",
  б: "b",
  д: "d",
  е: "e",
  ф: "f",
  г: "g",
  ҳ: "h",
  и: "i",
  ж: "j",
  к: "k",
  л: "l",
  м: "m",
  н: "n",
  о: "o",
  п: "p",
  қ: "q",
  р: "r",
  с: "s",
  т: "t",
  у: "u",
  в: "v",
  х: "x",
  й: "y",
  з: "z",
  ъ: "'",
};

function normalizeApostrophes(text) {
  return text.replace(/[’ʼ‘`´]/g, "'");
}

export function latinToCyrillic(text) {
  text = normalizeApostrophes(text);
  let result = "";
  for (let i = 0; i < text.length; i++) {
    const twoChar = text.slice(i, i + 2).toLowerCase();
    const oneChar = text[i].toLowerCase();
    const isUpper = text[i] !== oneChar;

    if (latinToCyrillicMap[twoChar]) {
      const mapped = latinToCyrillicMap[twoChar];
      result += isUpper ? mapped.toUpperCase() : mapped;
      i++;
    } else if (latinToCyrillicMap[oneChar]) {
      const mapped = latinToCyrillicMap[oneChar];
      result += isUpper ? mapped.toUpperCase() : mapped;
    } else {
      result += text[i];
    }
  }
  return result;
}

export function cyrillicToLatin(text) {
  return text
    .split("")
    .map((char) => {
      const lower = char.toLowerCase();
      const isUpper = char !== lower;
      const mapped = cyrillicToLatinMap[lower] || char;
      return isUpper ? mapped.toUpperCase() : mapped;
    })
    .join("");
}
