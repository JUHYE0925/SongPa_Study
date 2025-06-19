public class Practice4 {

    public void maxNumber(){

        /*
        * 4.
        * 두 개의 정수형 변수를 선언하고, 삼항 연산자를 사용하여
        * 두 수 중 큰 수를 출력하는 프로그램을 작성하세요.
        *
        * -- 출력예시 --
        *  두 수 중 큰 수는 20입니다.
        */

        int first = 20;
        int second = 10;

        int maxNumber = (first > second) ? first : second;

        System.out.println("두 수 중 큰 수는 " + maxNumber + "입니다.");
    }
}
