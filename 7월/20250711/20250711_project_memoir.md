# 2025년 7월 11일 Project 회고록

<h2>오늘의 이슈</h2>
<h3>Entity 통합</h3>
어제 작성한 회고록을 보면 NativeQuery에서 JPQL로 변경한 것을 알 수 있다. <br>
오늘은 Reservation 엔티티와 BossReservation 엔티티로 나눠진 것을 하나의 엔티티로 통합하는 이슈가 있었다. 하나의 DB 테이블에는 하나의 Entity만 존재해야한다고 하여(예외인 경우도 있다.) Entity를 통합하였고 그 과정에서 기존 Service에서 작성한 로직(타입 변경 등)의 변경이 살짝 있었다. 

<h3>Projection 사용</h3>
우선 Projection에 대해 설명하고자 한다. Projection이란 DB에서 필요한 속성(컬럼)만을 조회하는 것을 의미한다. 이를 ORM이 JPA에서는 Spring Data JPA를 활용하여 Projection을 사용할 수 있다. 
<br>
그동안 나는 수업을 들었는데도 불구하고 JPA 내용을 다 까먹어 Projection이 있는지조차 몰랐다. 그래서 내 도메인에서 데이터를 불러올 때 모든 컬럼값을 가져왔다. 하지만 내가 사용하는 데이터는 4테이블의 JOIN을 통해서만 필요한 데이터를 가져올 수 있기에 한 번 조회할 때 마다 필요없는 컬럼들도 다 가져와야만했다. 아니 그래야만 사용가능한 줄 알았다. 다음은 초기 데이터 조회 시 결과이다.
<br>

``` java
<JPQL>
@Query("SELECT r FROM BossReservation r JOIN FETCH r.userInfo u JOIN FETCH r.shopInfo s JOIN FETCH r.menuInfo m JOIN FETCH m.menuCategory mc WHERE s.shopCode = :shopCode AND r.resvDate = :selectedDate"
)
List<BossReservation> findByShopCodeAndResvDate(@Param("shopCode") Integer shopCode, @Param("selectedDate") Date selectedDate);
```
``` java
<실제 실행되는 쿼리문>
Hibernate: 
select
    br1_0.resv_code,
    mi1_0.menu_code,
    mi1_0.est_time,
    mi1_0.is_active,
    mc1_0.category_code,
    mc1_0.shop_code,
    mc1_0.category_name,
    mc1_0.is_active,
    mc1_0.menu_color,
    mi1_0.menu_name,
    mi1_0.menu_price,
    br1_0.resv_date,
    br1_0.resv_state,
    br1_0.resv_time,
    si1_0.shop_code,
    si1_0.admin_code,
    si1_0.category_code,
    si1_0.is_active,
    si1_0.shop_close,
    si1_0.shop_la,
    si1_0.shop_location,
    si1_0.shop_long,
    si1_0.shop_name,
    si1_0.shop_open,
    si1_0.shop_phone,
    si1_0.shop_status,
    br1_0.user_comment,
    ui1_0.user_code,
    ui1_0.birthday,
    ui1_0.is_admin,
    ui1_0.is_leave,
    ui1_0.user_id,
    ui1_0.user_name,
    ui1_0.user_phone,
    ui1_0.user_pwd 
from
    tbl_reservation br1_0 
join
    tbl_user ui1_0 
        on ui1_0.user_code=br1_0.user_code 
join
    tbl_shop si1_0 
        on si1_0.shop_code=br1_0.shop_code 
join
    tbl_menu mi1_0 
        on mi1_0.menu_code=br1_0.menu_code 
join
    tbl_menu_category mc1_0 
        on mc1_0.category_code=mi1_0.category_code 
        and mc1_0.shop_code=mi1_0.shop_code 
where
    si1_0.shop_code=? 
    and br1_0.resv_date=?
```
    
    <조회 결과>
    BossReservationDTO(resvCode=66, userInfo=BossResvUserDTO(userCode=68, userName=이재원, userPhone=010-1068-1068, birthday=1980-02-11), shopCode=ShopDTO(shopCode=1, categoryCode=1, adminCode=1, shopName=null, shopPhone=null, shopLocation=null, shopLong=null, shopLa=null, shopStatus=null, shopOpen=null, shopClose=null, isActive=null), menuInfo=BossResvMenuDTO(menuCode=2, menuCategoryInfo=BossResvMenuCategoryDTO(categoryCode=1, categoryName=컷, menuColor=#F7CAC9, isActive=true), menuName=남성 컷, menuPrice=20000, estTime=25, isActive=1), resvDate=2025-07-26, resvTime=11:00:00, userComment=남성 컷 예약, resvState=APPROVE)

지금처럼 Projection을 사용하지 않고 Entity로 직접 데이터를 가져오게 되면 이렇게 필요없는 방대한 양의 데이터를 한 번에 조회해야해서 성능적인 부분과 메모리 관리 차원에서도 안좋다고 생각했다. 그리하여 Projection을 사용하기로 결정하였고 다음과 같이 코드를 수정하였다.

``` java
<Projection Interface 생성>

public interface BossReservationProjection {

    Integer getResvCode();
    String getUserName();
    String getUserPhone();
    String getMenuColor();
    String getMenuName();
    Boolean getIsActive();  // 메뉴 활성화 여부
    ReservationState getResvState();
    Date getResvDate();
    Time getResvTime();
    String getUserComment();

}

```
``` java
<Repository의 반환 타입을 Projection으로 변경>

@Query("SELECT r.resvCode, u.userName, u.userPhone, mc.menuColor, m.menuName, m.isActive, r.resvState, r.resvDate, r.resvTime, r.userComment FROM BossReservation r JOIN FETCH r.userInfo u JOIN FETCH r.shopInfo s JOIN FETCH r.menuInfo m JOIN FETCH m.menuCategory mc WHERE s.shopCode = :shopCode"
    )
    List<BossReservationProjection> findByShopCode(@Param("shopCode")Integer shopCode);

```
``` java
<실행 결과>
Caused by: java.lang.IllegalArgumentException: Validation failed for query for method public abstract java.util.List com.header.header.domain.reservation.repository.BossReservationRepository.findByShopCode(java.lang.Integer)
	at org.springframework.data.jpa.repository.query.SimpleJpaQuery.validateQuery(SimpleJpaQuery.java:97)
	at org.springframework.data.jpa.repository.query.SimpleJpaQuery.<init>(SimpleJpaQuery.java:67)
	at org.springframework.data.jpa.repository.query.JpaQueryFactory.fromMethodWithQueryString(JpaQueryFactory.java:49)
	at org.springframework.data.jpa.repository.query.JpaQueryLookupStrategy$DeclaredQueryLookupStrategy.resolveQuery(JpaQueryLookupStrategy.java:174)
	at org.springframework.data.jpa.repository.query.JpaQueryLookupStrategy$CreateIfNotFoundQueryLookupStrategy.resolveQuery(JpaQueryLookupStrategy.java:254)
	at org.springframework.data.jpa.repository.query.JpaQueryLookupStrategy$AbstractQueryLookupStrategy.resolveQuery(JpaQueryLookupStrategy.java:99)
	at org.springframework.data.repository.core.support.QueryExecutorMethodInterceptor.lookupQuery(QueryExecutorMethodInterceptor.java:116)
	... 67 more
Caused by: java.lang.IllegalArgumentException: org.hibernate.query.SemanticException: Query specified join fetching, but the owner of the fetched association was not present in the select list [SqmSingularJoin(com.header.header.domain.reservation.entity.BossReservation(r).userInfo(u) : userInfo)]
	at org.hibernate.internal.ExceptionConverterImpl.convert(ExceptionConverterImpl.java:143)
	at org.hibernate.internal.ExceptionConverterImpl.convert(ExceptionConverterImpl.java:167)
	at org.hibernate.internal.ExceptionConverterImpl.convert(ExceptionConverterImpl.java:173)
	at org.hibernate.internal.AbstractSharedSessionContract.createQuery(AbstractSharedSessionContract.java:886)
	at org.hibernate.internal.AbstractSharedSessionContract.createQuery(AbstractSharedSessionContract.java:796)
	at org.hibernate.internal.AbstractSharedSessionContract.createQuery(AbstractSharedSessionContract.java:143)
	at java.base/java.lang.reflect.Method.invoke(Method.java:569)
	at org.springframework.orm.jpa.ExtendedEntityManagerCreator$ExtendedEntityManagerInvocationHandler.invoke(ExtendedEntityManagerCreator.java:364)
	at jdk.proxy3/jdk.proxy3.$Proxy145.createQuery(Unknown Source)
	at org.springframework.data.jpa.repository.query.SimpleJpaQuery.validateQuery(SimpleJpaQuery.java:91)
	... 73 more
Caused by: org.hibernate.query.SemanticException: Query specified join fetching, but the owner of the fetched association was not present in the select list [SqmSingularJoin(com.header.header.domain.reservation.entity.BossReservation(r).userInfo(u) : userInfo)]
	at app//org.hibernate.query.sqm.tree.select.SqmQuerySpec.assertFetchOwner(SqmQuerySpec.java:573)
	at app//org.hibernate.query.sqm.tree.select.SqmQuerySpec.validateFetchOwners(SqmQuerySpec.java:548)
	at app//org.hibernate.query.sqm.tree.select.SqmQuerySpec.validateFetchOwners(SqmQuerySpec.java:494)
	at app//org.hibernate.query.sqm.tree.select.SqmQuerySpec.validateQueryStructureAndFetchOwners(SqmQuerySpec.java:469)
	at app//org.hibernate.query.hql.internal.SemanticQueryBuilder.visitStatement(SemanticQueryBuilder.java:452)
	at app//org.hibernate.query.hql.internal.SemanticQueryBuilder.buildSemanticModel(SemanticQueryBuilder.java:324)
	at app//org.hibernate.query.hql.internal.StandardHqlTranslator.translate(StandardHqlTranslator.java:71)
	at app//org.hibernate.query.internal.QueryInterpretationCacheStandardImpl.createHqlInterpretation(QueryInterpretationCacheStandardImpl.java:145)
	at app//org.hibernate.query.internal.QueryInterpretationCacheStandardImpl.resolveHqlInterpretation(QueryInterpretationCacheStandardImpl.java:132)
	at app//org.hibernate.query.spi.QueryEngine.interpretHql(QueryEngine.java:54)
	at app//org.hibernate.internal.AbstractSharedSessionContract.interpretHql(AbstractSharedSessionContract.java:832)
	at app//org.hibernate.internal.AbstractSharedSessionContract.createQuery(AbstractSharedSessionContract.java:878)
	... 79 more
```
위처럼 기존 쿼리를 사용한 메소드의 타입을 Projection으로 변경하였더니 위와 같은 에러가 발생하였다. 위 에러의 핵심은 "org.hibernate.query.SemanticException: Query specified join fetching, but the owner of the fetched association was not present in the select list
" JOIN FETCH를 쓰면서 FETCH의 대상인 엔티티의 주인이 SELECT 절에 없다는 뜻이다. JOIN FETCH는 보통 엔티티를 조회할 때 연관 엔티티를 한꺼번에 로딩하는 용도로 사용된다. 하지만 내가 사용한 JPQL은 SELECT절에 r(BossReservation 엔티티)가 없고, 단순히 일부 컬럼만 조회하고 있다. JOIN FETCH는 반드시 "SELECT 대상이 되는 엔티티 자체"에 대해서만 의미가 있다. 그런데 이 쿼리에서는 SELECT 대상에 r이 없고, r.resvCode등 필드 단위만 있어서 Hibernate가 혼란을 겪는다. 이처럼 부분 컬럼만 조회할 경우에는 그냥 JOIN만 쓰면 된다. 그래서 다음과 같이 코드를 변경하고 다시 테스트 코드를 실행하였다.

``` java
<JPQL>

@Query("SELECT r.resvCode, u.userName, u.userPhone, mc.menuColor, m.menuName, m.isActive, r.resvState, r.resvDate, r.resvTime, r.userComment FROM BossReservation r JOIN r.userInfo u JOIN r.shopInfo s JOIN r.menuInfo m JOIN m.menuCategory mc WHERE s.shopCode = :shopCode"
    )
    List<BossReservationProjection> findByShopCode(@Param("shopCode")Integer shopCode);
```
``` java
<실행 결과>

BossReservationDTO(resvCode=0, userInfo=null, shopCode=null, menuInfo=null, resvDate=null, resvTime=null, userComment=null, resvState=null)
```
JOIN FETCH를 JOIN으로 변경하였더니 이번에는 값을 제대로 받아오지 못하고 있다. 즉, Projection에서 뽑은 컬럼들이 DTO 필드에 제대로 매핑이 안되고 있는 것이다. 원인은 Projection에서 사용되는 필드들의 타입과 실제 결과에 매핑되는 DTO 필드들의 타입이 달라서 그렇다. 
``` java
<BossReservationDTO>

public class BossReservationDTO {

    private int resvCode;
    private BossResvUserDTO userInfo;
    private ShopDTO shopInfo;
    private BossResvMenuDTO menuInfo;
    private Date resvDate;
    private Time resvTime;
    private String userComment;
    private String resvState;

    public BossReservationDTO(){};

}

<BossReservationProjection>
public interface BossReservationProjection {

    Integer getResvCode();
    String getUserName();
    String getUserPhone();
    String getMenuColor();
    String getMenuName();
    Boolean getIsActive();  // 메뉴 활성화 여부
    ReservationState getResvState();
    Date getResvDate();
    Time getResvTime();
    String getUserComment();

}
```
위 클래스 파일을 보면 DTO에 있는 필드들과 Projection의 필드들이 서로 매핑되지 않는 것을 볼 수 있다. 
<br>
Spring Data JPA에서 인터페이스 기반 Projection을 사용할 때 반환되는 Projection 객체는 Projection 인터페이스와 정확히 일치하는 구조로 채워진다. 그런데 modelMapper.map(projection, BossReservationDTO.class)할 때, Projection의 필드 이름/반환 타입이 DTO의 필드와 일치하지 않으면 매핑이 제대로 되지 않아 모든 값이 null이 된다. 
<br>
즉, 
- userName, userPhone, menuName, menuColor, isActive 등의 필드는 DTO에 아예 존재하지 않으며
- 대신 DTO는 userInfo, menuInfo 등 중첩된 구조로 되어 있다.
- 그러므로 modelMapper가 어떤 필드를 어디에 넣어야할지 몰라서 null 처리를 한 것이다.
<br>

이에 대한 해결책은 2가지가 있다. 
1. DTO 구조를 Projection에 맞게 수정하는 것
2. 중첨구조를 유지하고 싶을 경우 Projection을 DTO로 수동 매핑하는 것

나는 후자를 선택하여 다음과 같이 변경하였다.
나는 대부분의 Service 로직이 조회하는 것이고 조회할 때 마다 같은 Entity와 DTO를 매핑하기 때문에 매번 Projection을 DTO로 modelMapper를 매핑하는 것이 비효율적으로 느껴졌다. 그래서 매핑하는 과정을 클래스로 따로 빼서 공통로직으로 사용하도록 했다.

``` java

public class BossReservationMapper {

    public static BossReservationDTO toDTO(BossReservationProjection p) {
        BossReservationDTO dto = new BossReservationDTO();
        dto.setResvCode(p.getResvCode());

        BossResvUserDTO userDTO = new BossResvUserDTO();
        userDTO.setUserName(p.getUserName());
        userDTO.setUserPhone(p.getUserPhone());
        dto.setUserInfo(userDTO);

        BossResvMenuDTO menuDTO = new BossResvMenuDTO();
        menuDTO.setMenuName(p.getMenuName());
        menuDTO.getMenuCategoryInfo().setMenuColor(p.getMenuColor());
        menuDTO.setIsActive(p.getIsActive());
        dto.setMenuInfo(menuDTO);

        dto.setResvDate(p.getResvDate());
        dto.setResvTime(p.getResvTime());
        dto.setUserComment(p.getUserComment());
        dto.setResvState(p.getResvState().name());

        return dto;
    }
}

```

``` java
/* 가게 예약 내역 전체 조회하기 */
    public List<BossReservationDTO> findReservationList(Integer shopCode){

        List<BossReservationProjection> reservationList = bossReservationRepository.findByShopCode(shopCode);

        return reservationList.stream()
                .map(BossReservationMapper::toDTO)
                .toList();
    }
```

``` java

/* 실행 결과 */
Cannot invoke "java.lang.Integer.intValue()" because the return value of "com.header.header.domain.reservation.projection.BossReservationProjection.getResvCode()" is null
java.lang.NullPointerException: Cannot invoke "java.lang.Integer.intValue()" because the return value of "com.header.header.domain.reservation.projection.BossReservationProjection.getResvCode()" is null
	at com.header.header.domain.reservation.mapper.BossReservationMapper.toDTO(BossReservationMapper.java:12)
	at java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:197)
	at java.base/java.util.ArrayList$ArrayListSpliterator.forEachRemaining(ArrayList.java:1625)
	at java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:509)
	at java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:499)
	at java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:575)
	at java.base/java.util.stream.AbstractPipeline.evaluateToArrayNode(AbstractPipeline.java:260)
	at java.base/java.util.stream.ReferencePipeline.toArray(ReferencePipeline.java:616)
	at java.base/java.util.stream.ReferencePipeline.toArray(ReferencePipeline.java:622)
	at java.base/java.util.stream.ReferencePipeline.toList(ReferencePipeline.java:627)
	at com.header.header.domain.reservation.service.BossReservationService.findReservationList(BossReservationService.java:51)
	at java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
	at java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)
	at java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
	at java.base/java.lang.reflect.Method.invoke(Method.java:569)
	at org.springframework.aop.support.AopUtils.invokeJoinpointUsingReflection(AopUtils.java:359)
	at org.springframework.aop.framework.ReflectiveMethodInvocation.invokeJoinpoint(ReflectiveMethodInvocation.java:196)
	at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:163)
	at org.springframework.transaction.interceptor.TransactionAspectSupport.invokeWithinTransaction(TransactionAspectSupport.java:380)
	at org.springframework.transaction.interceptor.TransactionInterceptor.invoke(TransactionInterceptor.java:119)
	at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:184)
	at org.springframework.aop.framework.CglibAopProxy$DynamicAdvisedInterceptor.intercept(CglibAopProxy.java:728)
	at com.header.header.domain.reservation.service.BossReservationService$$SpringCGLIB$$0.findReservationList(<generated>)
	at com.header.header.domain.reservation.repository.BossReservationRepositoryTests.testReservationList(BossReservationRepositoryTests.java:48)
	at java.base/java.lang.reflect.Method.invoke(Method.java:569)
	at java.base/java.util.ArrayList.forEach(ArrayList.java:1511)
	at java.base/java.util.ArrayList.forEach(ArrayList.java:1511)
```
이번에 해결될 줄 알았는데 위와 같은 에러가 발생했다.