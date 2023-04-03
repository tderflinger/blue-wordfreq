export type LanguageNamesType = {
  [key: string]: string;
}

export const languageNames: LanguageNamesType = {
  cs: "Czech",
  nl: "Dutch",
  fr: "French",
  fi: "Finnish",
  el: "Greek",
  hu: "Hungarian",
  id: "Indonesian",
  it: "Italian",
  ja: "Japanese",
  lt: "Lithuanian",
  lv: "Latvian",
  zh: "Mandarin",
  nb: "Norwegian",
  pl: "Polish",
  ro: "Romanian",
  sl: "Slovenian",
  sk: "Slovak",
  es: "Spanish",
  sv: "Swedish",
  tr: "Turkish",
  uk: "Ukrainian",
};

// all the languages for which we have a transliteration
export const transliteratedLanguages = ["el"];
