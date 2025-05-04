package april27;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;


public class Practice3 {

    public static void main(String[] args) {

        /* 문제3 : 자연수 뒤집어 배열로 만들기 */

        /*
         * - 문제 설명
         *   자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요.
         *   예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.
         * - 제한 조건
         *   n은 10,000,000,000이하인 자연수입니다.
         * - 입출력 예
         *   n	    return
         *   12345	[5,4,3,2,1]
         */

        Scanner sc = new Scanner(System.in);
        System.out.println("10,000,000,000 이하의 자연수를 입력해주세요.");
        long number = sc.nextInt();
        List<Integer> list = new ArrayList<>();

        while(number > 0){
            list.add((int)(number % 10));
            number /= 10;
        }

        System.out.println(list);
        sc.close();

    }
}
