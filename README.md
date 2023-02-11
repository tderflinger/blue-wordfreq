# blue-wordfreq

Word frequency list for Czech, Greek, French, Spanish, Mandarin, Romanian, Polish, Turkish, Ukrainian and Swedish with English translations.
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

Create deepl.env file with the following content:

```bash
export DEEPL_KEY=your-auth-key
```

Then run to generate and translate the word frequency list for the respective language (`languageId`):

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
- tr (Turkish)
- uk (Ukrainian)

## Converter

Converter is a Go application that converts the JSON wordlist into
HTML. The JSON wordlists are located in the `word-lists` directory.

Run:

```bash
cd converter
go run converter.go languageId languageName
```

The generated HTML files are then located in the `dist` directory.

## Deployment

```bash
cd dist
netlify deploy
```

## References

Thanks to the work of [wordfreq](https://github.com/rspeer/wordfreq)!

## License

MIT License