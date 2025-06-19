package looping_and_condition;

import java.util.Scanner;

public class Practice5 {

    public void practice5(){

        /*
        * 문자열을 입력 받아서 문자열의 각 인덱스별로 한 글자씩 출력하세요.
        *
        * -- 입력 예시 --
        * 문자열을 입력하세요 : apple
        *
        * -- 출력 예시 --
        * 0 : a
        * 1 : p
        * 2 : p
        * 3 : l
        * 4 : e
        */

        Scanner sc = new Scanner(System.in);
        System.out.println("문자열을 입력하세요. : ");
        String word = sc.nextLine();

        for(int i = 0; i < word.length(); i++){
            System.out.println(i + " : " + word.charAt(i));
        }


    }
}
