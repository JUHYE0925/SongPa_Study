package com.ohgiraffers.model;

import org.apache.ibatis.session.SqlSession;

import java.sql.Date;
import java.util.List;

public class PublisherDAO {


    public List<PublisherDTO> selectAllEmp(SqlSession sqlSession) {

        return sqlSession.selectList("PublisherMapper.selectAllEmp");
    }
}
