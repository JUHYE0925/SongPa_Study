package com.ohgiraffers.hw1.view;

import com.ohgiraffers.hw1.controller.BookManager;
import com.ohgiraffers.hw1.model.dto.BookDTO;

import java.util.Scanner;

public class BookMenu {

    private Scanner sc = new Scanner(System.in);
    private BookManager bm = new BookManager();

    public BookMenu(){}

    public void menu(){

        while(true){

        System.out.println("*** 도서 관리 프로그램 ***");
        System.out.println("1. 새 도서 추가");
        System.out.println("2. 도서 정보 정렬 후 출력");
        System.out.println("3. 도서 삭제");
        System.out.println("4. 도서 검색 출력");
        System.out.println("5. 전체 출력");
        System.out.println("6. 끝내기");
        System.out.println("************************");
        System.out.println("메뉴를 선택하세요 : ");
        int num = sc.nextInt();

            switch (num){
                case 1 : bm.addBook(inputBook()); break;
                case 2 :
                    System.out.println("정렬 방식을 선택해주세요. : ");
                    System.out.print("1. 오름차순 / 2. 내림차순 ");
                    int sortType = sc.nextInt();
                    bm.printBookList(bm.sortedBookList(sortType)); break;
                case 3 :
                    sc.nextLine();
                    System.out.println("삭제할 도서 제목을 입력해주세요 : ");
                    String deleteBook = sc.nextLine();
                    int result = bm.deleteBook(bm.searchBook(deleteBook));

                    if(result != -1){
                        System.out.println("해당 도서를 성공적으로 삭제했습니다.");
                    } else {
                        System.out.println("삭제할 도서가 존재하지 않습니다.");
                    }
                    break;
                case 4 :
                    int searchResult = bm.searchBook(inputBookTitle());
                    if(searchResult != -1){
                        bm.printBook(searchResult);
                    } else {
                        System.out.println("출력할 도서가 없습니다.");
                    }
                    break;
                case 5 : bm.displayAll(); break;
                case 6 :
                    System.out.println("프로그램일 종료합니다."); break;
            }
        }
    }

    public BookDTO inputBook(){

        int bookNo = (int) (Math.random() * 100) + 1;

        System.out.println("새로운 도서를 추가합니다.");
        System.out.println("도서 번호는 " + bookNo + "입니다.");
        System.out.println("추가할 도서 제목을 입력해주세요 : ");
        String bookTitle = sc.next();
//        sc.nextLine();
        System.out.println("추가할 도서의 장르를 선택해주세요 :  ");
        System.out.print(" 1. 인문 / 2. 자연과학 / 3. 의료 / 4. 기타 ");
        int bookGenre = sc.nextInt();
        sc.nextLine();
        System.out.println("추가할 도서 저자를 입력해주세요. : ");
        String bookAuthor = sc.nextLine();

        BookDTO newBook = new BookDTO(bookNo, bookGenre, bookTitle, bookAuthor);

        return newBook;

    }

    public String inputBookTitle(){

        String bookTitle = "";

        System.out.println("도서 제목을 입력해주세요 : ");
        bookTitle = sc.next();

        return bookTitle;
    }
}
