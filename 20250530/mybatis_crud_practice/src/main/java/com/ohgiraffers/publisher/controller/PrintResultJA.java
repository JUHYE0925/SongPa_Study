package com.ohgiraffers.publisher.controller;

import com.ohgiraffers.publisher.model.dto.AuthorAndEmployeeDTOJA;
import com.ohgiraffers.publisher.model.dto.AuthorDTOJA;

import java.util.List;

public class PrintResultJA {
    public void printAuthorList(List<AuthorAndEmployeeDTOJA> list) {
        for(AuthorAndEmployeeDTOJA publisher: list) {
            System.out.println(publisher);
        }
    }

    public void printAuthor(AuthorAndEmployeeDTOJA authorDto) { System.out.println(authorDto); }

    public static void printErrorMessage(String errorCode) {
        String errorMsg = "";
            switch (errorCode){
            case "selectList" : errorMsg = "작가 목록 조회 실패"; break;
            case "selectOne" : errorMsg ="작가 상세 조회 실패"; break;
            case "insert" : errorMsg = "신규작가 등록 실패"; break;
            case "update" : errorMsg = "작가정보 수정 실패";break;
            case "delete" : errorMsg = "삭제 실패"; break;
            }
        System.out.println(errorMsg);
    }

    public static void printSuccessMsg(String successCode) {
        String successMsg = "";
        switch (successCode) {
            case "insert" : successMsg="신규 작가 등록 성공";break;
            case "update" : successMsg ="작가 정보 수정 성공";break;
            case "delete" : successMsg = "삭제 성공"; break;
        }
        System.out.println(successMsg);
    }
}
