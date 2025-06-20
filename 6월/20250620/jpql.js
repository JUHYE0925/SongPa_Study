/* JPQL(Java Persistence Query Language)란? */
// JPQL은 엔티티 객체를 중심으로 개발할 수 있는 객체 지향 쿼리이다. 
// SQL보다 간결하고 특정 DBMS에 의존하지 않는다. 이는 JPA의 방언을 통해 해당 DBMS에 맞는 SQL을 실행하기 때문이다. 
// 또한 JPQL은 find() 메소드를 통한 조회와 다르게 항상 DB에 SQL을 살행해서 결과를 조회한다.
// find()는 같은 entitymanager를 통해 동일한 엔티티를 두 번 조회하면 첫 조회 시에는 DB에서 조회한 후 영속성 컨텍스트로 가져오고
// 두 번째 조회 시에는 영속성 컨텍스트에 이미 객체가 있기 때문에 DB 조회 없이 영속성 컨텍스트에서 객체를 가져온다.
// 즉 DB에 쿼리를 한 번만 보내서 조회한다.
// 하지만 JPQL의 경우에는 동일한 엔티티를 두 번 조회하면 두 번 모두 DB에 쿼리를 보내서 조회한다. 
// 단 그 결과로 가져오는 엔티티가 이미 영속성 컨텍스트에 있다면 새로운 객체를 생성하지 않고 기존 객체를 반환하는 것이다.
// 정리하면 find()와 JPQL로 조회하여 가져온 엔티티는 모두 영속성 컨텍스트에서 관리하지만 JPQL은 두 번 조회 시 두 번 모두 DB에 쿼리문을 보낸다는 차이가 있다.

// ✅ 자세한 설명
// 🔹 1. JPQL로 엔티티 전체를 조회할 경우
// List<Menu> result = em.createQuery("SELECT m FROM Menu m", Menu.class).getResultList();
// 이때 Menu 엔티티 객체들이 반환되고
// 반환된 엔티티는 영속성 컨텍스트에서 관리된다. (즉, 1차 캐시에 등록됨)
// 따라서, 이후 객체의 값을 수정하면 **dirty checking(변경 감지)**이 작동한다.
// 즉, find()와 동일하게 영속 상태이다.
// 🔹 2. JPQL로 일부 필드만 조회할 경우
// List<String> names = em.createQuery("SELECT m.name FROM Menu m", String.class).getResultList();
// 이건 String 타입만 반환하므로 비영속 객체로 영속성 컨텍스트에 등록되지 않음 → 추적, 변경 감지 안 됨
// 🔹 3. JPQL로 DTO 조회할 경우
// List<MenuDTO> dtos = em.createQuery("SELECT new com.example.MenuDTO(m.name, m.price) FROM Menu m", MenuDTO.class).getResultList();
// 이 경우도 영속성 컨텍스트에서 관리되지 않는다. MenuDTO는 엔티티가 아니기 때문이며, JPA가 추적하지 않는다.
// 🔹 4. JPQL로 수정/삭제 쿼리(DML) 실행 시
// em.createQuery("UPDATE Menu m SET m.price = 10000 WHERE m.id = 1").executeUpdate();
// 이건 DB에 직접 반영되고, 영속성 컨텍스트를 무시한다.
// 그 결과 영속성 컨텍스트에 캐시된 엔티티와 DB의 상태가 달라질 수 있기에 flush()나 clear()로 동기화 관리가 필요하다.

/* ================================================================================= */

/* 같은 엔티티 두 번 조회 시 find()와 JPQL의 차이 */
// ✅ 구체적인 설명
// 📌 find()
// 먼저 영속성 컨텍스트(1차 캐시)를 확인함
// 있으면: DB 조회 ❌
// 없으면: DB에서 조회하고, 결과를 1차 캐시에 저장
// ex)
// em.find(Menu.class, 1); -> 1차 캐시에 ID=1이 있으면 DB 접근 안 함
// 📌 JPQL
// 항상 SQL을 실행해서 DB에 조회 요청을 보냄
// 예: "SELECT m FROM Menu m WHERE m.id = 1"
// 하지만 JPA 내부적으로 결과 엔티티가 이미 1차 캐시에 존재하면,
// DB에서 받아온 값을 무시하고 기존 객체를 사용함
// ex)
// em.find(Menu.class, 1); -> DB에는 쿼리가 나감 -> 결과 처리할 때 JPA가 1차 캐시 확인해서 동일한 엔티티 객체를 반환함
// ✅ 요약 표
// 항목	         | find()	           |  JPQL
// DB 접근 여부   |	1차 캐시에 없을 때만  |  ✅ 항상 접근함
// 1차 캐시 활용  |  O	                |  O (있으면 결과를 덮어쓰지 않음)
// 동일 객체 반환 |  O                   |  O (같은 ID면 동일 객체)
// 성능          | 더 효율적 (캐시 우선)  |  덜 효율적 (항상 쿼리 나감)
// ✅ 결론
// "SQL을 실행한다"는 것은 결국 "DB에 쿼리를 보낸다"는 것이고, JPQL은 항상 SQL을 실행해서 DB에 접근한다.
// 하지만 결과 객체는 이미 영속성 컨텍스트에 있으면 그걸 그대로 재사용하기 때문에,
// 메모리 상 객체는 중복 생성되지 않는다는 점이 핵심이야.

/* ================================================================================= */

/* JPQL 기본 문법 */
// SELECT, UPDATE, DELETE 등의 키워드 사용은 SQL과 동일하다. 다만 INSERT는 persist() 메소드를 사용하면 된다.
// 키워드는 대소문자를 구분하지 않지만 엔티티와 속성은 대소문자를 구분하며 엔티티 별칭은 필수로 사용해야 한다는 점에서 차이가 있다.
// JPQL 사용 방법은 다음과 같다.
// 1. 작성한 JPQL(문자열)을 entityManager.createQuery() 메소드를 통해 쿼리 객체를 만든다.
// 2. 쿼리 객체는 TypedQuery, Query 두 가지가 있다.
//    a. TypedQuery : 반환할 타입을 명확하게 지정하는 방식일 때 사용하며 쿼리 객체의 메소드 실행 결과로 지정한 타입이 반환된다.
//    b. Query : 반환할 타입을 명확하게 지정할 수 없을 때 사용하며 쿼리 객체 메소드의 실행 결과로 Object 또는 Object[]이 반환된다.
// 3. 쿼리 객체에서 제공하는 메소드 getSingleResuylt() 또는 getResultList()를 호출해서 쿼리를 실행하고 데이터 베이스를 조회한다.
//    a. getSingleResult() : 결과가 정확히 한 행일 경우에만 사용하며 없거나 많으면 예외가 발생한다.
//    b. getResultList() : 결과가 2행 이상일 경우 사용하며 컬렉션을 반환한다. 결과가 없으면 빈 컬렉션을 반환한다.

/* 파라미터 전달 */
// JPQL 구문에 파라미터를 바인딩 하는 경우는 두 가지 방법이 있다. 
// 첫 번째는 이름 기준 파라미터 바인딩으로 : 다음에 이름 기준 파라미터를 지정한다.
// ex) 
// public List<Menu> selectMenuByBindingName(String menuName) {
//  String jpql
//  = "SELECT m FROM Section02Menu m WHERE m.menuName = :menuName";  => :menuName으로 이름 기준 파라미터
//  List<Menu> resultMenuList = manager.createQuery(jpql, Menu.class)
//  .setParameter("menuName", menuName)  => :menuName으로 설정한 것을 첫 번째 인자로 주며, 전달인자로 받은 String menuName을 두 번째 인자로 준다.
//  .getResultList();
//  return resultMenuList;
// }
// 두 번째는 위치 기준 파라미터 바인딩으로 ? 다음에 위치 값을 주는데 위치 값은 1부터 시작한다.
// ex)
// public List<Menu> selectMenuByBindingPosition(String menuName) {
//  String jpql = "SELECT m FROM Section02Menu m WHERE m.menuName = ?1";
//  List<Menu> resultMenuList = manager.createQuery(jpql, Menu.class)
//  .setParameter(1, menuName)  => ?1로 설정한 위치에 전달인자로 받은 첫번째(현재는 유일한) 인수 String menuName을 전달해준다.
//  .getResultList();
//  return resultMenuList;
// }

/* Projection */
