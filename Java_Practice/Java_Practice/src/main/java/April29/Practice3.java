package April29;

public class Practice3 {

    public static void main(String[] args) {

        /* 문제9 : 배열의 평균값 */

        /*
        * - 문제 설명
        * 정수 배열 numbers가 매개변수로 주어집니다.
        * numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.
        *
        * - 제한사항
        * 0 ≤ numbers의 원소 ≤ 1,000
        * 1 ≤ numbers의 길이 ≤ 100
        * 정답의 소수 부분이 .0 또는 .5인 경우만 입력으로 주어집니다.
        *
        * - 입출력 예
        * numbers	                                      result
        * [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]	              5.5
        * [89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]	  94.0
        *
        * - 입출력 예 설명
        * 입출력 예 #1
        * numbers의 원소들의 평균 값은 5.5입니다.
        *
        * 입출력 예 #2
        * numbers의 원소들의 평균 값은 94.0입니다.
        */

        int[] numbers1 = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
        int[] numbers2 = {89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99};

        Practice3 pr3 = new Practice3();
        double result1 = pr3.solution(numbers1);
        double result2 = pr3.solution(numbers2);

        System.out.println("result1 = " + result1);
        System.out.println("result2 = " + result2);
    }

    public double solution(int[] numbers){

        int sum = 0;
        double result;

        for(int i = 0; i < numbers.length; i++){
            sum += numbers[i];
        }
        result = (double)sum / numbers.length;

        return result;
    }
}
