package com.ohgiraffers.publisher.model.dao;

import com.ohgiraffers.publisher.model.dto.AuthorAndEmployeeDTO;

import java.util.List;

public interface AuthorMapperYI {
    List<AuthorAndEmployeeDTO> selectAllAuthor();

    AuthorAndEmployeeDTO selectAuthorByCode(int code);

    List<AuthorAndEmployeeDTO> selectAllAuthorWithEmp();

    AuthorAndEmployeeDTO selectAuthorByCodeWithEmp(int code);

    int insertAuthor(AuthorAndEmployeeDTO author);

    int updateAuthor(AuthorAndEmployeeDTO author);

    int deleteAuthor(int authorId);
}
