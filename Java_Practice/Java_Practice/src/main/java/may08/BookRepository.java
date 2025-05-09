package may08;

public class BookRepository {

    private final static Book[] novelBooks;
    private final static Book[] comicBooks;
    private final static Book[] essayBooks;
    private final static Book[] peomBooks;

    private static int novelCount;
    private static int comicCount;
    private static int essayCount;
    private static int poemCount;

    static {
        novelBooks = new Book[10];
        comicBooks = new Book[10];
        essayBooks = new Book[10];
        peomBooks = new Book[10];
    }

    public static boolean storeNovel(Book[] newBook){
        for(int i = 0; i < newBook.length; i++) {
            if (newBook[i].getCategory().equals("소설")) {
                novelBooks[novelCount++] = newBook[i];
            }
        }

        return true;
    }
}
