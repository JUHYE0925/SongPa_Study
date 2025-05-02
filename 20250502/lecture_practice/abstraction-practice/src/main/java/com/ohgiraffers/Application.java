package com.ohgiraffers;

import java.util.Scanner;

public class Application {

    public static void main(String[] args) {

        Master master = new Master();

        Scanner sc = new Scanner(System.in);

        while(true){
            System.out.println("============ 산책 프로그램 ============");
            System.out.println("1. 산책/걷기 시작");
            System.out.println("2. 달리기 시작");
            System.out.println("3. 강아지 배변활동 기다리기");
            System.out.println("4. 달리기 멈춤");
            System.out.println("5. 산책/걷기 끝");
            System.out.println("9. 프로그램 종료");
            System.out.println("메뉴 선택 : ");
            int no = sc.nextInt();

            switch(no){
                case 1 : master.startWalk(); break;
                case 2 : master.startRun(); break;
                case 3 : master.waitPet(); break;
                case 4 : master.stopRun(); break;
                case 5 : master.stopWalk(); break;
                case 9 :
                    System.out.println("프로그램을 종료합니다."); break;
                default :
                    System.out.println("1번부터 5번까지의 번호를 입력해주세요."); break;
            }

            if(no == 9){
                break;
            }

        }

    }
}
