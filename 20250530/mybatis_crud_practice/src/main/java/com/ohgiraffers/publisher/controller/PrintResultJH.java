package com.ohgiraffers.publisher.controller;

import com.ohgiraffers.publisher.model.dto.AuthorAndEmployeeDTO;
import com.ohgiraffers.publisher.model.dto.AuthorDTO;
import com.ohgiraffers.publisher.model.dto.EmployeeDTO;

import java.util.List;

public class PrintResultJH {


    public void printAuthorList(List<AuthorAndEmployeeDTO> authorList) {

        System.out.println();
        for(AuthorAndEmployeeDTO author : authorList){
            System.out.println(author);
        }
        System.out.println();

    }

    public void printAllAuthorIdAndName(List<AuthorDTO> authorList) {

        System.out.println();
        System.out.println("======================");
        for(AuthorDTO author : authorList){
            System.out.println("{ " + author.getAuthorId() + " - " + author.getAuthorName() + " }");
        }
        System.out.println("======================");
    }

    public void printAuthor(AuthorAndEmployeeDTO author) {

        System.out.println();
        System.out.println(author);
        System.out.println();

    }

    public void printAllEmployee(List<EmployeeDTO> employeeList) {

        System.out.println();
        System.out.println("======================");
        for(EmployeeDTO emp : employeeList){
            System.out.println("{ " + emp.getEmpId() + " - " + emp.getEmpName() + " }");
        }
        System.out.println("======================");
        System.out.println();

    }

    public void printSuccessMessage(String successCode) {

        String successMessage = "";

        switch(successCode){
            case "registNewAuthor" : successMessage = "새 작가 등록에 성공하였습니다."; break;
            case "modifyAuthor" : successMessage = "직원 정보 수정에 성공하였습니다."; break;
            case "deleteAuthor" : successMessage = "직원 정보 삭제에 성공하였습니다.";break;
        }

        System.out.println();
        System.out.println(successMessage);
        System.out.println();
    }

    public void printErrorMessage(String errorCode) {

        String errorMessage = "";

        switch (errorCode){
            case "selectAllAuthor" : errorMessage = "전체 작가 정보 불러오기에 실패하였습니다."; break;
            case "selectOneAuthor" : errorMessage = "해당 작가의 정보 불러오기에 실패하였습니다."; break;
            case "registNewAuthor" : errorMessage = "새 작가 등록하기에 실패하였습니다."; break;
            case "selectAllEmployee" : errorMessage = "직원 정보 불러오기에 실패하였습니다."; break;
            case "modifyAuthor" : errorMessage = "직원 정보 수정에 실패하였습니다."; break;
            case "deleteAuthor" : errorMessage = "직원 정보 삭제에 실패하였습니다."; break;
        }

        System.out.println();
        System.out.println(errorMessage);
        System.out.println();

    }

}
