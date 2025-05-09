package may08;

public class BookRegister {

    public void registNovel(Book[] books) {

        System.out.println("소설을 등록합니다.");

        for(int i = 0; i < books.length; i++){
            System.out.println(books[i].getBookName() + " 도서 등록을 성공했습니다.");
        }

        if(BookRepository.storeNovel(books)){
            System.out.println("소설은 총 " + books.length + "권 등록되었습니다.");
        }





    }
}
