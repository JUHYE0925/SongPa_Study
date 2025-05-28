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
