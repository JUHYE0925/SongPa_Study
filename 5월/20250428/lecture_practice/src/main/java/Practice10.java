import java.util.Scanner;

public class Practice10 {

    public void festivalBooth(){

        /*
        * 10.
        * 판다는 축제 부스에서 일한 뒤, 인사평가 점수를 받았습니다.
        * 성실, 서비스, 미소 점수를 입력받아
        * 평균 점수가 60점 이상이면서 각 항목이 40점 이상인 조건이 만족하면 "합격입니다!" 를 출력하세요,
        * 단, 합격이 아닌 경우 불합격 사유가 무엇인지를 모두 출력해 주어야 합니다.
        * 평균점수 미달인 경우 "평균점수 미달로 불합격입니다."라고 출력하고,
        * 항목당 과락 점수가 있는 경우 "xx 항목의 점수 미달로 불합격 입니다."를 출력하세요.
        *
        * -- 입력 예시 --
        *  성실 점수 : 60
        *  서비스 점수 : 30
        *  미소 점수 : 20
        *
        * -- 출력 예시 --
        *  평균 점수 미달로 불합격입니다.
        *  서비스 점수 미달로 불합격입니다.
        *  미소 점수 미달로 불합격입니다.
        */

        Scanner sc = new Scanner(System.in);
        System.out.println("성실 점수를 입력해주세요. : ");
        int sincerity = sc.nextInt();
        System.out.println("서비스 점수를 입력해주세요. : ");
        int service = sc.nextInt();
        System.out.println("미소 점수를 입력해주세요. : ");
        int smile = sc.nextInt();

        int average = (sincerity + service + smile) / 3;

        if(average >= 60){
            if(sincerity >= 40 && service >= 40 && smile >= 40){
                System.out.println("합격입니다.");
            } else if(sincerity < 40 && service >= 40 && smile >= 40){
                System.out.println("성실 점수 미달로 불합격입니다.");
            } else if(sincerity >= 40 && service < 40 && smile >= 40){
                System.out.println("서비스 점수 미달로 불합격입니다.");
            } else if(sincerity >= 40 && service >= 40 && smile < 40){
                System.out.println("미소 점수 미달로 불합격입니다.");
            }
        } else {
            System.out.println("평균 점수 미달로 불합격입니다.");
        }
    }
}
