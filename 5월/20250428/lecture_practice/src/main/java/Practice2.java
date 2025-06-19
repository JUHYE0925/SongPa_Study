public class Practice2 {
    
    public void areaRectangle(){

        /*
        * 2.
        * 사각형의 넓이와 둘레를 구하여 출력합니다.
        * 너비 12.5 높이 36.4를 변수에 저장하고,
        * 넓이와 둘레를 계산한 뒤 각각 넓이와 둘레를 변수에 담아 아래와 같이 출력하세요.
        *
        * -- 출력 예시 --
        *  면적 : 455.0
        *  둘레 : 97.8
        */
        
        double width = 12.5;
        double height = 36.4;

        System.out.println("면적 : " + (width * height));
        System.out.println("둘레 : " + (width + height) * 2);
    }
}
