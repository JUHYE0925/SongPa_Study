package looping_and_condition;

import java.util.Scanner;

public class Practice4 {

    public void practice4(){

        /*
        * 1부터 입력 받은 정수까지의 짝수의 합을 출력하세요.
        *
        * -- 입력 예시 --
        * 정수를 입력하세요 : 10
        *
        * -- 출력 예시 --
        * 1부터 10까지 짝수의 합 : 30
        */

        Scanner sc = new Scanner(System.in);
        System.out.println("정수 한 개를 입력해주세요. : ");
        int num = sc.nextInt();

        int sum = 0;
        for(int i = 1; i <= num; i++){
            if(i % 2 == 0){
                sum += i;
            } else {
                continue;
            }
        }
        System.out.println("1부터 입력받은 " + num + "까지의 짝수의 합은 " + sum + "입니다.");

    }
}
