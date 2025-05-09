package com.ohgiraffers;

import java.util.Scanner;

public class MusicAppUser {

    private boolean isOn;
    private boolean isPlayMusic;
    protected int musicGenre;

    public void startApp(){
        if(isOn){
            System.out.println("이미 어플이 켜져있습니다.");
        } else{
            isOn = true;
            System.out.println("어플을 실행합니다. 듣고싶은 곡을 선택해주세요.");
        }
    };

    public void chooseFirstSong(){
        if(isOn) {
            if (!isPlayMusic) {
                Scanner sc = new Scanner(System.in);
                System.out.println("  ======== Genre List ========  ");
                System.out.println("          1. 발라드             ");
                System.out.println("          2. 힙합               ");
                System.out.println("          3. OST / BGM         ");
                System.out.println("  ===========================  ");
                System.out.println("듣고 싶은 곡의 장르를 선택해주세요. : ");
                this.musicGenre = sc.nextInt();

                if(musicGenre == 1){
                    System.out.println("발라드를 선택하셨습니다. 발라드 관련 노래들을 틀어드리겠습니다.");
                } else if(musicGenre == 2){
                    System.out.println("힙합을 선택하셨습니다. 힙합 관련 노래들을 틀어드리겠습니다.");
                } else if(musicGenre == 3){
                    System.out.println("OST / BGM을 선택하셨습니다. OST / BGM 관련 노래들을 틀어드리겠습니다.");
                } else {
                    System.out.println("위의 항목에서 골라 입력해주세요.");
                }
            } else{
                System.out.println("이미 노래가 재생 중입니다.");
            }
        } else{
            System.out.println("어플을 먼저 실행시켜주세요.");
        }
    }

    /* 더 공부한 후에 다시 적용하기
    public void chooseFirstSong(){
        if(isOn) {
            if (!isPlayMusic) {
                isPlayMusic = true;
                Scanner sc = new Scanner(System.in);
                System.out.println("  ======== Genre List ========  ");
                System.out.println("          1. 발라드             ");
                System.out.println("          2. 힙합               ");
                System.out.println("          3. OST / BGM         ");
                System.out.println("  ===========================  ");
                System.out.println("듣고 싶은 곡의 장르를 선택해주세요. : ");
                this.musicGenre = sc.nextInt();

                if (musicGenre == 1) {

                    System.out.println("  ============== Play List ==============  ");
                    System.out.println("             1. 성시경 - 두 사람             ");
                    System.out.println("             2. 바이브 - 오래오래               ");
                    System.out.println("         3. 거미 - 친구라도 될 걸 그랬어         ");
                    System.out.println("  =======================================  ");
                    System.out.println("첫 번째 곡을 선택하여 주세요 : ");
                    this.musicTitle = sc.nextInt();

                } else if (musicGenre == 2) {

                    System.out.println("  ============== Play List ==============  ");
                    System.out.println("         1. 에픽하이 - Love Love Love             ");
                    System.out.println("           2. 이영지 - Small Girl              ");
                    System.out.println("          3. 다이나믹듀오 - 죽일 놈        ");
                    System.out.println("  =======================================  ");
                    System.out.println("첫 번째 곡을 선택하여 주세요 : ");
                    this.musicTitle = sc.nextInt();

                } else if (musicGenre == 3) {

                    System.out.println("  ============== Play List ==============  ");
                    System.out.println("             1. 지브리 OST 모음             ");
                    System.out.println("            2. 외국 영화 OST 모음             ");
                    System.out.println("             3. 디즈니 OST 모음       ");
                    System.out.println("  =======================================  ");
                    System.out.println("첫 번째 곡을 선택하여 주세요 : ");
                    this.musicTitle = sc.nextInt();

                } else {
                    System.out.println("위의 항목에서 골라주세요.");
                }
                System.out.println("선택하신 " + this.musicGenre + "의 " + this.musicTitle + "을 재생하겠습니다.");
            } else{
                System.out.println("노래가 재생 중입니다. 먼저 노래를 멈춰주세요.");
            }
        }else {
            System.out.println("어플을 먼저 실행시켜주세요.");
        }
    };
    */

    public void playFirstSong(){
        if(isOn){
            if(isPlayMusic){
                isPlayMusic = true;
            } else{
                System.out.println("곡을 먼저 선택해주세요.");
            }
        } else{
            System.out.println("어플을 먼저 실행시켜주세요.");
        }
    };

    /* 좀 더 배운 후에 적용해보기.
    public void chooseSecondSong(){
        if(isOn) {
            if (!isPlayMusic) {
                Scanner sc = new Scanner(System.in);
                System.out.println("  ======== Genre List ========  ");
                System.out.println("          1. 발라드             ");
                System.out.println("          2. 힙합               ");
                System.out.println("          3. OST / BGM         ");
                System.out.println("  ===========================  ");
                System.out.println("듣고 싶은 곡의 장르를 선택해주세요. : ");
                this.musicGenre = sc.nextInt();

                if (musicGenre == 1) {

                    System.out.println("  ============== Play List ==============  ");
                    System.out.println("             1. 성시경 - 두 사람             ");
                    System.out.println("             2. 바이브 - 오래오래               ");
                    System.out.println("         3. 거미 - 친구라도 될 걸 그랬어         ");
                    System.out.println("  =======================================  ");
                    System.out.println("첫 번째 곡을 선택하여 주세요 : ");
                    this.musicTitle = sc.nextInt();

                } else if (musicGenre == 2) {

                    System.out.println("  ============== Play List ==============  ");
                    System.out.println("         1. 에픽하이 - Love Love Love             ");
                    System.out.println("           2. 이영지 - Small Girl              ");
                    System.out.println("          3. 다이나믹듀오 - 죽일 놈        ");
                    System.out.println("  =======================================  ");
                    System.out.println("첫 번째 곡을 선택하여 주세요 : ");
                    this.musicTitle = sc.nextInt();

                } else if (musicGenre == 3) {

                    System.out.println("  ============== Play List ==============  ");
                    System.out.println("             1. 지브리 OST 모음             ");
                    System.out.println("            2. 외국 영화 OST 모음             ");
                    System.out.println("             3. 디즈니 OST 모음       ");
                    System.out.println("  =======================================  ");
                    System.out.println("첫 번째 곡을 선택하여 주세요 : ");
                    this.musicTitle = sc.nextInt();

                } else {
                    System.out.println("위의 항목에서 골라주세요.");
                }
                System.out.println("선택하신 " + this.musicGenre + "의 " + this.musicTitle + "을 재생하겠습니다.");
            } else{
                System.out.println("노래가 재생 중입니다. 먼저 노래를 멈춰주세요.");
            }
        }else {
            System.out.println("어플을 먼저 실행시켜주세요.");
        }
    };


    public void playSecondSong(){
        if(isOn){
            if(isPlayMusic){
                System.out.println("이미 재생 중입니다.");
            } else{
                System.out.println("곡을 먼저 선택해주세요.");
            }
        } else{
            System.out.println("어플을 먼저 실행시켜주세요.");
        }
    };
    */

    public void stopSong(){
        if(isOn){
            if(isPlayMusic){
                System.out.println("재생 중인 곡을 정지하겠습니다.");
                isPlayMusic = false;
            } else{
                System.out.println("재생 중인 곡이 없습니다.");
            }
        } else{
            System.out.println("어플을 먼저 실행시켜주세요.");
        }
    };

    public void finishApp(){
        if(isOn){
            if(isPlayMusic){
                System.out.println("재생 중인 상태에서 어플을 종료할 수 없습니다.");
            } else{
                isOn = false;
                System.out.println("어플을 종료하겠습니다.");
            }
        } else{
            System.out.println("어플을 먼저 실행시켜주세요.");
        }
    };

}