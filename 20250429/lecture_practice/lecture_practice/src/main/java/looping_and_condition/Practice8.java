package looping_and_condition;

import java.util.Scanner;

public class Practice8 {

    public void practice8(){

        /*
        * 정수형 변수 두 개를 선언하고, 사용자로부터 각각 값을 입력받은 후,
        * 다음 연산을 순서대로 출력하세요.
        *
        * 첫 번째 반복: 더하기
        *
        * 두 번째 반복: 빼기
        *
        * 세 번째 반복: 곱하기
        *
        * 네 번째 반복: 나누기(몫)
        *
        * 다섯 번째 반복: 나누기(나머지)
        *
        * 단, 나눗셈과 나머지 연산 시 0으로 나누는 경우 "0으로 나눌 수 없습니다"라는
        * 메시지를 출력하도록 처리하세요.
        *
        * -- 출력 예시 --
        * =============================
        * 첫 번째 정수를 입력하세요: 20
        * 두 번째 정수를 입력하세요: 30
        * 더하기 결과 : 50
        * 빼기 결과 : -10
        * 곱하기 결과 : 600
        * 나누기한 몫 : 0
        * 나누기한 나머지 : 20
        * ==============================
        */

        Scanner sc = new Scanner(System.in);
        System.out.println("첫 번째 숫자를 입력해주세요. : ");
        int first = sc.nextInt();
        System.out.println("두번째 숫자를 입력해주세요. : ");
        int second = sc.nextInt();

        for(int i = 1; i <= 5; i++){

            if(i == 1){
                System.out.println("더하기 결과 : " + (first + second));
            } else if (i == 2){
                System.out.println("빼기 결과 : " + (first - second));
            } else if (i == 3){
                System.out.println("곱하기 결과 : " + (first * second));
            } else if (i == 4){
                if(first != 0 && second != 0){
                    System.out.println("나누기 한 몫 : " + (first / second));
                } else {
                    System.out.println("0으로 나눌 수 없습니다.");
                }
            } else if (i == 5){
                if(first != 0 && second != 0){
                    System.out.println("나누기한 나머지 : " + (first % second));
                } else {
                    System.out.println("0으로 나눌 수 없습니다.");
                }
            }
        }

        System.out.println("========== switch로 변경하기 ==========");

        for(int i = 1; i <= 5; i++){

            switch(i){
                case 1 :
                    System.out.println("더하기 결과 : " + (first + second)); break;
                case 2 :
                    System.out.println("빼기 결과 : " + (first - second)); break;
                case 3 :
                    System.out.println("곱하기 결과 : " + (first * second)); break;
                case 4 :
                    if(first != 0 && second != 0){
                        System.out.println("나누기 한 몫 : " + (first / second));
                    } else {
                        System.out.println("0으로 나눌 수 없습니다.");
                    } break;
                case 5 :
                    if(first != 0 && second != 0){
                        System.out.println("나누기한 나머지 : " + (first % second));
                    } else {
                        System.out.println("0으로 나눌 수 없습니다.");
                    } break;
            }
        }
    }
}
