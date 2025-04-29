package looping_and_condition;

import java.util.Scanner;

public class Practice7 {

    public void practice7(){

        /*
        * 정수를 입력받아 1부터 입력받은 정수까지
        * 홀수이면 "토", 짝수이면 "마"가 정수만큼 누적되어 출력되도록 하세요.
        *
        * -- 입력 예시 --
        * 정수를 입력하세요 : 5
        *
        * -- 출력 예시 --
        * 토마토마토
        */

        Scanner sc = new Scanner(System.in);
        System.out.println("정수를 입력해주세요. : ");
        int num = sc.nextInt();

        for(int i = 1; i <= num; i++){
            if(i % 2 != 0){
                System.out.print("토");
            } else {
                System.out.print("마");
            }
        }



    }
}
