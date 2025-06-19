package com.ohgiraffers;

public class Pet {

    private boolean isMove;
    private int speed;

    public void startWalk(){
        if(isMove){
            System.out.println("이미 산책을 시작했습니다.");
        } else {
            this.isMove = true;
            System.out.println("산책을 시작했습니다.");
        }
    }

    public void startRun(){
        if(isMove){
            System.out.println("달리기를 시작합니다.");
            this.speed += 5;
            System.out.println("현재 달리기 시속은 " + this.speed + "km/h입니다.");
        } else {
            System.out.println("멈춰있는 상태입니다. 걷기부터 시작해주세요.");
        }
    }

    public void bowelMovement(){
        if(isMove){
            if(speed > 0){
                System.out.println("달리는 중에는 배변활동을 할 수 없습니다. 우선 달리기를 멈춰주세요.");
            } else {
                System.out.println("괜찮은 곳을 찾았군요. 얼른 배변을 보겠습니다. 잠시 기다려주세요.");
            }
        } else {
            System.out.println("산책을 하면서 괜찮은 장소를 물색해주세요. 여기서는 안됩니다.");
        }
    }

    public void stopRun(){
        if(isMove){
            if(this.speed > 0){
                this.speed = 0;
                System.out.println("달리기를 멈췄습니다. 천천히 걷기 시작합니다.");
            } else {
                System.out.println("달리는 중이 아닙니다. 먼저 달리기를 시작하세요.");
            }
        } else {
            System.out.println("움직이는 상태가 아닙니다. 우선 산책부터 시작하세요.");
        }
    }

     public void finishWalk(){
        if(isMove){
            if(this.speed > 0){
                System.out.println("달리는 와중에 갑자기 멈추면 큰일납니다. 우선 달리기부터 멈춰주세요.");
            } else {
                this.isMove = false;
                System.out.println("산책을 종료합니다. 다시 산책을 시작하시려면 걷기부터 해주세요.");
            }
        } else {
            System.out.println("산책이 종료된 상태입니다. 걷기부터 시작해주세요.");
        }
     }

}
