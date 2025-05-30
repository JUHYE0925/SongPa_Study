package may12;

import java.util.ArrayList;
import java.util.Scanner;

public class Practice1 {

    public static void main(String[] args) {

        /*
        * - 문제 설명
        * 머쓱이는 할머니께 생신 축하 편지를 쓰려고 합니다.
        * 할머니가 보시기 편하도록 글자 한 자 한 자를 가로 2cm 크기로 적으려고 하며,
        * 편지를 가로로만 적을 때, 축하 문구 message를 적기 위해 필요한
        * 편지지의 최소 가로길이를 return 하도록 solution 함수를 완성해주세요.
        *
        * - 제한사항
        * 공백도 하나의 문자로 취급합니다.
        * 1 ≤ message의 길이 ≤ 50
        * 편지지의 여백은 생각하지 않습니다.
        * message는 영문 알파벳 대소문자, ‘!’, ‘~’ 또는 공백으로만 이루어져 있습니다.
        *
        * - 입출력 예
        * message	          result
        * "happy birthday!"	 30
        * "I love you~"	     22
        *
        * - 입출력 예 설명
        * 입출력 예 #1
        * message의 글자 수가 15개로 최소 가로 30cm의 편지지가 필요합니다.
        *
        * 입출력 예 #2
        * message의 글자 수가 11개로 최소 가로 22cm의 편지지가 필요합니다.
        */

        Scanner sc = new Scanner(System.in);
        System.out.println("편지 내용을 입력해주세요 : ");
        String message = sc.nextLine();

        Practice1 pr1 = new Practice1();
        int result = pr1.solution(message);
        System.out.println(result);

    }

    public int solution(String message){
        int result = 0;

        String[] arr = message.split("");

//        System.out.println(arr);

        result = arr.length * 2;

        return result;
    }
}
