CREATE DATABASE publisherdb;
GRANT ALL PRIVILEGES ON publisherdb.* TO 'ohgiraffers'@'%';
USE publisherdb;

/*  테이블 삭제 */
DROP TABLE IF EXISTS product_list CASCADE;
DROP TABLE IF EXISTS author_list CASCADE;
DROP TABLE IF EXISTS employee_list CASCADE;
DROP TABLE IF EXISTS employee_dept CASCADE;

/*  테이블 생성 */
CREATE TABLE IF NOT EXISTS author_list
(
author_id INT AUTO_INCREMENT COMMENT '작가코드',
author_name VARCHAR(30) NOT NULL COMMENT '작가이름',
awarded VARCHAR(20) COMMENT '수상내역',
CONSTRAINT pk_author_id PRIMARY KEY (author_id)
) ENGINE=INNODB COMMENT '작가리스트';

CREATE TABLE IF NOT EXISTS product_list
(
book_code   INT AUTO_INCREMENT COMMENT '책코드',
book_name   VARCHAR(30) NOT NULL COMMENT '책이름',
author_code  INT NOT NULL COMMENT '작가코드',
publish_year    INT NOT NULL COMMENT '출판연도',
book_price    INT NOT NULL COMMENT '책 가격',
ISBN    INT NOT NULL COMMENT 'ISBN',
ETC     VARCHAR(30) COMMENT '비고',
CONSTRAINT pk_book_code PRIMARY KEY (book_code),
CONSTRAINT fk_author_code FOREIGN KEY (author_code) REFERENCES author_list (author_id)
) ENGINE=INNODB COMMENT '상품리스트';
describe product_list;

CREATE TABLE `employee_list`
(
`EMP_ID`    VARCHAR(3)  NOT NULL COMMENT '사원번호',
`EMP_NAME`    VARCHAR(20) NOT NULL COMMENT '직원명',
`EMAIL`    VARCHAR(35) COMMENT '이메일',
`DEPT_CODE`    CHAR(2) COMMENT '부서코드',
`SALARY`    DECIMAL COMMENT '급여',
`HIRE_DATE`    DATE COMMENT '입사일',
PRIMARY KEY ( `EMP_ID` )
)
COMMENT = '사원';

CREATE TABLE `employee_dept`
(
`DEPT_ID`    CHAR(2)  NOT NULL COMMENT '부서코드',
`DEPT_TITLE`    VARCHAR(35) NOT NULL COMMENT '부서명',
PRIMARY KEY ( `DEPT_ID` )
)
COMMENT = '부서';

/* 데이터 삽입*/
INSERT INTO author_list (author_id, author_name, awarded) VALUES
(null,'미나미노 제이고', null),
(null,'샬럿 홈즈', null),
(null,'김희망', null),
(null,'최길동', null);

INSERT INTO product_list (book_code, book_name, author_code, publish_year, book_price, ISBN, ETC) VALUES
(null, '수수께끼는 아침식사 후에', 1, 2021, 30000, 9791234, null),
(null, '검은뱀 살인사건', 2, 1999, 12000, 9795678, null),
(null, '그리고 모두가 있었다', 3, 2024, 27000, 9891234, null),
(null, '수리추리마수리', 4, 2019, 15000, 9895678, null),
(null, '네가 너무했어', 3, 2010, 10000, 9893456, null);

INSERT INTO employee_list values (300, '서운해', 'seo@heuimangpub.com', 'D1', 3000000, '1990-02-06');
INSERT INTO employee_list values (301, '최고야', 'gogo@heuimangpub.com', 'D2', 250000, '1999-03-06');
INSERT INTO employee_list values (302, '나분야', 'onlyme@heuimangpub.com', 'D2', 210000, '2000-12-07');
INSERT INTO employee_list values (303, '하참하', 'noway@heuimangpub.com', 'D3', 230000, '2000-12-07');
INSERT INTO employee_list values (304, '김결의', 'kim@heuimangpub.com', 'D3', 350000, '2001-05-15');
INSERT INTO employee_list values (305, '최저야', 'low@heuimangpub.com', 'D3', 400000, '2010-05-21');
INSERT INTO employee_list values (306, '사나희', 'meninmen@heuimangpub.com', 'D4', 310000, '2012-09-06');
INSERT INTO employee_list values (307, '윤기남', 'glowing@heuimangpub.com', 'D4', 230000, '2003-10-06');
INSERT INTO employee_list values (308, '태사각', 'quitcom@heuimangpub.com', 'D4', 2500000, '2020-12-06');
INSERT INTO employee_list values (309, '김민지', 'minzy@heuimangpub.com', 'D3', 300000, '2021-06-07');
INSERT INTO employee_list values (310, '박이준', 'jun@heuimangpub.com', 'D3', 400000, '2008-05-02');
INSERT INTO employee_list values (311, 'Summer Pace', 'space@heuimangpub.com', 'D4', 2900000, '2024-03-02');
INSERT INTO employee_list values (312, 'Que Reed', 'qreed@heuimangpub.com', 'D4', 2800000, '2023-12-12');
INSERT INTO employee_list values (313, '이박김', 'commoname@heuimangpub.com', 'D4', 2900000, '2006-03-29');
INSERT INTO employee_list values (314, '표주박', 'pyo@heuimangpub.com', 'D3', 3000000, '2007-08-29');

INSERT INTO employee_dept (DEPT_ID,DEPT_TITLE) VALUES
('D1','인사관리부'),
('D2','회계관리부'),
('D3','마케팅부'),
('D4','영업부');

COMMIT;