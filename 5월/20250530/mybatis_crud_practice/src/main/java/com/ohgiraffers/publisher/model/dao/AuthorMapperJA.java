package com.ohgiraffers.publisher.model.dao;

import com.ohgiraffers.publisher.model.dto.AuthorAndEmployeeDTOJA;
import com.ohgiraffers.publisher.model.dto.AuthorDTOJA;

import java.util.List;

public interface AuthorMapperJA {
    int createNewAuthor(AuthorDTOJA author);

    List<AuthorAndEmployeeDTOJA> readAllAuthor();

    AuthorAndEmployeeDTOJA readOneAuthorById(int code);

    int modifyAuthor(AuthorDTOJA authorUp);

    int deleteAuthorInfo(int code);

}
