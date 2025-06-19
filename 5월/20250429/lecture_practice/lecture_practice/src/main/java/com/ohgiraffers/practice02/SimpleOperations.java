package com.ohgiraffers.practice02;

import java.util.Arrays;

public class SimpleOperations {

    public void printMessage(){
        System.out.println("메소드 호출 확인");
    }

    public int sumNumbers(int start, int end){
        int sum = 0;
        for(int i = start; i <= end; i++){
            sum += i;
        }

        return sum;
    }

    public boolean isEvenNumber(int num){
        boolean isEven;

        if(num % 2 == 0){
            isEven = true;
        } else {
            isEven = false;
        }

        return isEven;
    }

    public int coutnCharacter(String input, char ch){

        int count = 0;
        for(int i = 0; i < input.length(); i++){
            if (input.charAt(i) == ch){
                count++;
            }
        }

        return count;
    }

    public String reverseString(String input){

        /* 방법 1. */
        // 이 방법으로 해결할 수 있는 방법은 없는 것인가.....?????
//        char [] reverseStringArr = new char [input.length()];
//        for(int i = input.length() - 1; i >= 0; i--){
//            reverseStringArr[input.length() - 1 - i] = input.charAt(i);
//        }
//        // System.out.println("reverseStringArr : " + reverseStringArr);  // [C@5ca881b5
//        String reverseString = Arrays.toString(reverseStringArr);  // [d, l, r, o, w,  , o, l, l, e, H]
//
//        return reverseString;
        
        /* 방법 2 - 구글링함 */

        String reverseWord = "";
        for(int i = input.length() - 1; i >= 0; i--){
            reverseWord += input.charAt(i);
        }

        return reverseWord;
    }
}
