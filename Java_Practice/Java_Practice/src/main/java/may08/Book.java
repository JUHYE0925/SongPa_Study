package may08;

public class Book {

    private int bookNum;
    private String bookName;
    private String author;
    private String publisher;
    private final static String CATEGORY_NOVEL = "소설";
    private final static String CATEGORY_COMIC = "만화";
    private final static String CATEGORY_ESSAY = "에세이";
    private final static String CATEGORY_PEOM = "시";
    private static int categoryCount;

    public Book(){}

    public Book(int bookNum, String bookName, String author, String publisher) {
        this.bookNum = bookNum;
        this.bookName = bookName;
        this.author = author;
        this.publisher = publisher;
    }

    public int getBookNum() {
        return bookNum;
    }

    public void setBookNum(int bookNum) {
        this.bookNum = bookNum;
    }

    public String getBookName() {
        return bookName;
    }

    public void setBookName(String bookName) {
        this.bookName = bookName;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getPublisher() {
        return publisher;
    }

    public void setPublisher(String publisher) {
        this.publisher = publisher;
    }

    public static int getCategoryCount() {
        return categoryCount;
    }

    public static void setCategoryCount(int categoryCount) {
        Book.categoryCount = categoryCount;
    }

    public String getInformation() {
        return "Book{" +
                "bookNum=" + bookNum +
                ", bookName='" + bookName + '\'' +
                ", author='" + author + '\'' +
                ", publisher='" + publisher + '\'' +
                '}';
    }


}
