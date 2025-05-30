package com.ohgiraffers.publisher.model.dao;

import com.ohgiraffers.publisher.model.dto.AuthorAndEmployeeDTO;
import com.ohgiraffers.publisher.model.dto.AuthorDTO;

import java.util.List;

public interface publisherMapperYR {

    List<AuthorAndEmployeeDTO> selectAllAuthor();

    AuthorAndEmployeeDTO selectAuthorByCode(int id);

    int registAuthor(AuthorDTO authorDTO);

    int modifyAuthorEmp(AuthorDTO authorDTO);

    int deleteAuthor(int id);
}
