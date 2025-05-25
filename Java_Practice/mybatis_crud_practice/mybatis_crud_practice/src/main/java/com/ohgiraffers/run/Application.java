package com.ohgiraffers.run;

import com.ohgiraffers.controller.PublisherController;

import java.util.Scanner;

public class Application {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        PublisherController publisherController = new PublisherController();

        do{

            System.out.println("=========== 출판사 직원 관리 ===========");
            System.out.println("1. 직원 전체 조회 : ");
            System.out.println("2. 직원 상세 조회 : ");
            System.out.println("3. 신규 직원 등록 : ");
            System.out.println("4. 직원 정보 수정 : ");
            System.out.println("5. 직원 정보 삭제 : ");
            System.out.println("직원 관리 번호를 입력하세요 : ");
            int no = sc.nextInt();

            switch(no){
                case 1 : publisherController.selectAllEmp(); break;
                case 2 :
                case 3 :
                case 4 :
                case 5 :
                default :
                    System.out.println("잘못된 번호를 입력하였습니다."); break;
            }

        } while(true);

    }
}
