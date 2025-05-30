package com.ohgiraffers.publisher.model.dao;

import com.ohgiraffers.publisher.model.dto.AuthorAndEmployeeDTO;
import java.util.List;
import java.util.Map;

public interface publisherMapperGY {
    List<AuthorAndEmployeeDTO> selectAllAuthors();
    AuthorAndEmployeeDTO selectAuthorById(int authorId);
    int insertAuthor(Map<String, String> params);
    int updateAuthor(Map<String, String> params);
    int deleteBooksByAuthorId(int authorId);
    int deleteAuthor(int authorId);
}
