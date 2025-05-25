package com.ohgiraffers.view;

import com.ohgiraffers.model.PublisherDTO;

import java.util.List;

public class PrintResult {
    public void printAllEmp(List<PublisherDTO> empList) {

        for(PublisherDTO emp : empList){
            System.out.println("emp = " + emp);
        }

    }

    public void printErrorMessage(String errorCode){

        String errorMessage = "";

        switch (errorCode){
            case "selectList" : errorMessage = "전체 직원 조회에 실패하였습니다."; break;
        }

        System.out.println(errorMessage);
    }
}
