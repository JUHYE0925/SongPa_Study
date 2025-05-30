package com.ohgiraffers.publisher.model.service;

import com.ohgiraffers.publisher.model.dao.AuthorMapperJH;
import com.ohgiraffers.publisher.model.dto.AuthorAndEmployeeDTO;
import com.ohgiraffers.publisher.model.dto.AuthorDTO;
import com.ohgiraffers.publisher.model.dto.EmployeeDTO;
import org.apache.ibatis.session.SqlSession;

import java.util.List;

import static com.ohgiraffers.publisher.common.TemplateJH.getSqlSession;

public class AuthorServiceJH {

    public List<AuthorAndEmployeeDTO> selectAllAuthor() {

        SqlSession sqlSession = getSqlSession();

        AuthorMapperJH authorMapper = sqlSession.getMapper(AuthorMapperJH.class);

        List<AuthorAndEmployeeDTO> authorList = authorMapper.selectAllAuthor();

        sqlSession.close();

        return authorList;

    }

    public List<AuthorDTO> selectAllAuthorIdAndName() {

        SqlSession sqlSession = getSqlSession();

        AuthorMapperJH authorMapper = sqlSession.getMapper(AuthorMapperJH.class);

        List<AuthorDTO> authorList = authorMapper.selectAllAuthorIdAndName();

        sqlSession.close();

        return authorList;

    }

    public AuthorAndEmployeeDTO selectAuthorByAuthorId(int authorId) {

        SqlSession sqlSession = getSqlSession();

        AuthorMapperJH authorMapper = sqlSession.getMapper(AuthorMapperJH.class);

        AuthorAndEmployeeDTO author = authorMapper.selectAuthorByAuthorId(authorId);

        sqlSession.close();

        return author;

    }


    public boolean registNewAuthor(AuthorDTO author) {

        SqlSession sqlSession = getSqlSession();

        AuthorMapperJH authorMapper = sqlSession.getMapper(AuthorMapperJH.class);

        int result = authorMapper.registNewAuthor(author);

        if(result > 0){
            sqlSession.commit();
        } else {
            sqlSession.rollback();
        }

        sqlSession.close();

        return result > 0 ? true : false;
    }

    public List<EmployeeDTO> selectAllEmployee() {

        SqlSession sqlSession = getSqlSession();

        AuthorMapperJH authorMapper = sqlSession.getMapper(AuthorMapperJH.class);

        List<EmployeeDTO> employeeList = authorMapper.selectAllEmployee();

        sqlSession.close();

        return employeeList;
    }

    public boolean modifyAuthorInfo(AuthorDTO author) {

        SqlSession sqlSession = getSqlSession();

        AuthorMapperJH authorMapper = sqlSession.getMapper(AuthorMapperJH.class);

        int result = authorMapper.modifyAuthorInfo(author);

        if(result > 0){
            sqlSession.commit();
        } else {
            sqlSession.rollback();
        }

        sqlSession.close();

        return result > 0 ? true : false;
    }

    public boolean deleteAuthorInfo(int authorId) {

        SqlSession sqlSession = getSqlSession();

        AuthorMapperJH authorMapper = sqlSession.getMapper(AuthorMapperJH.class);

        int result = authorMapper.deleteAuthorInfo(authorId);

        if(result > 0) {
            sqlSession.commit();
        } else {
            sqlSession.rollback();
        }

        sqlSession.close();

        return result > 0 ? true : false;

    }
}
