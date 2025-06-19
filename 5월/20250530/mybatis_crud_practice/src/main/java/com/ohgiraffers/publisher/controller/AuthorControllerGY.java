package com.ohgiraffers.publisher.controller;

import com.ohgiraffers.publisher.model.service.AuthorServiceGY;
import java.util.Map;

public class AuthorControllerGY {

    private final AuthorServiceGY authorService = new AuthorServiceGY();

    public void selectAllAuthors() {
        authorService.selectAllAuthors();
    }

    public void selectAuthorById(Map<String, String> params) {
        int authorId = Integer.parseInt(params.get("authorId"));
        authorService.selectAuthorById(authorId);
    }

    public void insertAuthor(Map<String, String> params) {
        authorService.registAuthor(params);
    }

    public void updateAuthor(Map<String, String> params) {
        authorService.modifyAuthor(params);
    }

    public void deleteAuthor(Map<String, String> params) {
        int authorId = Integer.parseInt(params.get("authorId"));
        authorService.deleteAuthor(authorId);
    }
}
