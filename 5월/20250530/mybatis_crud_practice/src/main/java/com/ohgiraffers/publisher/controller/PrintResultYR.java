package com.ohgiraffers.publisher.controller;

import com.ohgiraffers.publisher.model.dto.AuthorDTO;

import java.util.List;

public class PrintResultYR {

    public <T>void printAuthorList(List<T> menuList){

        for(T menu : menuList){
            System.out.println(menu);
        }

    }

    public <T>void printAuthor(T menu) {

        System.out.println(menu);
    }


    public void printSuccessMessage(String errorCode) {

        String successMessage = "";
        switch (errorCode){
            case "insert" :  successMessage = "신규 작가 등록을 성공하였습니다."; break;
            case "update" :  successMessage = "작가 수정을 성공하였습니다."; break;
            case "delete" :  successMessage = "작가 삭제를 성공하였습니다."; break;
        }

        System.out.println(successMessage);
    }


    public void printErrorMessage(String errorCode){
        String errorMessage = "";
        switch (errorCode){
            case "selectList": errorMessage = "작가 목록 조회를 실패하였습니다."; break;
            case "selectOne" : errorMessage = "작가 상세 조회를 실패하였습니다."; break;
            case "insert" : errorMessage = "신규 작가 등록을 실패하였습니다."; break;
            case "update" : errorMessage = "작가 수정을 실패하였습니다."; break;
            case "delete" : errorMessage = "작가 삭제를 실패하였습니다."; break;
        }

        System.out.println(errorMessage);
    }
}
