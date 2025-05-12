package may08;

public class BookService {

    public void registBook(){

        // comic, novel, essay, peom 으로 객체 생성한 후 각각 고유의 필드 값을 초기화하기
        Book[] books = new Book[12];
        books[0] = new Book(1, "동백꽃", "김유정", "칼로스", "소설");
        books[1] = new Book(2, "주술회전", "아쿠타미 게게", "서울미디어코믹스", "만화");
        books[2] = new Book(3, "소설이 온다", "한강", "창비", "소설");
        books[3] = new Book(4, "함께 가는 길은 외롭지 않습니다.", "이재명", "위즈덤하우스", "에세이");
        books[4] = new Book(5, "미키 마우스, 오늘부터 멋진 인생이 시작될거야", "미키 마우스", "알에이치코리아", "에세이");
        books[5] = new Book(6, "김완하의 시 속의 시 읽기9", "김완하", "시와정신사", "시");
        books[6] = new Book(7, "새는 봄을 기다리지 않는다.", "한동혁", "차안", "만화");
        books[7] = new Book(8, "빛과 실", "한강", "문학과 지성", "에세이");
        books[8] = new Book(9, "스토너", "존 윌리엄스", "알에이치코리아", "소설");
        books[9] = new Book(10, "하늘과 바람과 별과 시", "윤동주", "자화상", "시");
        books[10] = new Book(11, "단 한 번의 삶", "김영하", "복복서가", "에세이");
        books[11] = new Book(12, "모순", "양귀자", "쓰다", "소설");

        BookRegister bookRegister = new BookRegister();

        for(int i = 0; i < books.length; i++){
            switch(books[i].getCategory()){
                case "소설" : bookRegister.registNovel(books);
            }
        }

    }



}
