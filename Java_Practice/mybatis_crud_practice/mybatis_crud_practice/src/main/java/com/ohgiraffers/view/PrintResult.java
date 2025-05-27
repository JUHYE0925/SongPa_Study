package com.ohgiraffers.view;

import com.ohgiraffers.model.EmployeeAndDeptDTO;
import com.ohgiraffers.model.PublisherDTO;

import java.util.List;

public class PrintResult {
    public void printAllEmp(List<PublisherDTO> empList) {

        for(PublisherDTO emp : empList){
            System.out.println("emp = " + emp);
        }

    }

    public void printAllEmpAndDept(List<EmployeeAndDeptDTO> empList) {

        for(EmployeeAndDeptDTO emp : empList){
            System.out.println("emp = " + emp);
        }

    }

    public void printEmp(PublisherDTO emp) {

        System.out.println("emp = " + emp);

    }

    public void printSuccessMessage(String successCode) {

        String successMessage = "";

        switch (successCode){
            case "insert" : successMessage = "직원 등록에 성공했습니다."; break;
            case "update" : successMessage = "직원 정보 수정에 성공했습니다."; break;
            case "modify" : successMessage = "직원 정보 수정에 성공했습니다."; break;
            case "delete" : successMessage = "직원 정보 삭제에 성공했습니다."; break;
        }

        System.out.println(successMessage);
    }

    public void printErrorMessage(String errorCode){

        String errorMessage = "";

        switch (errorCode){
            case "selectList" : errorMessage = "전체 직원 조회에 실패하였습니다."; break;
            case "selectOne" : errorMessage = "직원 상세 조회에 실패하였습니다."; break;
            case "insert" : errorMessage = "직원 등록에 실패했습니다."; break;
            case "update" : errorMessage = "직원 정보 수정에 실패했습니다."; break;
            case "modify" : errorMessage = "직원 정보 수정에 실패했습니다."; break;
            case "delete" : errorMessage = "직원 정보 삭제에 실패했습니다."; break;
        }

        System.out.println(errorMessage);
    }

}
