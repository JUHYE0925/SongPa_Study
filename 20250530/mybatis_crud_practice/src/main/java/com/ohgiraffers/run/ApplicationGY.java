// com.ohgiraffers.run.ApplicationGY
package com.ohgiraffers.run;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;
import com.ohgiraffers.publisher.controller.AuthorControllerGY;

public class ApplicationGY {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        AuthorControllerGY authorController = new AuthorControllerGY();

        do {
            System.out.println("\n===== 작가 관리 시스템 =====");
            System.out.println("1. 전체 작가 조회");
            System.out.println("2. 선택 작가 조회");
            System.out.println("3. 신규 작가 등록");
            System.out.println("4. 작가 정보 수정");
            System.out.println("5. 선택 작가 삭제");
            System.out.println("9. 프로그램 종료");
            System.out.print("메뉴 선택 : ");
            int no = sc.nextInt();
            sc.nextLine(); // 개행 버퍼 제거

            switch (no) {
                case 1:
                    authorController.selectAllAuthors();
                    break;
                case 2:
                    authorController.selectAuthorById(inputAuthorId());
                    break;
                case 3:
                    authorController.insertAuthor(inputNewAuthor());
                    break;
                case 4:
                    authorController.updateAuthor(inputUpdateAuthorInfo());
                    break;
                case 5:
                    authorController.deleteAuthor(inputAuthorId());
                    break;
                case 9:
                    System.out.println("프로그램을 종료합니다.");
                    return;
                default:
                    System.out.println("잘못된 메뉴 번호입니다.");
                    break;
            }
        } while (true);
    }

    private static Map<String, String> inputAuthorId() {
        Scanner sc = new Scanner(System.in);
        System.out.print("작가 코드 입력 : ");
        String authorId = sc.nextLine();

        Map<String, String> params = new HashMap<>();
        params.put("authorId", authorId);
        return params;
    }

    private static Map<String, String> inputNewAuthor() {
        Scanner sc = new Scanner(System.in);
        Map<String, String> params = new HashMap<>();

        System.out.print("작가 이름 : ");
        params.put("name", sc.nextLine());

        System.out.print("수상 여부 (Y/N) : ");
        String awardedInput = sc.nextLine().toUpperCase();
        params.put("awarded", awardedInput.equals("Y") ? "1" : "0");

        System.out.print("담당 직원 사번 : ");
        String empId = sc.nextLine();
        if (!empId.isEmpty()) {
            params.put("empId", empId);
        }

        return params;
    }

    private static Map<String, String> inputUpdateAuthorInfo() {
        Scanner sc = new Scanner(System.in);
        Map<String, String> params = new HashMap<>();

        System.out.print("수정할 작가 코드 : ");
        params.put("authorId", sc.nextLine());

        System.out.print("작가 이름 : ");
        params.put("name", sc.nextLine());

        System.out.print("수상 여부 (Y/N) : ");
        String awardedInput = sc.nextLine().toUpperCase();
        params.put("awarded", awardedInput.equals("Y") ? "1" : "0");

        System.out.print("새 담당 직원 사번 : ");
        String empId = sc.nextLine();
        if (!empId.isEmpty()) {
            params.put("empId", empId);
        }

        return params;
    }
}
