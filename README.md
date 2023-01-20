# blue-wordfreq

Word frequency list for Czech, Greek, Mandarin, Romanian and Swedish with English translations.
Ideal for second language acquisition and language learning.

Based on [wordfreq](https://github.com/rspeer/wordfreq), translated using [DeepL](https://www.deepl.com/translator).

## Installation

python3 -m venv venv

. venv/bin/activate

pip3 install -r requirements.txt

export DEEPL_KEY=xxx

## Run

. venv/bin/activate
source ./deepl.env
python3 app.py languageId

## Converter

Converter is a Go application that converts the JSON wordlist into
HTML.

Run:
go run converter.go languageId languageName

## License

MIT License