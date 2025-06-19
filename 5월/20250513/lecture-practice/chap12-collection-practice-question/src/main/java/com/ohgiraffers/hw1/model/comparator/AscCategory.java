package com.ohgiraffers.hw1.model.comparator;

import com.ohgiraffers.hw1.model.dto.BookDTO;

import java.util.ArrayList;
import java.util.Comparator;

public class AscCategory {

    public void compare(ArrayList<BookDTO> bookList) {
        bookList.sort(new Comparator<BookDTO>() {
            @Override
            public int compare(BookDTO book1, BookDTO book2) {
                return book1.getCategory() >= book2.getCategory() ? 1 : -1;
            }
        });
    }

}
