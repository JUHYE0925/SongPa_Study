package com.ohgiraffers.model.dao;

import com.ohgiraffers.model.dto.EmployeeDTO;

import java.io.FileInputStream;
import java.io.IOException;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;
import java.util.Scanner;

import static com.ohgiraffers.common.JDBCTemplate.close;

public class EmployeeDAO {

    private Properties prop = new Properties();

    public EmployeeDAO(){

        try {
            prop.loadFromXML(new FileInputStream("src/main/java/com/ohgiraffers/mapper/employee-query.xml"));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

    }

    public List<EmployeeDTO> selectAllEmp(Connection con){

        Statement stmt = null;
        ResultSet rset = null;
        List<EmployeeDTO> empList = null;
        EmployeeDTO employee = null;

        String query = prop.getProperty("selectAllEmp");

        try {
            stmt = con.createStatement();
            rset = stmt.executeQuery(query);

            empList = new ArrayList<>();


            while(rset.next()){

                employee = new EmployeeDTO();

                employee.setEmpId(rset.getString("EMP_ID"));
                employee.setEmpName(rset.getString("EMP_NAME"));
                employee.setEmpNo(rset.getString("EMP_NO"));
                employee.setEmail(rset.getString("EMAIL"));
                employee.setPhone(rset.getString("PHONE"));
                employee.setDeptCode(rset.getString("DEPT_CODE"));
                employee.setJobCode(rset.getString("JOB_CODE"));
                employee.setSalLevel(rset.getString("SAL_LEVEL"));
                employee.setSalary(rset.getInt("SALARY"));
                employee.setBonus(rset.getDouble("BONUS"));
                employee.setManagerId(rset.getString("MANAGER_ID"));
                employee.setHireDate(rset.getDate("HIRE_DATE"));
                employee.setEntDate(rset.getDate("ENT_DATE"));
                employee.setEntYn(rset.getString("ENT_YN"));

                empList.add(employee);
            }

        } catch (SQLException e) {
            throw new RuntimeException(e);
        } finally {
            close(stmt);
            close(rset);
        }

        return empList;

    }

    public EmployeeDTO selectByIdEmp(Connection con, String empId){

        PreparedStatement pstmt = null;
        ResultSet rset = null;
        EmployeeDTO employee = null;

        String query = prop.getProperty("selectByIdEmp");

        try {
            pstmt = con.prepareStatement(query);
            pstmt.setString(1, empId);
            rset = pstmt.executeQuery();


            if(rset.next()){

                employee = new EmployeeDTO();

                employee.setEmpId(rset.getString("EMP_ID"));
                employee.setEmpName(rset.getString("EMP_NAME"));
                employee.setEmpNo(rset.getString("EMP_NO"));
                employee.setEmail(rset.getString("EMAIL"));
                employee.setPhone(rset.getString("PHONE"));
                employee.setDeptCode(rset.getString("DEPT_CODE"));
                employee.setJobCode(rset.getString("JOB_CODE"));
                employee.setSalLevel(rset.getString("SAL_LEVEL"));
                employee.setSalary(rset.getInt("SALARY"));
                employee.setBonus(rset.getDouble("BONUS"));
                employee.setManagerId(rset.getString("MANAGER_ID"));
                employee.setHireDate(rset.getDate("HIRE_DATE"));
                employee.setEntDate(rset.getDate("ENT_DATE"));
                employee.setEntYn(rset.getString("ENT_YN"));

            }

        } catch (SQLException e) {
            throw new RuntimeException(e);
        } finally {
            close(rset);
            close(pstmt);
        }

        return employee;

    }

    public int maxEmpId(Connection con){

        Statement stmt = null;
        ResultSet rset = null;
        int maxEmpId = 0;

        String query = prop.getProperty("maxEmpId");

        try {
            stmt = con.createStatement();
            rset = stmt.executeQuery(query);

            if(rset.next()){
                maxEmpId = rset.getInt("MAX(EMP_ID)");
            }
        } catch (SQLException e) {
            throw new RuntimeException(e);
        } finally {
            close(rset);
            close(stmt);
        }

        return maxEmpId;

    }

    public int insertEmp(Connection con, String empId, String empName, String empNo, String jobCode, String salLevel){

        PreparedStatement pstmt = null;
        int result = 0;

        String query = prop.getProperty("insertEmp");

        try {
            pstmt = con.prepareStatement(query);
            pstmt.setString(1, empId);
            pstmt.setString(2, empName);
            pstmt.setString(3, empNo);
            pstmt.setString(4, jobCode);
            pstmt.setString(5, salLevel);

            result = pstmt.executeUpdate();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }finally {
            close(pstmt);
        }

        return result;
    }

    public int modifyEmp(Connection con, String empId, String empName, String jobCode, String salLevel){

        PreparedStatement pstmt = null;
        int result = 0;

        String query = prop.getProperty("modifyEmp");

        try {
            pstmt = con.prepareStatement(query);
            pstmt.setString(1, empName);
            pstmt.setString(2, jobCode);
            pstmt.setString(3, salLevel);
            pstmt.setString(4, empId);

            result = pstmt.executeUpdate();

        } catch (SQLException e) {
            throw new RuntimeException(e);
        } finally {
            close(pstmt);
        }

        return  result;

    }

    public int deleteEmp(Connection con, String empId){

        PreparedStatement pstmt = null;
        int result = 0;

        String query = prop.getProperty("deleteEmp");

        try {
            pstmt = con.prepareStatement(query);
            pstmt.setString(1, empId);

            result = pstmt.executeUpdate();

        } catch (SQLException e) {
            throw new RuntimeException(e);
        } finally {
            close(pstmt);
        }

        return result;

    }



}
