/* Native Query */
// Native Query란 JPA 메소드나 JPQL이 아닌 SQL 쿼리를 그대로 사용하는 것을 말한다.
// 이를 사용하면 ORM의 기능을 이용하면서 SQL 쿼리도 활용할 수 있어 더욱 강력한 데이터베이스 접근이 가능하다.
// 따라서 복잡한 쿼리를 작성하는 경우나, 특정 DB에서만 사용 가능한 기능을 사용해야할 경우 등에 Native Query를 사용한다.

/* N+1 Select 문제란? */
// JPA에서 연관된 엔티티를 조회할 때, 1번의 조회 쿼리 이후 N개의 추가 쿼리가 발생하는 현상을 말한다.
// 예를 들어 Menu 엔티티와 Category 엔티티가 연관관계에 있을 때,
// Menu 목록을 조회한 후 각 Menu에 연결된 Category를 지연 로딩으로 불러오게 되면
// Menu 목록의 개수만큼 추가 쿼리가 실행된다.
// 총 N+1번의 쿼리가 실행되므로 이를 N+1 문제라고 부른다.
// 
// EX)
// SELECT * FROM tbl_menu;     // 1번 실행(부서 전체 조회)
// SELECT * FROM tbl_menu WHERE menu_code = ?   // menu 수 만큼 N번 실행

/* N+1의 문제점 */
// 쿼리 수 증가로 인해 DB 부하가 커지고 성능이 저하된다.
// 특히 데이터 양이 많아질수록 페이지 로딩 지연, 트래픽 과다 문제가 발생할 수 있다.

/* N+1 문제 해결 방법 */
// 1. Fetch Join 사용
// ex) SELECT d FROM Department d JOIN FETCH d.employees
// → 한 번의 쿼리로 연관된 엔티티까지 모두 로딩
// 2. EntityGraph 사용
// → JPA 표준 문법으로 연관 엔티티를 명시적으로 함께 로딩
// 3. Batch Size 설정
// → in 쿼리를 사용하여 여러 연관 엔티티를 한 번에 조회

/* 요약 */
// N+1 문제는 JPA의 지연 로딩으로 인해 연관된 엔티티마다 추가 쿼리가 발생하는 현상이다.
// 이로 인해 총 N+1번의 쿼리가 실행되며, 성능 저하를 유발할 수 있다.
// 해결 방법으로는 Fetch Join, EntityGraph, Batch Size 설정 등이 있다.

/* Named Query란? */
// 미리 쿼리를 정희하고 변경하지 않고 사용하는 쿼리를 정적 쿼리라고 하며 미리 정의한 코드는 이름을 부여해서 사용하게 된다.
// 이를 Named Query라고 하는데 JPQL뿐만 아니라 Native Query도 NamedQuery를 만들 수 있다.