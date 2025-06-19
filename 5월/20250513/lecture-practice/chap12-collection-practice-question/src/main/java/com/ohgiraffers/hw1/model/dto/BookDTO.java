package com.ohgiraffers.hw1.model.dto;

public class BookDTO {

    private int bookNo;
    private int category;
    private String title;
    private String author;

    public BookDTO(){}

    public BookDTO(int bookNo, int category, String title, String author) {
        this.bookNo = bookNo;
        this.category = category;
        this.title = title;
        this.author = author;
    }

    public int getBookNo() {
        return bookNo;
    }

    public void setBookNo(int bookNo) {
        this.bookNo = bookNo;
    }

    public int getCategory() {
        return category;
    }

    public void setCategory(int category) {
        this.category = category;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    @Override
    public String toString() {
        return "BookDTO{" +
                "bookNo=" + bookNo +
                ", category=" + category +
                ", title='" + title + '\'' +
                ", author='" + author + '\'' +
                '}';
    }
}
