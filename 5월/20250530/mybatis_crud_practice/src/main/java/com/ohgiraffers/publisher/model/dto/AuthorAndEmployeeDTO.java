package com.ohgiraffers.publisher.model.dto;

public class AuthorAndEmployeeDTO {

    private int authorId;
    private String authorName;
    private Boolean awarded;
    private String empName;
    private int empId;

    public AuthorAndEmployeeDTO(){}

    public AuthorAndEmployeeDTO(int authorId, String authorName, Boolean awarded, String empName, int empId) {

        this.authorId = authorId;
        this.authorName = authorName;
        this.awarded = awarded;
        this.empName = empName;
        this.empId = empId;

    }

    public int getEmpId() {
        return empId;
    }

    public void setEmpId(int empId) {
        this.empId = empId;
    }

    public int getAuthorId() {
        return authorId;
    }

    public void setAuthorId(int authorId) {
        this.authorId = authorId;
    }

    public String getAuthorName() {
        return authorName;
    }

    public void setAuthorName(String authorName) {
        this.authorName = authorName;
    }

    public Boolean getAwarded() {
        return awarded;
    }

    public void setAwarded(Boolean awarded) {
        this.awarded = awarded;
    }

    public String getEmpName() {
        return empName;
    }

    public void setEmpName(String empName) {
        this.empName = empName;
    }

    @Override
    public String toString() {
        return "AuthorAndEmployeeDTO{" +
                "authorId=" + authorId +
                ", authorName='" + authorName + '\'' +
                ", awarded=" + awarded +
                ", empName='" + empName + '\'' +
                '}';
    }
}
