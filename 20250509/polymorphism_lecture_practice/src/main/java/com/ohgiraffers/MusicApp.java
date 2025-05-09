package com.ohgiraffers;

import java.util.Scanner;

public class MusicApp {

    protected String[] musicGenre = new String[]{"발라드", "힙합", " OST/BGM"};
    protected int num;
    protected boolean isOn;
    protected boolean isPlay;

    public void startApp(){
        if(isOn){
            System.out.println("이미 어플 실행 중입니다.");
        } else{
            isOn = true;
            System.out.println("어플을 실행합니다.");
        }
    }

    public void chooseFisrtSong(){

        if(isOn){
            isPlay = true;
            Scanner sc = new Scanner(System.in);
            System.out.println("  ======== Genre List ========  ");
            System.out.println("          1. 발라드             ");
            System.out.println("          2. 힙합               ");
            System.out.println("          3. OST / BGM         ");
            System.out.println("  ===========================  ");
            System.out.println("듣고 싶은 곡의 장르를 선택해주세요. : ");
            num = sc.nextInt();
            System.out.println(musicGenre[num - 1] + "을 선택하셨습니다.");
        } else{
            System.out.println("우선 어플을 실행시켜주세요.");
        }
    }


    public void playFisrtSong(){
        if(isOn){
            if(isPlay){
                System.out.println(musicGenre[num - 1] + " 관련 노래를 재생 중입니다.");
            } else {
                System.out.println("곡을 먼저 선택해주세요.");
            }
        } else {
            System.out.println("우선 어플을 실행시켜주세요.");
        }
    }


    public void stopTheSong(){
        if(isOn){
            if(isPlay){
                System.out.println("노래 재생을 멈춥니다.");
                isPlay = false;
            } else {
                System.out.println("이미 재생 중이 아닙니다.");
            }
        } else {
            System.out.println("우선 어플을 실행시켜주세요.");
        }
    }

    public void finishTheApp(){
        if(isOn){
            if(isPlay){
                System.out.println("노래가 재생 중인 상태에서는 어플을 종료할 수 없습니다.");
            } else {
                System.out.println("어플을 종료합니다.");
            }
        }else{
            System.out.println("우선 어플을 실행시켜주세요.");
        }
    }

}