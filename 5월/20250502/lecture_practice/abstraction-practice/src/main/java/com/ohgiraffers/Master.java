package com.ohgiraffers;

public class Master {

        private final Pet pet = new Pet();

        public void startWalk(){
            pet.startWalk();
        }

        public void startRun(){
            pet.startRun();
        }

        public void waitPet(){
            pet.bowelMovement();
        }

        public void stopRun(){
            pet.stopRun();
        }

        public void stopWalk(){
            pet.finishWalk();
        }

}
