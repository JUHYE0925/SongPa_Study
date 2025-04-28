import org.w3c.dom.ls.LSOutput;

import java.util.Scanner;

public class Practice5 {

    public void passOrFail(){

        /*
        * 5.
        * 정수형 변수를 선언하여 점수를 저장하고,
        * 삼항 연산자를 사용하여 점수가 60점 이상이면 “합격입니다”,
        * 그렇지 않으면 “아쉽지만 불합격입니다.” 을 출력하는 프로그램을 작성하세요.
        *
        * -- 출력예시 --
        *  합격입니다~~!!!
        *  또는 아쉽지만 불합격입니다…
        */

        Scanner sc = new Scanner(System.in);
        System.out.println("점수를 입력하세요. : ");
        int score = sc.nextInt();
        String pass = "합격입니다.";
        String fail = "아쉽지만 불합격입니다.";

        String result = (score >= 60) ? pass : fail;

        System.out.println(result);
    }
}
