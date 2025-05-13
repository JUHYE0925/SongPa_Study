package may12;

import java.util.Scanner;

public class Practice2 {

    public static void main(String[] args) {

        /*
        * - 문제 설명
        * 순서쌍이란 두 개의 숫자를 순서를 정하여 짝지어 나타낸 쌍으로 (a, b)로 표기합니다.
        * 자연수 n이 매개변수로 주어질 때 두 숫자의 곱이 n인 자연수 순서쌍의 개수를 return하도록
        * solution 함수를 완성해주세요.
        *
        * - 제한사항
        * 1 ≤ n ≤ 1,000,000
        *
        * - 입출력 예
        * n	   result
        * 20	  6
        * 100	  9
        *
        * - 입출력 예 설명
        * 입출력 예 #1
        * n이 20 이므로 곱이 20인 순서쌍은
        * (1, 20), (2, 10), (4, 5), (5, 4), (10, 2), (20, 1) 이므로 6을 return합니다.
        *
        * 입출력 예 #2
        * n이 100 이므로 곱이 100인 순서쌍은
        * (1, 100), (2, 50), (4, 25), (5, 20), (10, 10), (20, 5), (25, 4), (50, 2), (100, 1) 이므로
        * 9를 return합니다.
        */

        Scanner sc = new Scanner(System.in);
        System.out.println("숫자를 입력해주세요. : ");
        int num = sc.nextInt();
        
        Practice2 pr2 = new Practice2();
//        int result1 = pr2.solution1(num);
        int result2 = pr2.solution2(num);

//        System.out.println("result1 = " + result1);
        System.out.println("result2 = " + result2);


    }

    // 성능 문제가 있음. 불필요한 과정이 많음.
    public int solution1(int num){

        int count = 0;
        
        for(int i = 1; i <= num; i++){
            for(int j = 1; j <= num; j++){
                if(i * j == num){
                    count++;
                }
            }
        }
        

        return count;
    }

//    public int solution2(int num){
//
//        int count = 0;
//
//        for(int i = 1; i <= num; i++){
//            if(num % i == 0){
//                count++;
//            }
//        }
//
//
//        return count;
//    }

    public int solution2(int num) {
        int count = 0;

        // 1부터 sqrt(num)까지 반복
        for (int i = 1; i * i <= num; i++) {
            if (num % i == 0) {
                count++; // i는 약수

                // i와 num / i가 다르면, num / i도 약수
                if (i != num / i) {
                    count++;
                }
            }
        }

        return count;
    }

}
