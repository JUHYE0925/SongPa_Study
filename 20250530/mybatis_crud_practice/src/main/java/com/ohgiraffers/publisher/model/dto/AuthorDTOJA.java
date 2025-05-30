package com.ohgiraffers.publisher.model.dto;

public class AuthorDTOJA {
    private int authorId;
    private String authorName;
    private Boolean awarded;
    private int empId;

    public AuthorDTOJA() {}

    public AuthorDTOJA(int authorId, String authorName, Boolean awarded, int empId) {
        this.authorId = authorId;
        this.authorName = authorName;
        this.awarded = awarded;
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

    public int getEmpId() {
        return empId;
    }

    public void setEmpId(int empId) {
        this.empId = empId;
    }

    @Override
    public String toString() {
        return "PublisherDTO{" +
                "authorId=" + authorId +
                ", authorName='" + authorName + '\'' +
                ", awarded=" + awarded +
                ", empId=" + empId +
                '}';
    }
}