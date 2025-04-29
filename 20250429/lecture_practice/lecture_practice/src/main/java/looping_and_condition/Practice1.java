package looping_and_condition;

public class Practice1 {

    public void practice1(){

        /* 반복문을 사용하여 1부터 100까지 더한 합계를 출력하세요. */

        int sum = 0;
        for(int i = 1; i <= 100; i++){
            sum += i;
        }

        System.out.println("1부터 100까지의 합은 " + sum + "입니다.");
    }
}
