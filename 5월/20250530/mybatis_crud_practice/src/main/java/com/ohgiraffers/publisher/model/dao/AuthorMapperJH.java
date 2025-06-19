package com.ohgiraffers.publisher.model.dao;

import com.ohgiraffers.publisher.model.dto.AuthorAndEmployeeDTO;
import com.ohgiraffers.publisher.model.dto.AuthorDTO;
import com.ohgiraffers.publisher.model.dto.EmployeeDTO;

import java.util.List;

public interface AuthorMapperJH {

    List<AuthorAndEmployeeDTO> selectAllAuthor();

    List<AuthorDTO> selectAllAuthorIdAndName();

    AuthorAndEmployeeDTO selectAuthorByAuthorId(int authorId);

    int registNewAuthor(AuthorDTO author);

    List<EmployeeDTO> selectAllEmployee();

    int modifyAuthorInfo(AuthorDTO author);

    int deleteAuthorInfo(int authorId);
}
