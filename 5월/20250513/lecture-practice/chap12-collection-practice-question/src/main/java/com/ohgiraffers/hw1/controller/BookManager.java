package com.ohgiraffers.hw1.controller;

import com.ohgiraffers.hw1.model.comparator.AscCategory;
import com.ohgiraffers.hw1.model.comparator.DescCategory;
import com.ohgiraffers.hw1.model.dto.BookDTO;

import java.util.ArrayList;
import java.util.Comparator;

public class BookManager {

    private ArrayList<BookDTO> bookList = new ArrayList<>();

    public BookManager(){}

    public BookManager(ArrayList<BookDTO> bookList){
        this.bookList = bookList;
    }

    public void addBook(BookDTO book){
        bookList.add(book);
    }

    public int deleteBook(int index){

        int result = 0;

        try {
            bookList.remove(index);
            result = 0;
        } catch (Exception e){
            result = -1;
        }

        return result;
    }

    public int searchBook(String bTitle){

        for(int i = 0; i < bookList.size(); i++){
            if(bookList.get(i).getTitle().equals(bTitle)){
                return i;
            }
        }

        return -1;

    }

    public void printBook(int index){
        System.out.println(bookList.get(index));

    }

    public void displayAll(){

        if(bookList.isEmpty()){
            System.out.println("출력할 도서가 없습니다.");
        } else {
            for(BookDTO b : bookList){
                System.out.println(b);
            }
        }
    }

    public ArrayList<BookDTO> sortedBookList(int select){
        AscCategory acs = new AscCategory();
        DescCategory des = new DescCategory();

        if(select == 1){
            acs.compare(bookList);
        } else if (select == 2) {
            des.compare(bookList);
        } else {
            System.out.println("번호를 잘못 입력하셨습니다.");
        }

        return bookList;


    }

    public void printBookList(ArrayList<BookDTO> br){

        for(BookDTO b : bookList){
            System.out.println(b);
        }

    }
}
