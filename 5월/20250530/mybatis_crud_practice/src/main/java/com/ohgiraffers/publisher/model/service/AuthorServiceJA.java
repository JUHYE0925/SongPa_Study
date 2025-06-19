package com.ohgiraffers.publisher.model.service;

import com.ohgiraffers.publisher.model.dao.AuthorMapperJA;
import com.ohgiraffers.publisher.model.dto.AuthorAndEmployeeDTOJA;
import com.ohgiraffers.publisher.model.dto.AuthorDTOJA;
import org.apache.ibatis.session.SqlSession;

import java.util.List;

import static com.ohgiraffers.publisher.common.TemplateJA.getSqlSession;

public class AuthorServiceJA {
    public boolean createNewAuthor(AuthorDTOJA author) {
        SqlSession sqlSession = getSqlSession();

        AuthorMapperJA authorMapper = sqlSession.getMapper(AuthorMapperJA.class);

        int result = authorMapper.createNewAuthor(author);

        if(result > 0) {
            sqlSession.commit();
        }else {
            sqlSession.rollback();
        }

        sqlSession.close();
        return result > 0? true : false;
    }

    public List<AuthorAndEmployeeDTOJA> readAllAuthor() {
        SqlSession sqlSession =getSqlSession();
        AuthorMapperJA authorMapper = sqlSession.getMapper(AuthorMapperJA.class);

        List<AuthorAndEmployeeDTOJA> publisherList = authorMapper.readAllAuthor();

        sqlSession.close();
        return publisherList;
    }

    public AuthorAndEmployeeDTOJA readOneAuthorById(int code) {
        SqlSession sqlSession = getSqlSession();

        AuthorMapperJA authorMapper = sqlSession.getMapper(AuthorMapperJA.class);

        AuthorAndEmployeeDTOJA menuDTO = authorMapper.readOneAuthorById(code);

        sqlSession.close();
        return menuDTO;
    }

    public boolean modifyAuthor(AuthorDTOJA authorUp) {
        SqlSession sqlSession = getSqlSession();

        AuthorMapperJA aMapper = sqlSession.getMapper(AuthorMapperJA.class);

        int result = aMapper.modifyAuthor(authorUp);

        if(result>0) {
            sqlSession.commit();
        }else {
            sqlSession.rollback();
        }

        sqlSession.close();
        return result>0? true : false;
    }

    public boolean deleteAuthorInfo(int code) {
        SqlSession sqlSession = getSqlSession();

        AuthorMapperJA authorMapper = sqlSession.getMapper(AuthorMapperJA.class);

        int result = authorMapper.deleteAuthorInfo(code);

        if(result>0) {
            sqlSession.commit();
        }else {
            sqlSession.rollback();
        }

        sqlSession.close();
        return result>0? true : false;
    }
}
