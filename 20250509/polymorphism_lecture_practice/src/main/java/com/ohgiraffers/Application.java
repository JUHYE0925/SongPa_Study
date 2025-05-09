package com.ohgiraffers;

import java.util.Scanner;

public class Application {

    public static void main(String[] args) {

        MusicApp[] user = new MusicApp[3];
        user[0] = new Dancer();
        user[1] = new Singer();
        user[2] = new Student();

        Scanner sc = new Scanner(System.in);
        System.out.println("당신의 계정을 선택해주세요 : ");
        System.out.println(" 1. Dancer / 2. Singer / 3. Student ");
        int account = sc.nextInt();

        if(account == 1) {
            while (true) {
                System.out.println("================ 노래 듣기 프로그램 ================");
                System.out.println("1. 어플 켜기");
                System.out.println("2. 첫 번째 곡 선택하기");
                System.out.println("3. 첫 번째 곡 실행하기");
                System.out.println("4. 곡 정지하기");
                System.out.println("5. 어플 종료하기");
                System.out.println("9. 프로그램 종료하기");
                System.out.println("메뉴 선택 : ");
                int num = sc.nextInt();

                switch (num) {
                    case 1:
                        user[0].startApp();
                        break;
                    case 2:
                        user[0].chooseFisrtSong();
                        break;
                    case 3:
                        user[0].playFisrtSong();
                        break;
                    case 4:
                        user[0].stopTheSong();
                        break;
                    case 5:
                        user[0].finishTheApp();
                        break;
                    case 9:
                        System.out.println("프로그램을 종료합니다.");
                        break;
                    default:
                        System.out.println("잘못된 번호를 선택하셨습니다.");
                        break;
                }
                if (num == 9) {
                    break;
                }
            }
        } else if(account == 2){
            while (true) {
                System.out.println("================ 노래 듣기 프로그램 ================");
                System.out.println("1. 어플 켜기");
                System.out.println("2. 첫 번째 곡 선택하기");
                System.out.println("3. 첫 번째 곡 실행하기");
                System.out.println("4. 곡 정지하기");
                System.out.println("5. 어플 종료하기");
                System.out.println("9. 프로그램 종료하기");
                System.out.println("메뉴 선택 : ");
                int num = sc.nextInt();

                switch (num) {
                    case 1:
                        user[1].startApp();
                        break;
                    case 2:
                        user[1].chooseFisrtSong();
                        break;
                    case 3:
                        user[1].playFisrtSong();
                        break;
                    case 4:
                        user[1].stopTheSong();
                        break;
                    case 5:
                        user[1].finishTheApp();
                        break;
                    case 9:
                        System.out.println("프로그램을 종료합니다.");
                        break;
                    default:
                        System.out.println("잘못된 번호를 선택하셨습니다.");
                        break;
                }
                if (num == 9) {
                    break;
                }
            }
        } else if(account == 3){
            while (true) {
                System.out.println("================ 노래 듣기 프로그램 ================");
                System.out.println("1. 어플 켜기");
                System.out.println("2. 첫 번째 곡 선택하기");
                System.out.println("3. 첫 번째 곡 실행하기");
                System.out.println("4. 곡 정지하기");
                System.out.println("5. 어플 종료하기");
                System.out.println("9. 프로그램 종료하기");
                System.out.println("메뉴 선택 : ");
                int num = sc.nextInt();

                switch (num) {
                    case 1:
                        user[2].startApp();
                        break;
                    case 2:
                        user[2].chooseFisrtSong();
                        break;
                    case 3:
                        user[2].playFisrtSong();
                        break;
                    case 4:
                        user[2].stopTheSong();
                        break;
                    case 5:
                        user[2].finishTheApp();
                        break;
                    case 9:
                        System.out.println("프로그램을 종료합니다.");
                        break;
                    default:
                        System.out.println("잘못된 번호를 선택하셨습니다.");
                        break;
                }
                if (num == 9) {
                    break;
                }
            }
        } else{
            System.out.println("위의 세 계정 중에서 골라 선택해주세요.");
        }
    }
}