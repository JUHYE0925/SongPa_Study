/* 동적쿼리란? */
// 기존에는 쿼리문에서 검색 기능이나 입력 처리 등을 수행할 경우, 
// SQL을 실행하는 DAO를 여러 번 호출하거나 batch 기능을 이용하여
// 버퍼에 담아서 한 번에 실행시키는 방식으로 쿼리를 구현했다.
// MyBatis에서는 이를 동적으로 제어할 수 있는 구문을 제공하여 좀 더 쉽게 쿼리를 구현할 수 있는 기능을 지원한다.
// 즉 SQL 쿼리 내용을 실행 시점(런타임)에 조건에 따라서 유동적으로 변경하거나 조립할 수 있다.
// 이를 위해 MyBatis는  <if>, <choose>, <foreach>, <trim> 등의 태그를 제공한다.

/* <if> */
// <if test = "조건식">
//      쿼리 구문
// </if>
// 형태이며
// 제시된 조건식이 참일 경우 태그 내부의 쿼리 구문을 쿼리에 포함한다.
// ex)
// <select id="selectMenuByPrice" parameterType="hashmap" resultMap="menuResultMap">
//     SELECT
//            *
//       FROM TBL_MENU A
//     <if test="price gte 0 and price lte 10000">
//         <![CDATA[
//             AND A.MENU_PRICE < #{ price }
//         ]]>
//     </if>
//     <if test="price gt 10000 and price lte 20000">
//             AND A.MENU_PRICE BETWEEN 10000 AND #{ price }
//     </if>
//      ORDER BY A.MENU_CODE
// </select>

/* <choose> */
// <choose>
//    <when test = "조건식">
//          쿼리 구문
//    </when>
//      ...
//    <otherwise>
//          쿼리 구문
//    </otherwise>    
// </choose>
// 형태이며
// <when> 태그 test 속성 조건에 부합하면 when 엘리먼트 구문을 쿼리에 포함한다.
// 만약 어떠한 when 조건도 만족하지 못할 경우에는 otherwise 엘리먼트 구문을 쿼리에 포함한다.
// ex)
//<select id="searchMenuBySubCategory" parameterType="searchCriteria" resultMap="menuResultMap">
//    SELECT
//           *
//      FROM TBL_MENU A
//     WHERE A.ORDERABLE_STATUS = 'Y'
//    <choose>
//       <when test="value == '식사'">
//           AND A.CATEGORY_CODE IN (4, 5, 6, 7)
//       </when>
//       <otherwise>
//           AND A.CATEGORY_CODE IN (11, 12)
//       </otherwise>
//    <choose>
//     ORDER BY A.MENU_CODE
//</select>

/* <foreach> */
// <foreach collection="반복 대상" item="반복 수행 시 꺼내올 값 이름" open="구문 가장 앞에 올 문자" separator="꺼내온 item 사이에 들어갈 문자" close="구문 가장 마지막에 올 문자">
//      #{ 반복 수행 대상 }
// </foreach> 
// java의 for문 역할처럼 수행하여 콜렉션에 대한 반복처리를 지원하는 태그이다.
// 주로 in 연산자와 함께 사용된다.
// ex)
//<select id="searchMenuByRandomMenuCode" parameterType="hashmap" resultMap="menuResultMap">
//    SELECT
//         *
//        FROM TBL_MENU A
//        AND A.MENU_CODE IN
//        <foreach collection="randomMenuCodeList" item="menuCode" open="(" separator=", " close=")">
//            #{ menuCode }
//       </foreach>
//</select>