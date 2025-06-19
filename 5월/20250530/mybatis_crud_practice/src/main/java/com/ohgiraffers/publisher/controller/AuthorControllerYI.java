package com.ohgiraffers.publisher.controller;

import com.ohgiraffers.publisher.model.dto.AuthorAndEmployeeDTO;
import com.ohgiraffers.publisher.model.service.AuthorServiceYI;

import java.util.List;
import java.util.Map;

public class AuthorControllerYI {

    private final PrintResultYI printResultYI;

    private final AuthorServiceYI authorServiceYI;

    public AuthorControllerYI() {
        printResultYI = new PrintResultYI();
        authorServiceYI = new AuthorServiceYI();
    }

    public void selectAllAuthor() {
        List<AuthorAndEmployeeDTO> authorList = authorServiceYI.selectAllAuthor();

        if (authorList != null && authorList.size() > 0) {
            printResultYI.printAuthorList(authorList);
        } else {
            printResultYI.printErrorMessage("SELECT");
        }
    }

    public void selectAuthorByCode(Map<String, Integer> parameter) {

        int code = parameter.get("code");

        AuthorAndEmployeeDTO author = authorServiceYI.selectAuthorByCode(code);

        if (author != null) {
            printResultYI.printAuthorList(author);
        } else {
            printResultYI.printErrorMessage("SELECT");
        }
    }

    public void selectAllAuthorWithEmp() {
        List<AuthorAndEmployeeDTO> authorList = authorServiceYI.selectAllAuthorWithEmp();

        if (authorList != null && authorList.size() > 0) {
            printResultYI.printAuthorList(authorList);
        } else {
            printResultYI.printErrorMessage("SELECT");
        }

    }


    public void selectAuthorByCodeWithEmp(Map<String, Integer> parameter) {

        int code = parameter.get("code");

        AuthorAndEmployeeDTO author = authorServiceYI.selectAuthorByCodeWithEmp(code);

        if (author != null) {
            printResultYI.printAuthorList(author);
        } else {
            printResultYI.printErrorMessage("SELECT");
        }

    }

    public void insertAuthor(Map<String, String> parameter) {

        String authorName = parameter.get("authorName");

        boolean awarded;

        if (parameter.get("awarded") != null) {
            awarded = true;
        } else {
            awarded = false;
        }

        int empId = Integer.parseInt(parameter.get("empId"));

        AuthorAndEmployeeDTO author = new AuthorAndEmployeeDTO();
        author.setAuthorName(authorName);
        author.setAwarded(awarded);
        author.setEmpId(empId);

        if (AuthorServiceYI.insertAuthor(author)) {
            printResultYI.printSuccessMessage("INSERT");
        } else {
            printResultYI.printErrorMessage("INSERT");
        }
    }

    public void updateAuthor(Map<String, String> parameter) {

        int authorId = Integer.parseInt(parameter.get("authorId"));
        boolean awarded;

        if (parameter.get("awarded") != null) {
            awarded = true;
        } else {
            awarded = false;
        }

        int empId = Integer.parseInt(parameter.get("empId"));


        AuthorAndEmployeeDTO author = new AuthorAndEmployeeDTO();
        author.setAuthorId(authorId);
        author.setAwarded(awarded);
        author.setEmpId(empId);


        if (AuthorServiceYI.updateAuthor(author)) {
            printResultYI.printSuccessMessage("UPDATE");
        } else {
            printResultYI.printErrorMessage("UPDATE");
        }

    }

    public void deleteAuthor(Map<String, Integer> parameter) {

        int authorId = parameter.get("code");

        if (authorServiceYI.deleteAuthor(authorId)) {
            printResultYI.printSuccessMessage("DELETE");
        } else {
            printResultYI.printErrorMessage("DELETE");
        }

    }
}
