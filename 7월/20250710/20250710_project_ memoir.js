/* 
    이번 프로젝트 진행하면서 발생했던 이슈에 대한 회고록을 작성하고자 한다. 
    우선 이번 프로젝트에서 처음으로 JPA를 사용해봤는데 처음 사용하다보니 연관관계 매핑과 엔티티 설정에 있어서 버벅거림이 많았다. 
    특히 처음에 JPQL의 편리성과 개념을 이해하지 못해 내가 필요로 하는 데이터를 NativeQuery를 사용하여 가져왔다. 
    하지만 그렇게 할 경우 JPA가 제공하는 Hibernate의 최적화와 오류 탐지 기능을 사용하지 못할 뿐만 아니라 여러 가지 Hibernate 에러가 발생했다. 
    아마 영속성 컨텍스트에 저장된 엔티티와의 충돌이 가장 큰 이유일 것이다. 
    그 외에도 기본 정보를 조회해오는 쿼리문 자체도 조인과 서브쿼리의 조합으로 복잡하고 길이도 길어 유지보수에 좋지 않을 것이라고 판단하였다. 
    이에 다시 코드를 고치고자 JPA에 대해서 다시 공부를 하였고 JPA가 제공하는 FetchJoin을 통해 여러 테이블을 조인하되 이전보다 훨씬 더 간결한 코드로 조회해올 수 있었다. 
    익숙하지만 길이가 길어 불편했던 NativeQuery를 사용했던 덕분에 JPA의 간결함과 편리성의 효과를 더욱 더 극대화하여 느낄 수 있었다.
*/
/* 
    기존 NativeQuery
    String baiscQuery = "SELECT r.resv_code" +
            "                 , u.user_code" +
            "                 , u.user_name" +
            "                 , u.user_phone" +
            "                 , u.birthday" +
            "                 , r.shop_code" +
            "                 , m.menu_code" +
            "                 , m.menu_name" +
            "                 , m.menu_price" +
            "                 , m.est_time" +
            "                 , m.is_active" +
            "                 , m.menu_color" +
            "                 , r.resv_date" +
            "                 , r.resv_time" +
            "                 , r.user_comment" +
            "                 , r.resv_state" +
            "              FROM tbl_reservation r " +
            "             INNER JOIN tbl_user u ON(r.user_code = u.user_code)" +
            "             INNER JOIN (SELECT mn.menu_code" +
            "                              , mn.menu_name" +
            "                              , mn.menu_price" +
            "                              , mn.est_time" +
            "                              , mn.is_active" +
            "                              , mc.menu_color" +
            "                           FROM tbl_menu mn" +
            "                           JOIN tbl_menu_category mc ON (mn.category_code = mc.category_code and mn.shop_code = mc.shop_code)) m ON(r.menu_code = m.menu_code)" +
            "             WHERE r.shop_code = :shopCode";
            List<BossReservation> findByShopCode(@Param("shopCode")Integer shopCode);
*/

/* 
    변경된 JPQL
     @Query( "SELECT r FROM BossReservation r JOIN FETCH r.userInfo u JOIN FETCH r.menuInfo m JOIN FETCH m.menuCategory mc WHERE r.shopCode = :shopCode"
    )
    List<BossReservation> findByShopCode(@Param("shopCode")Integer shopCode);
*/
