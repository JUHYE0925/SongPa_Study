package April27;

import java.util.Scanner;

public class Practice1 {

    public static void main(String[] args) {

        /* 문제 1 : 약수의 합 */

        /*
        * - 문제 설명
        *   정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.
        * - 제한 사항
        *   n은 0 이상 3000이하인 정수입니다.
        * - 입출력 예
        *   n	  return
        *   12	28
        *   5	  6
        * - 입출력 예 설명
        *   입출력 예 #1
        *   12의 약수는 1, 2, 3, 4, 6, 12입니다. 이를 모두 더하면 28입니다.
        * - 입출력 예 #2
        *   5의 약수는 1, 5입니다. 이를 모두 더하면 6입니다.
        */

        Scanner sc = new Scanner(System.in);
        System.out.println("0 이상  3000이하인 정수를 입력해주세요.");
        int number = sc.nextInt();

        Practice1 practice1 = new Practice1();
        int result = practice1.solution(number);
        System.out.println("약수의 합 : " + result);

        sc.close();
    }

    public int solution(int n){
        int result = 0;

        for(int i = 1; i <= n / 2; i++){
            if(n % i == 0){
                result += i;
            }
        }

        return result + n;
    }

}
