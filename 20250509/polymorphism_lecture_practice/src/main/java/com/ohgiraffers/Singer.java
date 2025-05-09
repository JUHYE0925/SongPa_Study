package com.ohgiraffers;

public class Singer extends MusicApp {

    @Override
    public void playFisrtSong(){
        if(isOn){
            if(isPlay){
                System.out.println(musicGenre[num - 1] + " 관련 노래를 재생 중입니다.");
                singing();
            } else {
                System.out.println("곡을 먼저 선택해주세요.");
            }
        } else {
            System.out.println("우선 어플을 실행시켜주세요.");
        }
    }

    public void singing(){
        System.out.println("Singer는 노래를 들으면서 목을 풀 듯이 따라 부릅니다.");
    }
}