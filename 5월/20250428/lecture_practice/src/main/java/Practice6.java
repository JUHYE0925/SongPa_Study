import java.util.Scanner;

public class Practice6 {

    public void evenOrOdd(){

        /*
        * 6.
        * 정수형 변수를 선언하고, 삼항연산자를 사용하여
        * 입력된 수가 짝수인지 홀수인지 출력하는 프로그램을 작성하세요.
        * 참고사항 : 조건식에 %를 활용하여 짝수인지 홀수인지를 판단해보세요.
        *
        * -- 출력예시 --
        *  입력하신 수는 짝수입니다.
        *  또는 입력하신 수는 홀수입니다.
        */

        Scanner sc = new Scanner(System.in);
        System.out.println("정수 하나를 입력하세요 : ");
        int num = sc.nextInt();

        String result = (num % 2 == 0) ? "입력하신 수는 짝수입니다." : "입력하신 수는 홀수입니다.";

        System.out.println(result);
    }
}
