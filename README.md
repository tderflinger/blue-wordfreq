# blue-wordfreq

Word frequency list for Czech, Greek, French, Spanish, Mandarin, Romanian, Polish, Turkish, Ukrainian and Swedish with English translations.
Ideal for second language acquisition and language learning. The lists contain the 1000 most common words in each language.

Based on [wordfreq](https://github.com/rspeer/wordfreq), translated using [DeepL](https://www.deepl.com/translator).

Demo site: https://blue-wordfreq.netlify.app

## Transliteration

For the Greek language there is a transliteration offered for each word in brackets. The transliteration
system is aimed at preserving etymology. Thus, it differs a bit from the standard transliteration in
[ISO 843](https://en.wikipedia.org/wiki/ISO_843). For example, "β" is transliterated as "b" and not "v" as in ISO 843.

The transliteration of Korean follows the National Institute of Korean Language guidelines on Romanization of Korean.

## Installation

For the `create-lists` application:

```bash
python3 -m venv venv

. venv/bin/activate

pip3 install -r requirements.txt
```

For the `list-ui` application:

```bash
npm install
```

## Run

For the `create-lists` application:

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

For the `list-ui` application:

`list-ui` is a static Next.js site. You need the respective JSON files in the `/word-lists` folder.
You can generate them using the `create-lists` application.

In order to run for development:

```bash
npm run dev
```

For production:

```bash
npm run build
npm run export
```

## Packages

The `blue-workfreq` package contains the following:

- `create-lists` - creates the word frequency lists for the respective language (`languageId`)
- `list-ui` - creates the UI as static pages for all languages
- `blue-transliterator` - transliterates the word frequency lists for the respective language (`languageId`)

## References

Thanks to the work of [wordfreq](https://github.com/rspeer/wordfreq)!

The `blue-transliterator` package uses the ICU library for transliteration: https://unicode-org.github.io/icu/userguide/transforms/general

## License

MIT License