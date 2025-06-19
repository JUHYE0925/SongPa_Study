package com.ohgiraffers.publisher.model.dto;

public class EmployeeDTO {

    private int empId;
    private String empName;
    private AuthorDTO authorList;

    public EmployeeDTO(){}

    public EmployeeDTO(int empId, String empName, AuthorDTO authorList) {
        this.empId = empId;
        this.empName = empName;
        this.authorList = authorList;
    }

    public int getEmpId() {
        return empId;
    }

    public void setEmpId(int empId) {
        this.empId = empId;
    }

    public String getEmpName() {
        return empName;
    }

    public void setEmpName(String empName) {
        this.empName = empName;
    }

    public AuthorDTO getAuthorList() {
        return authorList;
    }

    public void setAuthorList(AuthorDTO authorList) {
        this.authorList = authorList;
    }

    @Override
    public String toString() {
        return "EmployeeDTO{" +
                "empId=" + empId +
                ", empName=" + empName +
                ", authorList=" + authorList +
                '}';
    }
}
