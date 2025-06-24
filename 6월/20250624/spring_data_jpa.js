/* Spring Data JPA란? */
// Spring 프레임워크에서 JPA를 편리하게 사용할 수 있도록 제공하는 Spring Data 모듈 중 하나이다.
// JPA를 추상화시킨 Repository라는 인터페이스를 사용하고 쿼리메소드(Query Method)를 호출하는 것만으로 손쉽게 SQL문을 생성할 수 있다.
// 특징으로는
// Spring 및 JPA 기반의 Repository 구축을 위해 인터페이스와 쿼리메소드를 제공한다.
// Querydsl 쿼리 지원 및 이에 따른 안전한 JPA 쿼리를 처리해준다.
// pagination을 지원한다.
// Spring Data JPA 사용하면 JPA에서 사용했던 기존의 EntityManagerFactory, EntityManager. EntityTransaction 같은 객체는 필요 없다.

/* Spring Data JPA의 Repository 인터페이스 상속 구조 */
// <<interface>> Repository -> <<interface>> CrudRepository -> <<interface>> PagingAndSortingRepository -> <<interface>> JpaRepository
// Repository 인터페이스 : 최상위 인터페이스로 따로 기능은 없다.
// CrudRepository 인터페이스 : 주로 CRUD 기능을 제공한다.
// PagingAndSortingRepository 인터페이스 : 검색 및 검색 결과를 페이징 처리하고자 할 경우 사용한다.
// JpaRepository 인터페이스 : 영속성 컨텍스트 플러시 및 배치에서 레코드 삭제와 같은 일부 JPA 관련 추가 방법들을 제공한다.

/* Repository 인터페이스의 메소드 */
// 주로 CRUDRepository 인터페이스가 제공하는 메소드를 사용하게 된다.
// long count() : 모든 엔티티의 개수를 반환한다.
// void delete(ID) : 식별키를 통해 삭제 가능하다.
// void delete(Iterable) : 주어진 모든 엔티티를 삭제한다.
// boolean exist(ID) : 식별 키를 가진 엔티티가 존재하는지 확인한다.
// findAllById(ID) : 모든 엔티티 목록을 반환한다.
// Iterable findAll(Iterable) : 해당 식별 키를 가진 엔티티 목록을 반환한다.
// Optional findById(ID) : 해당 식별 키에 해당하는 단일 엔티티를 반환한다.
// saveAll : 여러 엔티티들을 한 번에 등록, 수정한다.
// <S extends T>S save <S entity> : 하나의 엔티티를 등록, 수정한다.

/* Query Method란? */
// 쿼리메소드란 JPQL을 메소드로 대신 처리할 수 있도록 제공하는 기능이다.
// 메소드의 이름으로 필요한 쿼리를 만들어주는 기능으로 "find + 엔티티명 + By + (조회기준)변수명"과 같이 네이밍 룰만 알면 사용 가능하다.
// ex) publid Menu findMenuById(int menuCode){}
//     : Menu 엔티티에서 식별키인 menuCode를 기준으로 조회해온다.
// 엔티티 이름을 생략할 수 있는데 이는 해당하는 Repository 인터페이스의 제네릭에 해당하는 엔티티를 자동으로 인식하기 때문이다.
// 예시)
// findByCodeAndName() : WHERE x.code =? and x.name = ?
// findByPriceGreaterThan() : WHERE x.price > ?
// findByNameIsNull() : WHERE x.name IS NULL
// findByName(Is)NotNull() : WHERE x.name IS NOT NULL
// findByNameLike() : WHERE x.name LIKE ?