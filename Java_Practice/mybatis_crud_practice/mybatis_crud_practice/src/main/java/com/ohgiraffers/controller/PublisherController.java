package com.ohgiraffers.controller;

import com.ohgiraffers.model.PublisherDTO;
import com.ohgiraffers.view.PrintResult;

import java.util.ArrayList;
import java.util.List;

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
}
