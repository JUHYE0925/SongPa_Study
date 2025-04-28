import java.util.Scanner;

public class Practice7 {

    public void randomCoupon(){

        /*
        * 7.
        * 정수형 변수를 두개 선언하여 회원의 월(month)과 일(day)를 저장합니다.
        * 월이 1월부터 6월까지이면서, 일이 1일부터 15일까지인 경우 “배민 쿠폰”을,
        * 월이 7월부터 12월까지이면서, 일이 16일부터 31일까지인 경우 “스타벅스 커피”를
        * 그 외의 경우는 “사탕”이 선물로 선택되는 프로그램을 작성하세요.
        *
        * -- 출력예시 --
        *  “본인이름”의 선물은 스타벅스 커피 입니다.
        *  또는 “본인이름”의 선물은 사탕 입니다.
        *  또는 “본인이름”의 선물은 배민 쿠폰 입니다.
        */

        Scanner sc = new Scanner(System.in);
        System.out.println("이름을 입력해주세요. : ");
        String name = sc.nextLine();
        System.out.println("월(month)를 입력해주세요. : ");
        int month = sc.nextInt();
        System.out.println("일(day)를 입력해주세요. : ");
        int day = sc.nextInt();

        String coupon = "";

        if(month >= 1 && month <= 6){
            if(day >= 1 && day <= 15){
                coupon = "배민 쿠폰";
            }
        } else if(month >= 7 && month <= 12){
            if(day >= 16 && day <= 31){
                coupon = "스타벅스 커피";
            }
        } else {
            coupon = "사탕";
        }

        System.out.println(name + "의 선물은 " + coupon + "입니다.");
    }
}
