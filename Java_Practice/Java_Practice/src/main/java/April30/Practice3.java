package april30;

import java.util.Arrays;

public class Practice3 {

    public static void main(String[] args) {

        /* 문제12 : 짝수 홀수 개수 */

        /*
        * - 문제 설명
        * 정수가 담긴 리스트 num_list가 주어질 때, num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.
        *
        * - 제한사항
        * 1 ≤ num_list의 길이 ≤ 100
        * 0 ≤ num_list의 원소 ≤ 1,000
        *
        * - 입출력 예
        * num_list	       result
        * [1, 2, 3, 4, 5]	 [2, 3]
        * [1, 3, 5, 7]	   [0, 4]
        *
        * - 입출력 예 설명
        * 입출력 예 #1
        * [1, 2, 3, 4, 5]에는 짝수가 2, 4로 두 개, 홀수가 1, 3, 5로 세 개 있습니다.
        *
        * 입출력 예 #2
        * [1, 3, 5, 7]에는 짝수가 없고 홀수가 네 개 있습니다.
        */

        int[] num_list = {1, 2, 3, 4, 5};

        Practice3 pr3 = new Practice3();
        int[] result = pr3.solution(num_list);
        System.out.println(Arrays.toString(result));

    }

    public int[] solution(int[] num_list){

        int resultArr[] = new int[2];

        int evenCount = 0;
        int oddCount = 0;

        for(int i = 0; i < num_list.length; i++){
            if(num_list[i] % 2 == 0){
                evenCount++;
            } else {
                oddCount++;
            }
        }

        resultArr[0] = evenCount;
        resultArr[1] = oddCount;

        return resultArr;
    }
}
