package com.ohgiraffers.publisher.model.service;

import com.ohgiraffers.publisher.common.TemplateGY;
import com.ohgiraffers.publisher.model.dao.publisherMapperGY;
import org.apache.ibatis.session.SqlSession;
import java.util.Map;

public class AuthorServiceGY {

    public void selectAllAuthors() {
        try (SqlSession sqlSession = TemplateGY.getSqlSession()) {
            publisherMapperGY mapper = sqlSession.getMapper(publisherMapperGY.class);
            mapper.selectAllAuthors().forEach(System.out::println);
        }
    }

    public void selectAuthorById(int authorId) {
        try (SqlSession sqlSession = TemplateGY.getSqlSession()) {
            publisherMapperGY mapper = sqlSession.getMapper(publisherMapperGY.class);
            System.out.println(mapper.selectAuthorById(authorId));
        }
    }

    public void registAuthor(Map<String, String> params) {
        try (SqlSession sqlSession = TemplateGY.getSqlSession()) {
            publisherMapperGY mapper = sqlSession.getMapper(publisherMapperGY.class);
            int result = mapper.insertAuthor(params);
            if (result > 0) {
                sqlSession.commit();
                System.out.println("작가 등록 성공");
            } else {
                System.out.println("작가 등록 실패");
            }
        }
    }

    public void modifyAuthor(Map<String, String> params) {
        try (SqlSession sqlSession = TemplateGY.getSqlSession()) {
            publisherMapperGY mapper = sqlSession.getMapper(publisherMapperGY.class);
            int result = mapper.updateAuthor(params);
            if (result > 0) {
                sqlSession.commit();
                System.out.println("작가 정보 수정 성공");
            } else {
                System.out.println("작가 정보 수정 실패");
            }
        }
    }

    public void deleteAuthor(int authorId) {
        try (SqlSession sqlSession = TemplateGY.getSqlSession()) {
            publisherMapperGY mapper = sqlSession.getMapper(publisherMapperGY.class);

            int bookDeleteResult = mapper.deleteBooksByAuthorId(authorId);

            int result = mapper.deleteAuthor(authorId);
            if (result > 0) {
                sqlSession.commit();
                System.out.println("작가 삭제 성공");
            } else {
                System.out.println("작가 삭제 실패");
            }
        }
    }
}
