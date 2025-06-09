package com.ohgiraffers.exceptionpractice;

import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;


@Controller
@RequestMapping("/bank/*")
public class BankController {
    private final BankService bankService;

    public BankController(BankService bankService) {
        this.bankService = bankService;
    }

    @GetMapping("deposit")
    public void deposit() {}

//    @PostMapping("deposit")
//    public String checkDeposit(Model model, @RequestParam int price) {
//        if (price < 0) {
//            new GlobalExceptionHandler();
//        }
//        return "/";
//    }

    @GetMapping("withdraw")
    public void withdraw() {}


    /* 예람 : 출금 요청 시, 클라이언트에서 입력 된 값을 @RequestParam으로 받는다.  */
    @PostMapping("withdraw")
    public ModelAndView withdraw(ModelAndView mv, @RequestParam int price) throws OutOverRequestException {

        /* 서비스 객체에 해당 price를 넘겨주고 결과를 받음.*/
        boolean result = bankService.checkAccount(price);

        /* 결과에 따른 view 처리 */
        if (result) {
            /* 입금이 가능하면 메인 페이지로 이동한다. */
            mv.setViewName("redirect:/");
        } else {
            /* 입금이 불가하면 사용자 exception을 내보낸다. */
            /* ModelAndView를 이용해서 exception을 view에 넘겨주고, view page name도 넘겨준다.*/
            OutUnderZeroException exception = new OutUnderZeroException("잔액이 부족합니다.");
            mv.addObject("exception", exception);
            mv.setViewName("error/outUnderZeroException");

        }

        return mv;
    }

    @PostMapping("deposit")
    public ModelAndView depositInOverMoney(ModelAndView mv, WebRequest request, RedirectAttributes rttr) {

        int depositMoney = Integer.parseInt(request.getParameter("price"));

        try {
            rttr.addFlashAttribute("depositMessage", bankService.depositInOverMoney(depositMoney));
            mv.setViewName("redirect:/");
        } catch (InOverMoneyException e) {
            throw new RuntimeException(e);
        } catch (inMinusMoney e) {
            throw new RuntimeException(e);
        }

        return mv;
    }

}
