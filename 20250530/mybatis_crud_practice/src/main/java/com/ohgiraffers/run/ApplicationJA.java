package com.ohgiraffers.run;

import com.ohgiraffers.publisher.controller.AuthorControllerJA;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class ApplicationJA {
    public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    AuthorControllerJA authorController = new AuthorControllerJA();
    System.out.println("====+ 희망출판사 작가 관리 프로그램 +====");
    System.out.println("1. Create : 새 작가 데이터 등록");
    System.out.println("2. Read (All) : 전체 작가 목록 조회");
    System.out.println("3. Read (One) : 단건 조회 (상세 보기)");
    System.out.println("4. Update : 기존 데이터 수정");
    System.out.println("5. Delete : 작가 계약 종료(데이터 삭제)");
    System.out.println("9. 프로그램 종료");
    System.out.print("번호 입력 : ");
    int no = sc.nextInt();

    switch (no) {
        case 1: authorController.createNewAuthor(inputAuthor());break;
        case 2: authorController.readAllAuthor(); break;
        case 3: authorController.readOneAuthorById(inputAuthorId()); break;
        case 4: authorController.updateAuthorInfo(inputUpdateInfo()); break;
        case 5: authorController.deleteAuthorInfo(deleteAuthor()); break;
        case 9:
            System.out.println("프로그램 종료"); return;
    }
    }

    private static Map<String, String> inputAuthor() {
        Scanner sc = new Scanner(System.in);
        System.out.print("작가코드 입력 (5번부터) : ");
        String authorId = sc.nextLine();
        System.out.print("작가이름 입력 : ");
        String authorName = sc.nextLine();
        System.out.print("수상내역 여부 (true/false) : ");
        Boolean awarded = Boolean.valueOf(sc.nextLine());
        System.out.print("담당 직원 사번 입력(300...) : ");
        String empId = sc.nextLine();

        Map<String, String> parameter = new HashMap<>();
        parameter.put("authorId", authorId);
        parameter.put("authorName", authorName);
        parameter.put("awarded", String.valueOf(awarded));
        parameter.put("empId", empId);

        return parameter;
    }

    private static Map<String, String> inputAuthorId() {
        Scanner sc = new Scanner(System.in);
        System.out.print("작가코드 입력 (1...) : ");
        String authorId = sc.nextLine();

        Map<String, String> parameter = new HashMap<>();
        parameter.put("authorId", authorId);

        return parameter;
    }


    private static Map<String, String> inputUpdateInfo() {
        Scanner sc = new Scanner(System.in);
        System.out.print("작가 코드 입력 : ");
        String editAuthorId = sc.nextLine();
        System.out.print("수상내역이 추가되었나요? (true/false) : ");
        String editAwarded = sc.nextLine();
        System.out.print("담당직원 사번(300-) : ");
        String editEmpId = sc.nextLine();

        Map<String, String> parameter = new HashMap<>();
        parameter.put("editAuthorId", editAuthorId);
        parameter.put("editAwarded", editAwarded);
        parameter.put("editEmpId", editEmpId);

        return parameter;
    }


    private static int deleteAuthor() {
        Scanner sc = new Scanner(System.in);
        System.out.print("계약 종료된 작가 코드 입력 : ");
        int authorId = sc.nextInt();
        return authorId;
    }
}
