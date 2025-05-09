package may08;

public class Book {

    private int bookNum;
    private String bookName;
    private String author;
    private String publisher;
    private String category;
    private static int categoryCount;

    public Book(){}

    public Book(int bookNum, String bookName, String author, String publisher, String category) {
        this.bookNum = bookNum;
        this.bookName = bookName;
        this.author = author;
        this.publisher = publisher;
        this.category = category;
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

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public static int getCategoryCount() {
        return categoryCount;
    }

    public static void setCategoryCount(int categoryCount) {
        Book.categoryCount = categoryCount;
    }

    @Override
    public String toString() {
        return "Book{" +
                "bookNum=" + bookNum +
                ", bookName='" + bookName + '\'' +
                ", author='" + author + '\'' +
                ", publisher='" + publisher + '\'' +
                ", category='" + category + '\'' +
                '}';
    }
}
