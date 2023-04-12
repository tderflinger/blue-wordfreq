from wordfreq import top_n_list

import json
import os
import sys

import deepl
import boto3

if len(sys.argv) != 2:
    print("Usage: python3 app.py <language_code>");
    sys.exit(1)

language_code = sys.argv[1]

DEEPL_KEY = os.environ['DEEPL_KEY']
MAX_WORDS = 1000

translator = deepl.Translator(DEEPL_KEY)

translator_aws = boto3.client(service_name='translate',
                    region_name='us-east-1', use_ssl=True)

usage = translator.get_usage()
if usage.any_limit_reached:
    print('DeepL translation limit reached.')
    sys.exit(1)

language_deepl = False

for language in translator.get_source_languages():
    if language.code == language_code.upper():
        print("Language is supported by DeepL.")
        language_deepl = True
        break

if not language_deepl:
    print("Language is not supported by DeepL.")

top_words = top_n_list(language_code, MAX_WORDS, wordlist='best')

word_list = []

def deepl_translate(word):
    result = translator.translate_text(word, source_lang=language_code, target_lang="EN-US", split_sentences="nonewlines", preserve_formatting=False)
    translation_word = result.text

    if len(translation_word) == 0:
        first_char_lower = ""
    else:
        first_char_lower = translation_word[0].lower()
    
    translation_word_first_lower = first_char_lower + result.text[1:]
    return translation_word_first_lower

def aws_translate(word):
    result = translator_aws.translate_text(Text=word,
                SourceLanguageCode=language_code, TargetLanguageCode="en-us")
    translated_word = result['TranslatedText']
    return translated_word

def iterate_over_words():
    for word in top_words:
        print(word)
        if language_deepl:
            translation = deepl_translate(word)
        else:
            translation = aws_translate(word)
        entry = { "word": word, "en":  translation}
        print(translation)
        word_list.append(entry)

def write_to_file():
    word_file = open("../../word-lists/"+language_code+"-list.json", "w")
    json_object = json.dumps(word_list, indent=4)
    word_file.write(json_object)
    word_file.close()

iterate_over_words()
write_to_file()