// utils/tr.js

const latinToCyrillicMap = {
  a: "а",
  b: "б",
  d: "д",
  e: "е",
  f: "ф",
  g: "г",
  h: "ҳ",
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
  x: "х",
  y: "й",
  z: "з",
  ʼ: "ъ",
  "’": "ъ",
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

export function latinToCyrillic(text) {
  return text
    .split("")
    .map((char) => {
      const lower = char.toLowerCase();
      const isUpper = char !== lower;
      const mapped = latinToCyrillicMap[lower] || char;
      return isUpper ? mapped.toUpperCase() : mapped;
    })
    .join("");
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
