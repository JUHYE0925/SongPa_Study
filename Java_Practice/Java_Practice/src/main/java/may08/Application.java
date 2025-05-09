package may08;

import java.util.Scanner;

public class Application {

    public static void main(String[] args) {

        /* comment. 상속, 오버라이딩, 객체배열, final, static 사용하기 */

        /*
        * 도서관 시스템
        *
        * 1. 도서 정보를 입력받아 등록한다.  -> 도서번호, 도서명, 카테고리(소설, 만화, 에세이, 시), 저자, 출판사
        * 2. 도서 정보를 전체 조회할 수 있다.
        * 3. 도서 정보를 도서 번호를 통해 상세 조회할 수 있다.
        * 4. 도서를 도서 번호를 통해 도서명을 수정할 수 있다.
        */

        /*
        * 1번 -> 정보 등록
        * 2번 -> 도서 정보 전체 조회
        * 3번 -> 도서 정보 상세 조회 by 도서 번호
        * 4번 -> 도서명 수정 by 도서 번호
        */

        /*
        * 설계
        * 1. Book 클래스(부모 클래스) 하위 카테고리 자식 클래스(소설, 만화, 에세이, 시)
        * 2. Book 클래스 필드 : 도서번호, 도서명, 저자, 출판사, 카테고리명(final static), 도서 수(static) / 메소드 : 도서 정보 출력
        * 3. 오버라이딩 메소드 : 도서 정보 출력, 카테고리별 도서 수 출력(static)
        * 4. 소설 클래스 필드 : 장르 / 메소드 : 장르 출력
        * 5. 만화 클래스 필드 : 컬러 / 메소드 : 흑밸/컬러 여부 문자열로 반환
        * 6. 에세이 클래스 필드 : 주제 / 메소드 : 에세이 주제 출력
        * 7. 시 필드 : 장르 / 메소드 : 장르 출력
        */

        Scanner sc = new Scanner(System.in);

        BookService bookService = new BookService();

        while(true){
            System.out.println("============= 도서 관리 프로그램 =============");
            System.out.println("1. 도서 등록");
            System.out.println("2. 도서 전체 조회");
            System.out.println("3. 소설 조회");
            System.out.println("4. 만화 조회");
            System.out.println("5. 에세이 조회");
            System.out.println("6. 시 조회");
            System.out.println("9. 프로그램 종료");
            System.out.println("메뉴 선택 : ");
            int no = sc.nextInt();

            switch(no){
                case 1 : bookService.registBook(); break;
                case 2 :
                case 3 :
                case 4 :
                case 5 :
                case 6 :
                case 9 :
                    System.out.println("프로그램을 종료합니다."); return;
                default :
                    System.out.println("잘못된 번호를 입력하셨습니다."); break;
            }
        }





    }

}
