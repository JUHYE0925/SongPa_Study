package com.ohgiraffers.practice02;

public class Application {

    public static void main(String[] args) {

        SimpleOperations so = new SimpleOperations();
        so.printMessage();

        System.out.println(so.sumNumbers(1, 10));

        System.out.println(so.isEvenNumber(10));

        System.out.println(so.coutnCharacter("Hello World", 'o'));

        System.out.println(so.reverseString("Hello world"));


    }

}
