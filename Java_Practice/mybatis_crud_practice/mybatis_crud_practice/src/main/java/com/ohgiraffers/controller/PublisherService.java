package com.ohgiraffers.controller;

import com.ohgiraffers.model.PublisherDAO;
import com.ohgiraffers.model.PublisherDTO;
import org.apache.ibatis.session.SqlSession;

import java.util.List;

import static com.ohgiraffers.config.Template.getSqlSession;

public class PublisherService {

    private final PublisherDAO publisherDAO;

    public PublisherService (){
        publisherDAO = new PublisherDAO();
    }

    public List<PublisherDTO> selectAllEmp() {

        SqlSession sqlSession = getSqlSession();

        List<PublisherDTO> empList = publisherDAO.selectAllEmp(sqlSession);

        sqlSession.close();

        return empList;

    }
}
