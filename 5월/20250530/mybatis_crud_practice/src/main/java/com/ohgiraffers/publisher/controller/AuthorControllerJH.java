package com.ohgiraffers.publisher.controller;

import com.ohgiraffers.publisher.model.dto.AuthorAndEmployeeDTO;
import com.ohgiraffers.publisher.model.dto.AuthorDTO;
import com.ohgiraffers.publisher.model.dto.EmployeeDTO;
import com.ohgiraffers.publisher.model.service.AuthorServiceJH;

import java.util.List;
import java.util.Map;

public class AuthorControllerJH {

    private final AuthorServiceJH authorService;
    private final PrintResultJH printResult;

    public AuthorControllerJH(){
        authorService = new AuthorServiceJH();
        printResult = new PrintResultJH();
    }

    public void selectAllAuthor() {

        List<AuthorAndEmployeeDTO> authorList = authorService.selectAllAuthor();

        if(authorList != null){
            printResult.printAuthorList(authorList);
        } else {
            printResult.printErrorMessage("selectAllAuthor");
        }

    }

    public void selectAllAuthorIdAndName() {

        List<AuthorDTO> authorList = authorService.selectAllAuthorIdAndName();

        if(authorList != null){
            printResult.printAllAuthorIdAndName(authorList);
        } else {
            printResult.printErrorMessage("selectAllAuthor");
        }

    }

    public void selectAuthorByAuthorId(int authorId) {

        AuthorAndEmployeeDTO author = authorService.selectAuthorByAuthorId(authorId);

        if(author != null){
            printResult.printAuthor(author);
        } else {
            printResult.printErrorMessage("selectOneAuthor");
        }
    }

    public void selectAllEmployee() {

        List<EmployeeDTO> employList = authorService.selectAllEmployee();

        if(employList != null){
            printResult.printAllEmployee(employList);
        } else {
            printResult.printErrorMessage("selectAllEmployee");
        }
    }

    public void registNewAuthor(Map<String, String> parameter) {

        String authorName = parameter.get("authorName");
        String isAwarded = parameter.get("isAwarded");
        int empId = Integer.parseInt(parameter.get("empId"));

        AuthorDTO author = new AuthorDTO();

        author.setAuthorName(authorName);

        if(isAwarded.equals("Y")){
            author.setAwarded(true);
        } else {
            author.setAwarded(false);
        }
        author.setEmpId(empId);

        if(authorService.registNewAuthor(author)){
            printResult.printSuccessMessage("registNewAuthor");
        } else {
            printResult.printErrorMessage("registNewAuthor");
        }

    }

    public void modifyAuthorInfo(Map<String, String> parameter) {

        int authorId = Integer.parseInt(parameter.get("authorId"));
        String authorName = parameter.get("authorName");
        String isAwarded = parameter.get("isAwarded");

        AuthorDTO author = new AuthorDTO();

        author.setAuthorId(authorId);

        if(authorName != null && !authorName.isEmpty()){
            author.setAuthorName(authorName);
        } else {
            author.setAuthorName(null);
        }

        if(isAwarded != null && !isAwarded.isEmpty()) {
            if (isAwarded.equals("Y")) {
                author.setAwarded(true);
            } else if (isAwarded.equals("N")) {
                author.setAwarded(false);
            }
        } else {
            author.setAwarded(null);
        }

        if(authorService.modifyAuthorInfo(author)){
            printResult.printSuccessMessage("modifyAuthor");
        } else {
            printResult.printErrorMessage("modifyAuthor");
        }


    }

    public void deleteAuthorInfo(int authorId) {

        if(authorService.deleteAuthorInfo(authorId)){
            printResult.printSuccessMessage("deleteAuthor");
        } else {
            printResult.printErrorMessage("deleteAuthor");
        }

    }
}
