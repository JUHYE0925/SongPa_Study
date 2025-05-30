package com.ohgiraffers.publisher.model.service;

import com.ohgiraffers.publisher.model.dao.publisherMapperYR;
import com.ohgiraffers.publisher.model.dto.AuthorAndEmployeeDTO;
import com.ohgiraffers.publisher.model.dto.AuthorDTO;
import org.apache.ibatis.session.SqlSession;

import java.util.List;

import static com.ohgiraffers.publisher.common.TemplateYR.getSqlSession;

public class AuthorServiceYR {

    public List<AuthorAndEmployeeDTO> selectAllAuthor(){

        SqlSession session = getSqlSession();

        publisherMapperYR publisherMapperYR = session.getMapper(publisherMapperYR.class);

        List<AuthorAndEmployeeDTO> authorList = publisherMapperYR.selectAllAuthor();

        session.close();

        return authorList;
    }

    public AuthorAndEmployeeDTO selectAuthorByCode(int id) {

        SqlSession session = getSqlSession();

        publisherMapperYR publisherMapperYR = session.getMapper(publisherMapperYR.class);

        AuthorAndEmployeeDTO authorDTO = publisherMapperYR.selectAuthorByCode(id);

        session.close();

        return authorDTO;
    }

    public boolean registAuthor(AuthorDTO authorDTO) {

        SqlSession session = getSqlSession();

        publisherMapperYR publisherMapperYR = session.getMapper(publisherMapperYR.class);

        int result = publisherMapperYR.registAuthor(authorDTO);

        if(result > 0){
            session.commit();
        }else{
            session.rollback();
        }

        session.close();

        return result > 0 ? true : false;
    }

    public boolean modifyAuthorEmp(AuthorDTO authorDTO) {
        SqlSession session = getSqlSession();

        publisherMapperYR publisherMapperYR = session.getMapper(publisherMapperYR.class);

        int result = publisherMapperYR.modifyAuthorEmp(authorDTO);

        if(result > 0){
            session.commit();
        }else{
            session.rollback();
        }

        session.close();

        return result > 0 ? true : false;
    }

    public boolean deleteAuthor(int id) {
        SqlSession session = getSqlSession();

        publisherMapperYR publisherMapperYR = session.getMapper(publisherMapperYR.class);

        int result = publisherMapperYR.deleteAuthor(id);

        if(result > 0){
            session.commit();
        }else{
            session.rollback();
        }

        session.close();

        return result > 0 ? true : false;
    }
}
