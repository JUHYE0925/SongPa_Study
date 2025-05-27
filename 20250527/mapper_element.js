/* Mapper Element */
// <mapper> 엘리먼트는 SQL 매핑을 정의하는 최상위 요소로, XML 기반 매퍼 파일에서 사용된다.
// 하나의 매퍼(XML) 파일은 하나의 Mapper 인터페이스에 대응된다.
// DB 쿼리(SQL)와 Java 메서드를 연결해주는 핵심 역할을 한다.
// 주요 속성으로 namespace가 있으며, 이는 Java의 Mapper 인터페이스와 연결될 이름 공간이다.
// 반드시 인터페이스의 풀클래스명(Fully Qualified Class Name)과 일치해야 한다.
// 하위 엘리먼트로는 <select>, <insert>, <update>, <delete>, <resultMap>, <sql>, <include> 등이 있다.

/* <resultMap> 엘리먼트 */
// <resultMap> 엘리먼트는 MyBatis에서 가장 중요하고 강력한 요소 중 하나로, 
// DB에서 조회한 결과 데이터를 자바 객체에 매핑하는 방법을 정의한다.
// JDBC에서 ResultSet을 처리할 때 작성해야 하는 반복적인 코드를 줄여주는 역할을 한다.
// 주요 속성으로는 id, type, extends, autoMapping이 있다.
// id : 이 resultMap을 다른 매핑 구문에서 참조할 때 사용하는 식별자이다.
// type : 결과 매핑이 적용될 자바 객체의 타입이며, 반드시 전체 클래스명(Fully Qualified Class Name)을 작성해야 한다.
// extends : 자바의 상속처럼 기존에 정의된 resultMap을 상속받아 매핑 정보를 확장할 때 사용한다.
// autoMapping : 컬럼명과 필드명이 같을 때 자동으로 매핑할지를 결정하는 속성이다. 
//               'auto'로 설정하면 편리하지만, 잘못 매핑될 위험이 있으므로 주의해서 사용하는 것이 좋다.
