package com.ohgiraffers.run;

import com.ohgiraffers.publisher.controller.AuthorControllerJH;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Application {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        AuthorControllerJH authorController = new AuthorControllerJH();

        do {

            System.out.println("============= 작가 관리 프로그램 =============");
            System.out.println("1. 전체 작가 정보 불러오기 : ");
            System.out.println("2. 특정 작가 정보 불러오기 : ");
            System.out.println("3. 새 작가 등록하기 : ");
            System.out.println("4. 작가 정보 수정하기 : ");
            System.out.println("5. 작가 정보 삭제하기 : ");
            System.out.println("9. 프로그램 종료하기 ");
            System.out.println("===========================================");
            System.out.print("메뉴 번호를 입력해주세요 :  ");
            int no = sc.nextInt();

            switch (no){
                case 1 : authorController.selectAllAuthor(); break;
                case 2 : authorController.selectAuthorByAuthorId(inputAuthorId()); break;
                case 3 : authorController.registNewAuthor(inputAuthorInfo()); break;
                case 4 : authorController.modifyAuthorInfo(modifyAuthorInfo()); break;
                case 5 : authorController.deleteAuthorInfo(deleteAuthorId()); break;
                case 9 : break;
            }

            if(no == 9){
                System.out.println("프로그램을 종료합니다.");
                break;
            }
        }while (true);

    }

    private static int inputAuthorId(){

        Scanner sc = new Scanner(System.in);

        AuthorControllerJH authorController = new AuthorControllerJH();

        System.out.println();
        authorController.selectAllAuthorIdAndName();
        System.out.print("조회할 작가의 번호를 입력해주세요 : ");
        int authorId = sc.nextInt();

        return authorId;
    }

    private static Map<String, String> inputAuthorInfo(){

        AuthorControllerJH authorController = new AuthorControllerJH();

        Scanner sc = new Scanner(System.in);
        System.out.println();
        System.out.println("작가 이름을 입력해주세요 : ");
        String authorName = sc.nextLine();
        System.out.println("작가의 수상 이력 여부를 입력해주세요(Y/N) : ");
        String isAwarded = sc.nextLine();

        authorController.selectAllEmployee();
        System.out.print("작가 담당 직원의 사번을 입력해주세요 : ");
        String empId = sc.nextLine();
        System.out.println();

        Map<String, String> parameter = new HashMap<>();
        parameter.put("authorName", authorName);
        parameter.put("isAwarded", isAwarded);
        parameter.put("empId", empId);

        return parameter;

    }

    private static Map<String, String> modifyAuthorInfo(){

        Scanner sc = new Scanner(System.in);

        AuthorControllerJH authorController = new AuthorControllerJH();

        authorController.selectAllAuthorIdAndName();
        System.out.print("수정할 작가의 번호를 입력해주세요 : ");
        String authorId = sc.nextLine();

        System.out.println();
        System.out.println("=================");
        System.out.println("1. 이름");
        System.out.println("2. 수상 이력");
        System.out.println("3. 둘 다");
        System.out.println("=================");
        System.out.println("수정할 작가의 정보를 선택하세요 : ");
        int menuNum = sc.nextInt();

        Map<String, String> parameter = new HashMap<>();
        parameter.put("authorId", authorId);

        System.out.println();
        switch (menuNum){
            case 1 :
                sc.nextLine();
                System.out.println("수정할 이름을 입력하세요 : ");
                String authorName = sc.nextLine();
                parameter.put("authorName", authorName);
                parameter.put("isAwarded", null);
                break;
            case 2 :
                sc.nextLine();
                System.out.println("수정할 수상 이력을 입력하세요(Y/N) :");
                String isAwarded = sc.nextLine();
                parameter.put("isAwarded", isAwarded);
                parameter.put("authorName", "");
                break;
            case 3 :
                sc.nextLine();
                System.out.println("수정할 이름을 입력하세요 : ");
                String authorName2 = sc.nextLine();
                System.out.println("수정할 수상 이력을 입력하세요(Y/N) :");
                String isAwarded2 = sc.nextLine();
                parameter.put("authorName", authorName2);
                parameter.put("isAwarded", isAwarded2);
        }

        return parameter;

    }

    private static int deleteAuthorId(){

        Scanner sc = new Scanner(System.in);

        AuthorControllerJH authorController = new AuthorControllerJH();

        System.out.println();
        authorController.selectAllAuthorIdAndName();
        System.out.print("삭제할 작가의 번호를 입력해주세요 : ");
        int authorId = sc.nextInt();

        return authorId;

    }

}
