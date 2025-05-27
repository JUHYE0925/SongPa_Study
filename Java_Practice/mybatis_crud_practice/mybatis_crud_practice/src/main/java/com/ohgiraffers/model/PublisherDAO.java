package com.ohgiraffers.model;

import org.apache.ibatis.session.SqlSession;

import java.sql.Date;
import java.util.List;
import java.util.Map;

public class PublisherDAO {


    public List<PublisherDTO> selectAllEmp(SqlSession sqlSession) {

        return sqlSession.selectList("PublisherMapper.selectAllEmp");
    }

    public List<EmployeeAndDeptDTO> selectAllEmpAndDept(SqlSession sqlSession) {

        return sqlSession.selectList("PublisherMapper.selectEmpAndDept");
    }


    public PublisherDTO selectEmpByEmpId(SqlSession sqlSession, String empId) {

        return sqlSession.selectOne("PublisherMapper.selectEmpByEmpId", empId);
    }

    public int insertNewEmp(SqlSession sqlSession, PublisherDTO emp) {

        return sqlSession.insert("PublisherMapper.insertNewEmp", emp);
    }

    public int modifyEmp(SqlSession sqlSession, PublisherDTO emp) {
        return sqlSession.update("PublisherMapper.modifyEmp", emp);
    }

    public int modifyEmpAllOrSome(SqlSession sqlSession, Map<String, Object> criteria) {

        return sqlSession.update("PublisherMapper.modifyEmpAllOrSome", criteria);
    }

    public int deleteEmp(SqlSession sqlSession, String empId) {

        return sqlSession.delete("PublisherMapper.deleteEmp", empId);
    }

}
