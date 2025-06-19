/* Spring Security란? */
// Spring Security는 스프링 기반 어플리케이션의 보안(인증과 권한, 인가 등)을 담당하는 스프링 프레임워크이다.
// Security는 인증과 권한에 대한 부분을 Filter의 흐름에 따라 처리하며, 보안과 관련된 옵션을
// 체계적으로 제공하므로 개발자가 일일이 보안과 관련된 로직을 작성하지 않아도 된다는 장점을 가진다.

/* Security 기능 */
// 1. 인증 및 접근 제어
// : 사용자의 인증과 접근 제어를 처리하여 인증되지 않은 접근을 방지한다. 
//   사용자의 자격 증명을 확인하고 권한 부여 및 접근 권한 검사를 수행해서 인가된 사용자만 보호된 리소스에 접근 가능하도록 한다.
// 2. CSRF(Cross-Site-Request Forgery) 방어
// : CSRF 공격을 방지하기 위해 요청에 CSRF Token을 추가하고, 이를 사용해서 유효한 요청인지 검증하게 된다.
//   이를 통해 악성 사용자의 요청 위조를 방지할 수 있다.
// 3. XSS(Cross-Site Scripting) 방어
// : XSS 공격을 방지하기 위해 출력 데이터의 이스케이프 처리를 제공하고 있으며
//   이를 통해 악성 스크림트가 삽입되는 것을 방지하고 사용자의 브라우저에서 안전하게 실행할 수 있음을 보장한다.
// 4. 세션 관리
// : Spring Security는 세션 관리를 통해 세션 하이재킹 및 세션 고정 공격을 방지한다.
//   적절한 세션 id 생성, 세션 유효성 검사, 세션 제한 시간 설정 등의 기능을 제공하여 세션의 안전성을 강화한다.
// 그 외에도 보안 헤더 설정, 로그인 실패 및 계정 잠금, 보안 취약점 패치 등이 있다.

/* Spring Security 아키텍쳐 */
// 1. 사용자의 로그인 요청
// 2. AuthenticationFilter에서 사용자의 아이디와 비밀번호를 기반으로 UserPasswordAuthenticationToken을 발행
// 3. 생성된 AuthenticationManager에 해당 토큰을 전달
// 4. AuthenticationManager에 등록된 AuthenticationProvider에게 사용자 정보 조회 요청
// 5. UserDetailsService에서 사용자의 정보를 조회하고, UserDetails에 정보를 저장하여 반환
// 6. 조회 시 입력된 username(아이디)을 기반으로 조회
// 7. AuthenticationProvider에서 조회된 사용자의 username(아이디), password(비밀번호)를 비교
// 8. 일치하는 경우 AuthenticationManager에 객체 반환
// 9. 해당 인증 정보를 SecurityContextHolder에 저장

/* Spring Session은 무엇이고 왜 사용하는가? */
// Spring Session은 웹 어플리케이션에서 HTTP 세션 정보를 외부 저장소(Redis, JDBC 등)에 저장하며
// 분산 환경에서도 세션을 공유할 수 있도록 지원하는 모듈이다.
// 전통적인 WAS 세션은 서버 메모리에 저장되기 때문에 서버가 바뀌면 세션 정보가 유지되지 않는다.
// 하지만 Spring Session은 세션 정보를 Redis같은 중앙 저장소에 저장하므로
// 여러 서버 간에서도 동일한 세션을 사용할 수 있도록 해준다.
// 주로 사용하는 이유는 다음과 같다.
// - 서버 간 세션 공유를 위한 분산 세션 관리 기능(무중단 배포, 로드밸런싱 대등)
// - 보안 설정과 연동 쉬움(Spring Security와 통합 가능)
// - 세션 클러스터링을 위한 복잡한 설정 없이도 중앙 집중형 세션 관리 가능

/* Spring Security에서 인증(Authentication)과 인가(Authorization)의 차이점은? */
// 인증(Authentication)은 해당 사용자가 본인이 맞는지를 확인하는 절차를 의미한다.
// 인가(Authorization)은 인증된 사용자가 요청한 자원에 접근 가능한지를 결정하는 절차를 의미한다.
// 즉, 인증은 "네가 누구냐?"를 확인하는 것이고, 인가는 "네가 이것을 할 수 있느냐?"를 확인하는 것이다.

/* Spring Security에서 세션 고정 공격(Session Fixation)을 방지하려면? */
// 세션 고정(Session Fixation)은 공격자가 사용자의 세션 ID를 미리 설정하거나 탈취하여,
// 로그인 이후에도 해당 세션 ID를 그대로 사용하게 하여 피해자의 권한으로 시스템에 접근하는 공격이다.
// 이를 방지하기 위한 방법은 다음과 같다/
// 1. Spring Security 설정을 통해 로그인 성공 시 세션 ID를 새로 발급하게 한다.
//   → Spring Security는 기본적으로 session fixation 방지를 위해 새로운 세션을 생성하도록 설정되어 있다.
//   → Java Config 예시:
http.sessionManagement()
    .sessionFixation().migrateSession(); // (기본값) 기존 세션의 속성은 유지하고 ID만 새로 발급
//   → 기타 옵션:
//   - newSession(): 새 세션 생성, 기존 세션 속성은 유지하지 않음
//   - none(): 세션 고정 보호 비활성화 (비권장)
// 2. CORS 및 쿠키 보안 정책 강화
//   - CORS는 엄격한 출처 정책 설정 필요
//   - 쿠키에 HttpOnly, Secure, SameSite 속성 부여하여 외부에서 세션 쿠키 접근 방지
// 3. 이상 징후 탐지를 위한 로그 분석
//   - 로그인/세션 관련 로그를 분석하여 동일한 세션 ID로 발생하는 의심스러운 요청을 탐지
//   - IP, User-Agent, 지역 등을 기준으로 이상 접근 탐지 가능
// 정리하면 "Spring Security는 기본적으로 로그인 시 세션 ID를 새로 발급하여 세션 고정 공격을 방지합니다. 
// sessionFixation().migrateSession() 설정이 핵심이며, CORS나 쿠키 정책도 함께 강화하면 보안을 더 높일 수 있습니다.