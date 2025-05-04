package may02;

import java.util.Arrays;

public class Practice3 {

    public static void main(String[] args) {

        /* 문제 15 : 뒤집힌 문자열 */

        /*
        * - 문제 설명
        * 문자열 my_string이 매개변수로 주어집니다.
        * my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.
        *
        * - 제한사항
        * 1 ≤ my_string의 길이 ≤ 1,000
        *
        * - 입출력 예
        * my_string	 return
        * "jaron"	   "noraj"
        * "bread"	   "daerb"
        *
        * - 입출력 예 설명
        * 입출력 예 #1
        * my_string이 "jaron"이므로 거꾸로 뒤집은 "noraj"를 return합니다.
        *
        * 입출력 예 #2
        * my_string이 "bread"이므로 거꾸로 뒤집은 "daerb"를 return합니다.
        */

        String myString1 = "jaron";
        String myString2 = "bread";

        Practice3 pr3 = new Practice3();
        String result1 = pr3.solution(myString1);
        String result2 = pr3.solution(myString2);

        System.out.println("result1 = " + result1);
        System.out.println("result2 = " + result2);
    }

    public String solution(String myString){

        String reverse = "";

        for(int i = myString.length() - 1; i >= 0; i--){
            reverse += myString.charAt(i);
        }

        return reverse;
    }



}
