package com.ohgiraffers.controller;

import com.ohgiraffers.model.PublisherDTO;
import com.ohgiraffers.view.PrintResult;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class PublisherController {

    private final PrintResult printResult;

    private final PublisherService publisherService;

    public PublisherController(){
        printResult = new PrintResult();
        publisherService = new PublisherService();
    }

    public void selectAllEmp() {

        List<PublisherDTO> empList = publisherService.selectAllEmp();

        if(empList != null){
            printResult.printAllEmp(empList);
        } else {
            printResult.printErrorMessage("selectList");
        }

    }

    public void selectEmpByEmpId(Map<String, String> parameter) {

        String empId = parameter.get("empId");

        PublisherDTO emp = publisherService.selectEmpByEmpId(empId);

        if(emp != null){
            printResult.printEmp(emp);
        } else {
            printResult.printErrorMessage("selectOne");
        }

    }

    public void insertNewEmp(Map<String, String> parameter) {

        String empId = parameter.get("empId");
        String empName = parameter.get("empName");
        String email = parameter.get("email");
        String deptCode = parameter.get("deptCode");
        Integer salary = Integer.parseInt(parameter.get("salary"));
        Date hireDate = Date.valueOf(parameter.get("hireDate"));

        PublisherDTO emp = new PublisherDTO();
        emp.setEmpId(empId);
        emp.setEmpName(empName);
        emp.setEmail(email);
        emp.setDeptCode(deptCode);
        emp.setSalary(salary);
        emp.setHireDate(hireDate);

        if(publisherService.insertNewEmp(emp)){
            printResult.printSuccessMessage("insert");
        } else {
            printResult.printErrorMessage("insert");
        }
    }

    public void modifyEmp(Map<String, String> parameter) {

        String empId = parameter.get("empId");
        String empName = parameter.get("empName");
        String email = parameter.get("email");
        String deptCode = parameter.get("deptCode");
        Integer salary = Integer.parseInt(parameter.get("salary"));

        PublisherDTO emp = new PublisherDTO();
        emp.setEmpId(empId);
        emp.setEmpName(empName);
        emp.setEmail(email);
        emp.setDeptCode(deptCode);
        emp.setSalary(salary);

        if(publisherService.modifyEmp(emp)){
            printResult.printSuccessMessage("update");
        } else {
            printResult.printErrorMessage("update");
        }

    }

    public void deleteEmp(Map<String, String> parameter) {

        String empId = parameter.get("empId");

        if(publisherService.deleteEmp(empId)){
            printResult.printSuccessMessage("delete");
        } else {
            printResult.printErrorMessage("delete");
        }

    }
}
