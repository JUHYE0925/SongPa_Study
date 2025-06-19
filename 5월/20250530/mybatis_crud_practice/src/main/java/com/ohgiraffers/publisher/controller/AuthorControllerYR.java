package com.ohgiraffers.publisher.controller;

import com.ohgiraffers.publisher.model.dto.AuthorAndEmployeeDTO;
import com.ohgiraffers.publisher.model.dto.AuthorDTO;
import com.ohgiraffers.publisher.model.service.AuthorServiceYR;

import java.util.List;
import java.util.Map;

public class AuthorControllerYR {
    private PrintResultYR printResultYR;
    private AuthorServiceYR authorServiceYR;

    public AuthorControllerYR(){
        printResultYR = new PrintResultYR();
        authorServiceYR = new AuthorServiceYR();
    }

    public void selectAllAuthor(){

        List<AuthorAndEmployeeDTO> authorList = authorServiceYR.selectAllAuthor();

        if(authorList != null){
            printResultYR.printAuthorList(authorList);
        }else{
            printResultYR.printErrorMessage("selectList");
        }
    }

    public void selectAuthorByCode(int id){

        AuthorAndEmployeeDTO authorDTO = authorServiceYR.selectAuthorByCode(id);

        if(authorDTO != null){
            printResultYR.printAuthor(authorDTO);
        }else{
            printResultYR.printErrorMessage("selectOne");
        }

    }

    public void registAuthor(Map<String, String> parameter){
        AuthorDTO authorDTO = new AuthorDTO();

        authorDTO.setAuthorName(parameter.get("name"));
        authorDTO.setAwarded(Integer.parseInt(parameter.get("awarded")) > 0 ? true : false);
        authorDTO.setEmpId(Integer.parseInt(parameter.get("id")));

        boolean result = authorServiceYR.registAuthor(authorDTO);

        if(result){
            printResultYR.printSuccessMessage("insert");
        }else{
            printResultYR.printErrorMessage("insert");
        }

    }

    public void modifyAuthorEmp(Map<String, String> parameter){
        AuthorDTO authorDTO = new AuthorDTO();

        authorDTO.setAuthorId(Integer.parseInt(parameter.get("id")));
        authorDTO.setEmpId(Integer.parseInt(parameter.get("empId")));

        boolean result = authorServiceYR.modifyAuthorEmp(authorDTO);

        if(result){
            printResultYR.printSuccessMessage("update");
        }else{
            printResultYR.printErrorMessage("update");
        }
    }

    public void deleteAuthor(int id){

        boolean result = authorServiceYR.deleteAuthor(id);

        if(result){
            printResultYR.printSuccessMessage("delete");
        }else{
            printResultYR.printErrorMessage("delete");
        }


    }

}
