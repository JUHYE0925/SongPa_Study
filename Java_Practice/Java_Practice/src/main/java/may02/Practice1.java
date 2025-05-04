package   may02;

import java.util.Arrays;

public class Practice1 {

    public static void main(String[] args) {

        /* 문제 13 : 특정 문자 제거하기 */

        /*
        * - 문제 설명
        * 문자열 my_string과 문자 letter이 매개변수로 주어집니다.
        * my_string에서 letter를 제거한 문자열을 return하도록
        * solution 함수를 완성해주세요.
        *
        * - 제한사항
        * 1 ≤ my_string의 길이 ≤ 100
        * letter은 길이가 1인 영문자입니다.
        * my_string과 letter은 알파벳 대소문자로 이루어져 있습니다.
        * 대문자와 소문자를 구분합니다.
        *
        * - 입출력 예
        * my_string	 letter	  result
        * "abcdef"	 "f"	  "abcde"
        * "BCBdbe"	 "B"	  "Cdbe"
        *
        * - 입출력 예 설명
        * 입출력 예 #1
        * "abcdef" 에서 "f"를 제거한 "abcde"를 return합니다.
        *
        * 입출력 예 #2
        * "BCBdbe" 에서 "B"를 모두 제거한 "Cdbe"를 return합니다.
        */

        String myString1 = "abcdef";
        String letter1 = "f";

        String myString2 = "BCBdbe";
        String letter2 = "B";

        Practice1 pr1 = new Practice1();
        String result1 = pr1.solution(myString1, letter1);
        String result2 = pr1.solution(myString2, letter2);

        System.out.println("result1 = " + result1);
        System.out.println("result2 = " + result2);

    }

    public String solution(String myString, String letter){
        String result;

        result = String.join("",myString.split(letter));

        return result;
    }

}
