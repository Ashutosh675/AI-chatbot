import org.springframework.stereotype.Repository;
import com.bernardomg.example.repository.EmbeddingRepository;

@Repository
public class EmbeddingRepositoryImpl implements EmbeddingRepository {

    @Override
    public void storeEmbedding(String text, float[] embedding) {
        // Store the embedding in the vector database along with metadata (text)
        // Replace this with actual code to store embeddings
        System.out.println("Storing embedding for text: " + text);
        System.out.println("Embedding: " + Arrays.toString(embedding));
    }
}
