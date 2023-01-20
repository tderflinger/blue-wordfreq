# blue-wordfreq

Word frequency list for Czech, Greek, Mandarin, Romanian and Swedish with English translations.
Ideal for second language acquisition and language learning.

Based on [wordfreq](https://github.com/rspeer/wordfreq), translated using [DeepL](https://www.deepl.com/translator).

## Installation

```bash
python3 -m venv venv

. venv/bin/activate

pip3 install -r requirements.txt
```

## Run

```bash
. venv/bin/activate

source ./deepl.env

python3 app.py languageId
```

Where languageId is one of the following:

- cs (Czech)
- el (Greek)
- zh (Mandarin)
- ro (Romanian)
- sv (Swedish)

## Converter

Converter is a Go application that converts the JSON wordlist into
HTML.

Run:

```bash
go run converter.go languageId languageName
```

## References

Thanks to the work of [wordfreq](https://github.com/rspeer/wordfreq)!

## License

MIT License