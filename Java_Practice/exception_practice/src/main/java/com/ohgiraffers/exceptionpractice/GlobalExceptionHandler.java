package com.ohgiraffers.exceptionpractice;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {


    @ExceptionHandler(inMinusMoney.class)
    public String inMinusMoney(Model model,inMinusMoney exception) {
        model.addAttribute("exception", exception);
        return "error/inMinusMoney";
    }

    @ExceptionHandler(OutUnderZeroException.class)
    public String outUnderZeroException(OutUnderZeroException exception){

        return "error/outUnderZeroException";
    }

    @ExceptionHandler(InOverMoneyException.class)
    public String inOverMoneyException(Model model, InOverMoneyException exception){

        System.out.println("InOverMoney Exception 발생");
        model.addAttribute("exception", exception);
        return "error/inOverMoney";
    }

    @ExceptionHandler(OutOverRequestException.class)
    public String outOverRequestException(Model model, OutOverRequestException exception){
        System.out.println("전역 레벨 예외 처리");
        model.addAttribute("exception", exception);
        return "error/outOverException";
    }
}
