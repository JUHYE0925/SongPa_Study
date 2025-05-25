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

    public PublisherDTO selectEmpByEmpId(String empId) {

        SqlSession sqlSession = getSqlSession();

        PublisherDTO emp = publisherDAO.selectEmpByEmpId(sqlSession, empId);

        sqlSession.close();

        return emp;

    }

    public boolean insertNewEmp(PublisherDTO emp) {

        SqlSession sqlSession = getSqlSession();

        int result = publisherDAO.insertNewEmp(sqlSession, emp);

        if(result > 0){
            sqlSession.commit();
        } else {
            sqlSession.rollback();
        }

        return result > 0 ? true : false;
    }

    public boolean modifyEmp(PublisherDTO emp) {

        SqlSession sqlSession = getSqlSession();

        int result = publisherDAO.modifyEmp(sqlSession, emp);

        if(result > 0){
            sqlSession.commit();
        } else {
            sqlSession.rollback();
        }

        return result > 0 ? true : false;
    }

    public boolean deleteEmp(String empId) {

        SqlSession sqlSession = getSqlSession();

        int result = publisherDAO.deleteEmp(sqlSession, empId);

        if(result > 0){
            sqlSession.commit();
        } else {
            sqlSession.rollback();
        }

        return result > 0 ? true : false;

    }
}
