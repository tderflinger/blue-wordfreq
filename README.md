# blue-wordfreq

Word frequency list for Czech, Greek, French, Spanish, Mandarin, Romanian and Swedish with English translations.
Ideal for second language acquisition and language learning. The lists contain the 1000 most common words in each language.

Based on [wordfreq](https://github.com/rspeer/wordfreq), translated using [DeepL](https://www.deepl.com/translator).

Demo site: https://blue-wordfreq.netlify.app

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
- fr (French)
- el (Greek)
- zh (Mandarin)
- ro (Romanian)
- es (Spanish)
- sv (Swedish)

## Converter

Converter is a Go application that converts the JSON wordlist into
HTML. The JSON wordlists are located in the `word-lists` directory.

Run:

```bash
go run converter.go languageId languageName
```

## Deployment

```bash
cd dist
netlify deploy
```

## References

Thanks to the work of [wordfreq](https://github.com/rspeer/wordfreq)!

## License

MIT License