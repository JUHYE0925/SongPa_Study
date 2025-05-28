/* <association>과 <collection>의 차이 */
// <association> 엘리먼트는 1:1 관계 또는 단일 객체를 매핑할 때 사용하며 줄 복잡한 타입과의 1:1 포함 관계일 때 사용된다.
// 주요 속성으로는 property와 javaType이 있다.
// ex)
// <resultMap id="orderResultMap" type="Order">
//   <id property="id" column="order_id"/>
//   <association property="customer" javaType="Customer">
//     <id property="id" column="customer_id"/>
//     <result property="name" column="customer_name"/>
//   </association>
// </resultMap>
// 
// <collection> 엘리먼트는 1:N 관계 또는 리스트/컬렉션 객체를 매핑할 때 사용하며 주로 복잡한 타입과의 1:N 포함 관계일 때 사용된다.
// 주요 속성으로는 property와 ofType으로 <association>과 차이가 있다.
// ex)
// <resultMap id="orderResultMap" type="Order">
//   <id property="id" column="order_id"/>
//   <collection property="items" ofType="OrderItem">
//     <id property="id" column="item_id"/>
//     <result property="name" column="item_name"/>
//     <result property="price" column="item_price"/>
//   </collection>
// </resultMap>

/* <discriminator> 엘리먼트에 대해 설명하시오 */
// <discriminator> 엘리먼트는 MyBatis에서 상속 관계에 있는 클래스들을 매핑할 떄 사용되는 엘리먼트이다.
// 일반적으로 MyBatis는 resultMap혹은 resultType 둘 중 한 가지를 선택하여 매핑한다.
// 즉, 매핑 구문 아이디별로 고정된 형태로 결과를 매핑하지만, 경우에 따라서는 같은 쿼리의 결과를 특정 컬럼 값에 따라 
// 동적으로 결과를 매핑해야 하는 경우가 생길 수 있다.
// 이 때, <discriminator> 엘리먼트를 사용하면, 지정한 컬럼 값을 기준으로 동적으로 다른 resultMap을 적용할 수 있어 유연한 매핑이 가능하다.
// 즉, 매핑 로직을 간결하게 유지하면서도 다양한 타입 처리가 가능하다.
// 하지만 상속을 전제로 해야하며 일반 객체 분기에는 사용할 수 없다.
// ex)
// <resultMap id="employeeResultMap" type="Employee">
//   <id property="id" column="id"/>
//   <result property="name" column="name"/>
//   
//   <discriminator javaType="string" column="type">
//     <case value="ENG" resultMap="engineerResultMap"/>
//     <case value="MGR" resultMap="managerResultMap"/>
//     <case value="INT" resultMap="internResultMap"/>
//   </discriminator>
// </resultMap>
// 
// <resultMap id="engineerResultMap" type="Engineer">
//   <result property="techSkill" column="tech_skill"/>
// </resultMap>
// 
// <resultMap id="managerResultMap" type="Manager">
//   <result property="department" column="department"/>
// </resultMap>
// 
// <resultMap id="internResultMap" type="Intern">
//   <result property="school" column="school"/>
// </resultMap>

/* <sql> 엘리먼트 */
// 각 매핑 구문에서 공통으로 사용할 수 있는 SQL 문자열의 일부를 정의하고 재사용하기 위해 사용된다.
// <sql id="columns">
//     MENU_CODE
//   , MENU_NAME
//   , MENU_PRICE
//   , CATEGORY_CODE
//   , ORDERABLE_STATUS
// </sql>
// 
// <select id="selectSqlTest" resultMap="menuResultMap2">
//     SELECT
//     <include refid="columns"/>
//     FROM TBL_MENU
//     WHERE ORDERABLE_STATUS = 'Y'
// </select>