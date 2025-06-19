/* JDBC란? */
// JDBC(Java DataBase Connectivity)
// Java에서 DB에 접근 가능하도록 연결해주는 프로그래밍 API이다.
// Java 기반 어플리케이션의 데이터를 DB에 저장 및 업데이트 하거나, DB에 저장된 데이터를 Java에서 사용할 수 있게 하는 역할이다.
// JDBC는 JDBC API를 사용하여 DB에 연동할 수 있으며, DB에서 자료를 쿼리하거나 업데이트 하는 방법을 제공한다.
// JDBC는 3가지 기능을 표준 java.sql 패키지 하위 인터페이스로 정의하여 제공한다.
// java.sql.Connection - Java와 DB를 연결
// java.sql.Statement - SQL 쿼리문을 담은 내용
// java.sql.ResultSet - SQL의 SELECT문의 대한 결과 반환

/* JDBC 동작 흐름 */
// Java 어플리케이션 -> JDBC API -> JDBC 드라이버 -> DB
// JDBC는  Java 어플리케이션 내에서 JDBC API를 이용하여 DB에 접근하는 단순한 구조이다.
// JDBC API를 사용하기 위해서는 JDBC 드라이버를 먼저 로딩한 후에 DB와 연결하게 된다.

/* JDBC 드라이버란? */
// JDBC 드라이버는 DB와의 통신을 담당하는 인터페이스이다.
// Oracle, MS SQL, MySQL 등과 같은 DB에 맞는 JDBC 드라이버를 구현하여 제공한다.
// JDBC 드라이버의 구현체를 이용해서 특정 벤더의 DB에 접근할 수 있다.

/* JDBC API 사용 흐름 */
// JDBC API의 사용 흐름은 다음과 같다.
// JDBC 드라이버 로딩 -> Connection 객체 생성 -> Statement 객체 생성 -> ResultSet 객체 생성 ->
// Query 실행 -> ResultSet 객체에 데이터 조회 결과 반환 -> ResultSet, Statment, Connection 객체 close 
// JDBC 드라이버 로딩 : 사용하고자 하는 JDBC 드라이버를 로딩한다. JDBC 드라이버는 DriverManager 클래스의 getConnection 메소드를 통해 로딩된다.
// Connection 객체 생성 : JBDC 드라이버가 정상적으로 로딩되면 DriverMananer를 통해 DB와 연결되는 세션(Session)인 Connection 객체를 생성한다.
// Statement 객체 생성 : Statement 객체는 작성된 SQL 쿼리문을 실행하기 위한 객체로 정적 SQL 쿼리 문자열을 입력으로 가진다.
// Query 실행 : 생성된 Statement 객체를 이용하여 입력된 SQL 쿼리문을 실행한다.
// ResultSet 객체에 데이터 조회 결과 반환 : 실행된 SQL 쿼리문의 결과를 받아온다.
// ResultSet, Statement, Connection 닫기 : JDBC API를 통해 사용된 객체들(자원)들은 자원 누수를 방지하고자 close() 메소드를 통해 닫아줘야한다.

//https://ittrue.tistory.com/250