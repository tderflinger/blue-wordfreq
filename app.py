import json
import os
import sys

import deepl
from wordfreq import top_n_list

if len(sys.argv) != 2:
    print("Usage: python3 app.py <language_code>");
    sys.exit(1)

language_code = sys.argv[1]

DEEPL_KEY = os.environ['DEEPL_KEY']
MAX_WORDS = 1000

translator = deepl.Translator(DEEPL_KEY)
top_words = top_n_list(language_code, MAX_WORDS, wordlist='best')

word_list = []

for word in top_words:
    print(word)
    result = translator.translate_text(word, source_lang=language_code, target_lang="EN-US", split_sentences="nonewlines", preserve_formatting=False)
    translation_word = result.text

    if len(translation_word) == 0:
        first_char_lower = ""
    else:
        first_char_lower = translation_word[0].lower()
    
    translation_word_first_lower = first_char_lower + result.text[1:]
    entry = { "word": word, "en-us":  translation_word_first_lower}
    word_list.append(entry)

print(word_list)

word_file = open("./word-lists/"+language_code+"-list.json", "w")
json_object = json.dumps(word_list, indent=4)
word_file.write(json_object)
word_file.close()
