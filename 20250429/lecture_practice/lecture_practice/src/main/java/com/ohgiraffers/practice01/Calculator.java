package com.ohgiraffers.practice01;

import java.util.Scanner;

public class Calculator {
    
    public void checkMethod(){
        System.out.println("메소드 호출 확인");
    }

    public int sum1To10(){

        int sum = 0;
        for(int i = 1; i <= 10; i++){
            sum += i;
        }

        return sum;
    }

    public void checkMaxNumber(int first, int second){

        int result = (first > second)? first : second;

        System.out.println("입력 받은 두 수 중 더 큰 수는 " + result + "입니다.");
    }

    public int sumTwoNumber(int first, int second){
        int sum = 0;

        sum = first + second;

        return sum;
    }

    public int minusTwoNumber(int first, int second){
        int dif = 0;

        dif = first - second;

        return dif;
    }
    
}
