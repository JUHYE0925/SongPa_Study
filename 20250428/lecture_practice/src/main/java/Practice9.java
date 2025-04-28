import java.util.Scanner;

public class Practice9 {

    public void eventBooth(){

        /*
        * 9.
        * 코알라가 숫자 뽑기를 통해 선물을 나눠주는 이벤트 부스에서 일합니다.
        * "당첨 번호가 어떻게 되세요?"를 출력하여,
        * 1~10 사이의 정수 한개를 입력받고,
        * 홀수인지 짝수인지 확인하고,
        * 홀수이면 "홀수네요, 인형 선물입니다!", 홀수가 아니면 "짝수네요, 모자 선물입니다!"라고 출력하세요.
        * 단, 1~10 사이의 정수가 아닌 경우 "당첨 번호는 1~10 사이에만 있어요."를 출력하세요.
        *
        * -- 입력 예시 --
        * 당첨 번호가 어떻게 되세요? 8
        *
        * -- 출력 예시 --
        * 짝수네요, 모자 선물입니다!
        */

        Scanner sc = new Scanner(System.in);
        System.out.println("당첨 번호가 어떻게 되세요? : ");
        int num = sc.nextInt();

        if(num >= 1 && num <= 10){
            if(num % 2 == 0){
                System.out.println("짝수네요. 모자 선물입니다.");
            } else {
                System.out.println("홀수네요. 인형 선물입니다.");
            }
        } else {
            System.out.println("당첨 번호는 1~10 사이에만 있어요.");
        }
    }
}
