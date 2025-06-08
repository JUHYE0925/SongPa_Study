-- REVIEW 테이블 데이터 삽입
INSERT INTO REVIEW VALUES
(1, '2025-01-08', 3, '생각보다 지루했습니다. 하지만 소방관분들의 처우에 대해서는 다시 한 번 생각해볼 수 있었던 계기였습니다.'),
(2, '2025-02-10', 5, '너무 재미있게 봤어요. 배우들 다 연기 너무 잘해서 더 몰입해서 봤습니다.'),
(3, '2025-04-25', 2, '제가 생각했던 내용이 아니었고 너무 주인공이 파멸로 가는 내용을 안좋아해서 중도 하차했습니다.'),
(4, '2025-06-01', 5, '항상 너무 재미있고 보고있어요. 매번 새로운 사건을 소개해주시는데 너무 재미있고 유익해요.');

-- MEMBER 테이블 데이터 삽입
INSERT INTO MEMBER VALUES
(1, '김해원', 'onlysun', 'onlysun0908', 'oneandsun1998', 'onlysun0908@gmail.com', NULL),
(2, '박신영', 'godzero', 'godzero1122', 'thereisanygod1122@', 'godzero1122@naver.com', NULL);

-- CATEGORY 테이블 데이터 삽입
INSERT INTO CATEGORY VALUES 
(1, '영화'),
(2, '드라마'),
(3, '애니메이션'),
(4, '다큐멘터리'),
(5, '예능'),
(6, '시사교양'),
(7, '그 외');

-- CONTENTS 테이블 데이터 삽입
INSERT INTO CONTENTS VALUES
(1, '소방관', '곽경택', '2024', NULL, 1),
(2, '중증외상센터', '이도윤', '2025', NULL, 2),
(3, '살인자ㅇ난감', '이창희', '2024', NULL, 2),
(4, '스모킹 건', '이내규', '2023', NULL, 6);

-- OTT 테이블 데이터 삽입
INSERT INTO OTT VALUES
(1, '넷플릭스'),
(2, '왓챠'),
(3, '웨이브'),
(4, '디즈니 플러스'),
(5, '티빙'),
(6, '쿠팡플레이'),
(7, '라프텔'),
(8, '그 외');

-- MEMBER_CONTENTS 테이블 데이터 삽입
INSERT INTO MEMBER_CONTENTS VALUES
(1, 1, 1),
(4, 1, 4),
(2, 2, 2),
(3, 2, 3);

-- CONTENTS_OTT 테이블 데이터 삽입
INSERT INTO CONTENTS_OTT VALUES
(1, 1),
(1, 2),
(1, 3),
(2, 1),
(3, 1),
(4, 3),
(4, 6);

COMMIT;






