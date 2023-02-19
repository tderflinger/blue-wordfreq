import grc from "greek-transliteration";
import fs from "fs/promises";
import { writeFileSync } from "fs";

console.log("Transliterating Greek words...");
const WORD_LIST_DIRECTORY = "../../word-lists";

fs.readFile(`${WORD_LIST_DIRECTORY}/el-list.json`, "utf-8")
  .then((data) => {
    const words = JSON.parse(data);
    console.log(words);
    const newWords = words.map((word) => {
        const transliterated = grc.transliterate(word?.word);
        return {
            word: word?.word,
            transliterated,
            ['en-us']: word?.['en-us'],
        }
    });

    console.log(newWords);
    writeFileSync(`${WORD_LIST_DIRECTORY}/el-list-tl.json`, JSON.stringify(newWords), 'utf-8');
  })
  .catch((err) => {
    console.log(err);
  });
