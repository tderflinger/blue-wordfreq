package blue.transliterator;
import com.ibm.icu.text.Transliterator;
import java.io.File;
import java.io.IOException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.JsonNode;

public class App {

    private static void transliterateList(Transliterator transliterator, String fileName, String outputFilename) {
        ObjectMapper mapper = new ObjectMapper();
        TransliteratorJson[] transliteratorJson = new TransliteratorJson[1000];

        try {
            // Read the JSON file into a JsonNode object
            JsonNode rootNode = mapper.readTree(new File(fileName));

            int count = 0;

            for (JsonNode node : rootNode) {
                String word = node.get("word").asText();
                String enUs = node.get("en").asText();

                System.out.println("Word: " + word);
                System.out.println("En: " + enUs);
                System.out.println("Transliteration: " + transliterator.transliterate(word));
                transliteratorJson[count] = new TransliteratorJson(word, enUs, transliterator.transliterate(word));
                count++;
            }

            mapper.writeValue(new File(outputFilename), transliteratorJson);
        } catch (IOException e) {
            e.printStackTrace();
        }

    }

    public static void main(String[] args) {
        // Create a transliterator object for Greek to Latin script
        Transliterator transliterator = Transliterator.getInstance("Greek-Latin");
        App.transliterateList(transliterator, "../../word-lists/el-list.json", "../../word-lists/el-list-tl.json");

        Transliterator transliteratorHangul = Transliterator.getInstance("Hangul-Latin");
        App.transliterateList(transliteratorHangul, "../../word-lists/ko-list.json", "../../word-lists/ko-list-tl.json");

        Transliterator transliteratorHan = Transliterator.getInstance("Han-Latin");
        App.transliterateList(transliteratorHan, "../../word-lists/zh-list.json", "../../word-lists/zh-list-tl.json");

        Transliterator transliteratorCyr = Transliterator.getInstance("Cyrillic-Latin");
        App.transliterateList(transliteratorCyr, "../../word-lists/uk-list.json", "../../word-lists/uk-list-tl.json");
        App.transliterateList(transliteratorCyr, "../../word-lists/bg-list.json", "../../word-lists/bg-list-tl.json");

    }
}
