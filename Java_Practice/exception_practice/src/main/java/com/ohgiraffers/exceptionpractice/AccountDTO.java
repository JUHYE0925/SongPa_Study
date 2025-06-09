package com.ohgiraffers.exceptionpractice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class AccountDTO {
    private int price;

    public AccountDTO(){}

    public AccountDTO(int price) {
        this.price = price;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return "AccountDTO{" +
                "price=" + price +
                '}';
    }
}
