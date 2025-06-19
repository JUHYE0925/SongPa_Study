/* Spring Interceptor란? */
// Spring Interceptor는 Spring 프레임워크에서 제공하는 기능으로, 클라이언트의 요청을 가로채서 처리하는 역할을 한다. 
// 이를 통해 공통 로직(로깅, 성능 측정, 캐싱)을 처리하거나, 보안(인증, 권한)등의 목적으로 특정 조건을 검사하고 해당 요청을 처리하거나, 
// 무시할 수 있다.

/* Spring Interceptor vs Servlet Filter */
// 위의 설명만 보면 Spring의 Interceptor와 Servlet의 Filter는 비슷해보인다.
// 실제로 Interceptor도 특정 요청 URL에만 동작하도록 매핑할 수 있다는 점에서 Filter와 유사하다.
// 하지만 Interceptor는 Spring 웹 어플리케이션 컨텍스트에 구성되므로, 
// Filter와 달리 Spring Container의 기능을 자유롭게 활용할 수 있고, 
// Container에 등록된 모든 Bean을 참조할 수 있다는 점에서 차이가 있다.
// 또한 아래 이미지를 보면 Filter는 DispatcherServlet 이전에 동작하고, 
// HandlerInterceptor는 그 이후 즉, 컨트롤러로 요청이 전달되기 전에 동작한다는 점에서 실행 위치도 다르다.

/* 언제 Filter를 쓰고, 언제 Interceptor로 쓸까? */
// Spring 기반 웹 어플리케이션을 개발하다 보면 Filter 와 Interceptor를 언제 사용해야 할지 헷갈릴 수 있다. 
// 둘 다 요청 흐름에 개입하여 로직을 수행할 수 있지만, 동작 위치나 사용 목적, 그리고 기술적 특징에는 분명한 차이가 있다.
// 1. Filter는 언제 사용할까?
// Filter는 Servlet 기반 기능으로, Spring 프레임워크와는 별개로 작동한다. 
// 즉, DispatcherServlet이 실행되기 이전에 동작한다.
// Filter가 주로 쓰이는 경우
// 요청 전반에 적용해야 하는 공통 로직 처리가 필요한 경우
// 예 : 인코딩 설정, 보안 헤더 추가, GZIP 압 등
// Spring 컨텍스트와 무관한 로직을 수행할 때
// 예 : 서블릿 기반 라이브러리와 통합할 경우
// 대표적으로 CORS를 처리, XSS/SQL Injection 방지 필터, 로깅 등에 사용된다.
// 2. Interceptor는 언제 사용할까?
// Interceptor는 Spring MVC의 기능으로, HalderMapping과 HandlerAdapter 사이에서 작동한다. 
// 즉, 컨트롤러 실행 전/후 또는 뷰 랜더링 이후에 개입할 수 있다.
// Interceptor가 적합한 경우
// 컨트롤러에 도달하기 직전/직후에 처리 해야할 때
// 예 : 로그인 체크, 권한 검사, 사용자 활동 로깅 등
// Spring의 DI(의존성 주입) 기능을 활용해야 할 때
// 요청 URL을 세밀하게 제어하고 싶을 때 
// 대표적인 Interceptor 활용 예
// 로그인 여부 확인 및 세션 체크
// 관리자 권한 검증
// 공통 모델 데이터 삽입
// 예 : 사용자 정보
// 처리 시간 측정 및 모니터링
// 정리하자면 전역적인 요청 처리나 Spring의 외부 영역에서 동작해야 할 경우에는 Filter를, 
// Spring MVC 내부 흐름에서 컨트롤러 전후 처리가 필요할 경우에는 Interceptor가 적절하다. 
// 실제 프로젝트에서는 두 가지를 함께 사용하는 경우도 많다. 예를 들어, Filter로 전체 요청을 사전 필터링하고, 
// 그 이후에 Interceptor로 세부적인 인증 및 권한 처리를 수행하는 식이다.