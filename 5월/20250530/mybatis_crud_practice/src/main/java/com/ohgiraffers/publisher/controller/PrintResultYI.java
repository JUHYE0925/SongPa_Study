package com.ohgiraffers.publisher.controller;

import com.ohgiraffers.publisher.model.dto.AuthorAndEmployeeDTO;

import java.util.List;

public class PrintResultYI {
    public void printAuthorList(List<AuthorAndEmployeeDTO> authorList) {
        for (AuthorAndEmployeeDTO authors : authorList) {
            System.out.println(authors);
        }
    }

    public void printAuthorList(AuthorAndEmployeeDTO author) {
        System.out.println(author);
    }

    public void printSuccessMessage(String successCode) {
        String successMessage = "";

        switch (successCode) {
            case "INSERT":
                successMessage = "신규 작가 등록에 성공하였습니다.";
                break;
            case "UPDATE":
                successMessage = "작가 정보 수정에 성공하였습니다.";
                break;
            case "DELETE":
                successMessage = "작가 정보 삭제에 성공하였습니다.";
                break;
        }

        System.out.println(successMessage);
    }

    public void printErrorMessage(String errorCode) {
        String errorMessage = "";

        switch (errorCode) {
            case "SELECT":
                errorMessage = "작가 목록 조회에 실패하였습니다.";
                break;
            case "INSERT":
                errorMessage = "신규 작가 등록에 실패하였습니다.";
                break;
            case "UPDATE":
                errorMessage = "작가 정보 수정에 실패하였습니다.";
                break;
            case "DELETE":
                errorMessage = "작가 정보 삭제에 실패하였습니다.";
                break;

        }

        System.out.println(errorMessage);
    }
}
