/* 
✅ 핵심 원인: JPQL의 select 절이 Projection interface와 맞지 않음
🔎 문제 분석
당신이 작성한 Repository의 @Query는 다음과 같아요:

java
복사
편집
@Query("""
    SELECT r.resvCode, u.userName, u.userPhone, mc.menuColor, m.menuName, m.isActive,
           r.resvState, r.resvDate, r.resvTime, r.userComment
    FROM BossReservation r
    JOIN r.userInfo u
    JOIN r.shopInfo s
    JOIN r.menuInfo m
    JOIN m.menuCategory mc
    WHERE s.shopCode = :shopCode
""")
List<BossReservationProjection> findByShopCode(@Param("shopCode") Integer shopCode);
이건 Object[] 기반 결과를 반환하려는 구조입니다. 즉, Spring Data JPA의 interface-based Projection과는 호환되지 않습니다.

❗ 왜 Projection이 null로 채워지는가?
Spring Data JPA에서 interface 기반 Projection은 내부적으로 필드명을 기준으로 자동 매핑을 수행합니다.
하지만 JPQL에서 SELECT r.resvCode, u.userName, ...처럼 엔티티가 아닌 필드 하나하나를 개별적으로 선택하면, JPA는 이를 projection interface와 연결하지 못합니다.

따라서 List<Object[]>처럼 다뤄야 하지만, List<BossReservationProjection>으로 시도하고 있기 때문에 내부에서 매핑에 실패하고 모든 값이 null로 들어오게 됩니다.

✅ 해결 방법 2가지
✅ 방법 1: SELECT r 사용 + Projection interface로 매핑 (비추)
SELECT r 하면 Projection이 먹히긴 하지만, 연관 객체에서 직접 값을 꺼낼 수 없고, 전체 entity 구조가 Projection과 일치해야 하므로 복잡하고 비추천입니다.

✅ 방법 2: 생성자 기반 DTO 매핑 사용 (추천)
가장 확실하고 안전한 방법은 JPQL에서 직접 DTO로 매핑하는 것입니다.

✅ 적용 예시: DTO 생성자 기반 Projection으로 리팩토링
1. BossResvProjectionDTO에 생성자 추가:
java
복사
편집
public class BossResvProjectionDTO {

    private Integer resvCode;
    private String userName;
    private String userPhone;
    private String menuColor;
    private String menuName;
    private Boolean isActive;
    private ReservationState resvState;
    private Date resvDate;
    private Time resvTime;
    private String userComment;

    public BossResvProjectionDTO(
        Integer resvCode,
        String userName,
        String userPhone,
        String menuColor,
        String menuName,
        Boolean isActive,
        ReservationState resvState,
        Date resvDate,
        Time resvTime,
        String userComment
    ) {
        this.resvCode = resvCode;
        this.userName = userName;
        this.userPhone = userPhone;
        this.menuColor = menuColor;
        this.menuName = menuName;
        this.isActive = isActive;
        this.resvState = resvState;
        this.resvDate = resvDate;
        this.resvTime = resvTime;
        this.userComment = userComment;
    }

    // Getter 생략 가능 (Lombok 쓰면 @Getter 추가)
}
2. Repository에서 쿼리 변경:
java
복사
편집
@Query("""
    SELECT new com.header.header.domain.reservation.dto.BossResvProjectionDTO(
        r.resvCode, u.userName, u.userPhone, mc.menuColor, m.menuName, m.isActive,
        r.resvState, r.resvDate, r.resvTime, r.userComment
    )
    FROM BossReservation r
    JOIN r.userInfo u
    JOIN r.shopInfo s
    JOIN r.menuInfo m
    JOIN m.menuCategory mc
    WHERE s.shopCode = :shopCode
""")
List<BossResvProjectionDTO> findByShopCode(@Param("shopCode") Integer shopCode);
3. Service에서는 그대로 사용:
java
복사
편집
public List<BossResvProjectionDTO> findReservationList(Integer shopCode) {
    return bossReservationRepository.findByShopCode(shopCode);
}
✅ 결과
이제 List<BossResvProjectionDTO>에 정확하게 데이터가 들어올 것입니다.
null이던 이유는 Projection interface 방식에서 JPQL 필드 선택 방식이 맞지 않았기 때문입니다.

🔚 요약
항목	설명
문제 원인	JPQL에서 개별 필드 선택 (SELECT a, b, c...) → Projection interface와 매칭 불가
증상	Projection 값이 모두 null
해결법 1	DTO 생성자 기반 Projection 사용 → SELECT new DTO(...)
해결법 2	Projection interface 유지 시 SELECT r 또는 Native Query 사용 (비권장)

필요하면 이 구조를 QueryDSL로 옮기는 것도 도와드릴 수 있어요.


*/
