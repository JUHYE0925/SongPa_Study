package com.ohgiraffers.publisher.controller;

import com.ohgiraffers.publisher.model.dto.AuthorAndEmployeeDTOJA;
import com.ohgiraffers.publisher.model.dto.AuthorDTOJA;
import com.ohgiraffers.publisher.model.service.AuthorServiceJA;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class AuthorControllerJA {
    private final AuthorServiceJA authorService;
    private final PrintResultJA printResult;

    public AuthorControllerJA() {
        printResult = new PrintResultJA();
        authorService = new AuthorServiceJA();
    }

    public void createNewAuthor(Map<String, String> parameter) {
        String authorName = parameter.get("authorName");
        boolean awarded = Boolean.parseBoolean(parameter.get("awarded"));
        int authorId = Integer.parseInt(parameter.get("authorId"));
        int empId = Integer.parseInt(parameter.get("empId"));

        // 보통 parameter 3개 이상이면 DTO에 뭉쳐서 보낸다.
        AuthorDTOJA author = new AuthorDTOJA();
        author.setAuthorName(authorName);
        author.setAwarded(awarded);
        author.setAuthorId(authorId);
        author.setEmpId(empId);

        if (authorService.createNewAuthor(author)) {
            printResult.printSuccessMsg("insert");
        } else {
            printResult.printErrorMessage("insert");
        }
    }

    public void readAllAuthor() {
        List<AuthorAndEmployeeDTOJA> list = authorService.readAllAuthor();
        if (list != null) {
            printResult.printAuthorList(list);
        } else {
            printResult.printErrorMessage("selectList");
        }
    }

    public void readOneAuthorById(Map<String, String> parameter) {
        int authorId = Integer.parseInt(parameter.get("authorId"));

        AuthorAndEmployeeDTOJA author = authorService.readOneAuthorById(authorId);
        if (author != null) {
            printResult.printAuthor(author);
        } else {

            printResult.printErrorMessage("selectOne");
        }
    }

    public void updateAuthorInfo(Map<String, String> parameter) {
        int modifyingAuthor = Integer.parseInt(parameter.get("editAuthorId"));
        String editAwarded = parameter.get("editAwarded");
        int editEmpId = Integer.parseInt(parameter.get("editEmpId"));

        AuthorDTOJA authorUp = new AuthorDTOJA();
        authorUp.setAuthorId(modifyingAuthor);
        authorUp.setAwarded(Boolean.valueOf(editAwarded));
        //OX 받아들이게 수정 (true/false로 하면 괜찮다길래 if(어쩌구.equals('O')...로 안 바꾸고 true/false로 수정)
        authorUp.setEmpId(editEmpId);

        // update 잘 됐거나 안 됐을 경우 알 수 있는 메세지 출력 기능(PrintResult에 있음)
        if(authorService.modifyAuthor(authorUp)) {
            printResult.printSuccessMsg("update");
        } else {
            printResult.printErrorMessage("update");
        }
    }

    public void deleteAuthorInfo(int code) {
        int authorId = Integer.parseInt(String.valueOf(code));

        AuthorDTOJA author = new AuthorDTOJA();
        author.setAuthorId(authorId);
        if(authorService.deleteAuthorInfo(code)) {
            printResult.printSuccessMsg("delete");
        } else {
            printResult.printErrorMessage("delete");
        }
    }
}