package com.ohgiraffers;

public class Dancer extends MusicApp {

    @Override
    public void playFisrtSong() {
        if(isOn){
            if(isPlay){
                System.out.println(musicGenre[num - 1] + " 관련 노래를 재생 중입니다.");
                dancing();
            } else {
                System.out.println("곡을 먼저 선택해주세요.");
            }
        } else {
            System.out.println("우선 어플을 실행시켜주세요.");
        }
    }


//    @Override
//    public void playSecondSong() {
//        System.out.println("선택하신 " + musicGenre + "의 " + musicTitle + "을 재생하겠습니다.");
//        dancing();
//    }

    public void dancing(){
        System.out.println("Dancer는 노래를 들으며 흥이 오른 나머지 춤을 추기 시작합니다.");
    }
}