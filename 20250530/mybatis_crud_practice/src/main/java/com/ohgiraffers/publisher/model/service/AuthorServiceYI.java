package com.ohgiraffers.publisher.model.service;

import com.ohgiraffers.publisher.model.dao.AuthorMapperYI;
import com.ohgiraffers.publisher.model.dto.AuthorAndEmployeeDTO;
import org.apache.ibatis.session.SqlSession;

import java.util.List;

import static com.ohgiraffers.publisher.common.TemplateYI.getSqlSession;

public class AuthorServiceYI {


    public List<AuthorAndEmployeeDTO> selectAllAuthor() {

        SqlSession session = getSqlSession();

        AuthorMapperYI mapper = session.getMapper(AuthorMapperYI.class);

        List<AuthorAndEmployeeDTO> authorList = mapper.selectAllAuthor();

        session.close();

        return authorList;
    }

    public AuthorAndEmployeeDTO selectAuthorByCode(int code) {

        SqlSession session = getSqlSession();

        AuthorMapperYI mapper = session.getMapper(AuthorMapperYI.class);

        AuthorAndEmployeeDTO author = mapper.selectAuthorByCode(code);

        session.close();

        return author;
    }

    public List<AuthorAndEmployeeDTO> selectAllAuthorWithEmp() {

        SqlSession session = getSqlSession();

        AuthorMapperYI mapper = session.getMapper(AuthorMapperYI.class);

        List<AuthorAndEmployeeDTO> authorList = mapper.selectAllAuthorWithEmp();

        session.close();

        return authorList;
    }

    public AuthorAndEmployeeDTO selectAuthorByCodeWithEmp(int code) {

        SqlSession session = getSqlSession();

        AuthorMapperYI mapper = session.getMapper(AuthorMapperYI.class);

        AuthorAndEmployeeDTO author = mapper.selectAuthorByCodeWithEmp(code);

        session.close();

        return author;

    }

    public static boolean insertAuthor(AuthorAndEmployeeDTO author) {
        SqlSession session = getSqlSession();
        AuthorMapperYI mapper = session.getMapper(AuthorMapperYI.class);

        int result = mapper.insertAuthor(author);

        if (result > 0) {
            session.commit();
        } else {
            session.rollback();
        }

        session.close();

        return result > 0 ? true : false;
    }

    public static boolean updateAuthor(AuthorAndEmployeeDTO author) {
        SqlSession session = getSqlSession();
        AuthorMapperYI mapper = session.getMapper(AuthorMapperYI.class);

        int result = mapper.updateAuthor(author);

        if (result > 0) {
            session.commit();
        } else {
            session.rollback();
        }

        session.close();

        return result > 0 ? true : false;
    }

    public boolean deleteAuthor(int authorId) {

        SqlSession session = getSqlSession();
        AuthorMapperYI mapper = session.getMapper(AuthorMapperYI.class);

        int result = mapper.deleteAuthor(authorId);

        if (result > 0) {
            session.commit();
        } else {
            session.rollback();
        }

        session.close();

        return result > 0 ? true : false;
    }
}
