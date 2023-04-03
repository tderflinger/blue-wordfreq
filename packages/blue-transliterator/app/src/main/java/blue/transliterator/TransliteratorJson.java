package blue.transliterator;

public class TransliteratorJson {

    public String word;

    public String en;

    public String transliteration;

    public TransliteratorJson(String word, String en, String transliteration) {
        this.word = word;
        this.en = en;
        this.transliteration = transliteration;
    }

    public String getWord() {
        return word;
    }

    public void setWord(String word) {
        this.word = word;
    }

    public String getEn() {
        return en;
    }

    public void setEnUs(String en) {
        this.en = en;
    }

    public String getTransliteration() {
        return transliteration;
    }

    public void setTransliteration(String transliteration) {
        this.transliteration = transliteration;
    }
}