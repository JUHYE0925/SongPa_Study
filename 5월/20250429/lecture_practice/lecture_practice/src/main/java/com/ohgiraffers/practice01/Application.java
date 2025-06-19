package com.ohgiraffers.practice01;

public class Application {

    public static void main(String[] args) {

        Calculator calc = new Calculator();
        calc.checkMethod();

        System.out.println(calc.sum1To10());

        calc.checkMaxNumber(10, 20);

        System.out.println(calc.sumTwoNumber(10, 20));

        System.out.println(calc.minusTwoNumber(10, 5));


    }
}
