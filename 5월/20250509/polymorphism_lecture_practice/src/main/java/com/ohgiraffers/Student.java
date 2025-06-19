package com.ohgiraffers;

public class Student extends MusicApp{

    @Override
    public void playFisrtSong(){
        if(isOn){
            if(isPlay){
                System.out.println(musicGenre[num - 1] + " 관련 노래를 재생 중입니다.");
                studying();
            } else {
                System.out.println("곡을 먼저 선택해주세요.");
            }
        } else {
            System.out.println("우선 어플을 실행시켜주세요.");
        }
    }

    public void studying(){
        System.out.println("Student는 노래를 들으면서 공부에 집중하기 시작합니다.");
    }

}