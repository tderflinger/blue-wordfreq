package blue.transliterator;
import com.ibm.icu.text.Transliterator;
import java.io.File;
import java.io.IOException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.JsonNode;

public class App {

    public static void main(String[] args) {
        // Create a transliterator object for Greek to Latin script
        Transliterator transliterator = Transliterator.getInstance("Greek-Latin");

        // The input string to be transliterated
        String input = "Καλημέρα κόσμε!";

        // Transliterate the input string from Greek to Latin script
        String output = transliterator.transliterate(input);

        TransliteratorJson[] transliteratorJson = new TransliteratorJson[1010];

        // Print the transliterated output
        System.out.println(output);

        ObjectMapper mapper = new ObjectMapper();

        try {
            // Read the JSON file into a JsonNode object
            JsonNode rootNode = mapper.readTree(new File("/Users/td/Pro/projects/blue-wordfreq/word-lists/el-list.json"));

            int count = 0;

            for (JsonNode node : rootNode) {
                String word = node.get("word").asText();
                String enUs = node.get("en").asText();

                System.out.println("Word: " + word);
                System.out.println("en-us: " + enUs);
                System.out.println("Transliteration: " + transliterator.transliterate(word));
                transliteratorJson[count] = new TransliteratorJson(word, enUs, transliterator.transliterate(word));
                count++;
            }

            mapper.writeValue(new File("/Users/td/Pro/projects/blue-wordfreq/word-lists/el-list-tl.json"), transliteratorJson);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
