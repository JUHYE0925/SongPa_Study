/* View Resolver란? */
// 핸들러 메소드가 요청을 처리한 후 논리적인 뷰 이름(String)을 반환하면,
// DispatcherServlet은 이 뷰 이름을 실제 뷰 파일 경로로 변환하기 위해 ViewResolver를 사용한다.
// Spring MVC는 다양한 ViewResolver 구현체를 제공하며,
// 기본 설정에서는 InternalResourceViewResolver를 사용한다.
// 이는 prefix와 suffix 설정을 통해 논리 뷰 이름을 JSP 파일 경로로 변환한다.
// 예: "home" → "/WEB-INF/views/home.jsp"
// InternalResourceViewResolver는 JSP 또는 서블릿 등 내부 리소스만 지원하며,
// Thymeleaf, Mustache 등 다른 템플릿 엔진을 사용할 경우 해당 엔진에 맞는 ViewResolver를 등록해야 한다.
// 예를 들어, Thymeleaf를 사용하는 경우에는 ThymeleafViewResolver를 사용하며,
// 일반적으로 prefix는 "classpath:/templates/", suffix는 ".html"로 설정한다.

/* RedirectAttributes란? */
// 스프링 MVC에서 리다이렉트를 수행할 때,
// 다른 컨트롤러로 데이터를 전달하기 위해 사용하는 인터페이스이다.
// 일반적으로 리다이렉트는 클라이언트의 재요청이 발생하기 때문에,
// request scope에 저장된 데이터는 소멸된다.
// 이를 보완하기 위해 Spring은 RedirectAttributes를 통해 데이터를 전달할 수 있는 기능을 제공한다.
// RedirectAttributes에는 두 가지 주요 메소드가 있다:
// 1. addFlashAttribute(String key, Object value)
// - 데이터를 임시 저장소(flash scope)에 저장한 후 리다이렉트한다.
// - 세션에 잠깐 저장되며, 리다이렉트된 요청이 끝난 후 자동으로 제거된다.
// - 서버 내부적으로 Model에 자동 추가되므로, JSP/HTML에서 ${key}로 접근 가능하다.
// - URL에 노출되지 않으며, 보안이 필요한 데이터 전달에 적합하다.
// - 같은 키로 세션에 값이 이미 있을 경우 충돌 가능성이 있어 주의가 필요하다.
// 2. addAttribute(String key, Object value)
// - 데이터를 쿼리 파라미터로 전달한다.
// - URL에 key=value 형식으로 포함되며, 브라우저 주소창에 보인다.
// - 리다이렉트된 페이지를 새로고침해도 값이 유지된다.
// - 보안이 필요하지 않고, 공유해도 되는 데이터에 적합하다.
// 예시:
// redirect:/target → /target?name=John (addAttribute 사용 시)

/* ModelAndView란? */
// ModelAndView는 스프링 MVC에서 뷰(View) 이름과 모델(Model) 데이터를 함께 담아
// 컨트롤러(또는 핸들러)에서 DispatcherServlet으로 전달하는 객체이다.
// 즉, 뷰(View)의 논리 이름과 화면에 전달할 데이터(Model)를 동시에 설정할 수 있는 클래스이다.
// 일반적으로 컨트롤러 메서드에서 문자열(String)만 반환하면 View 이름만 지정되고,
// 모델 데이터는 Model 객체를 통해 따로 추가한다.
// 하지만 ModelAndView를 사용하면 하나의 객체에서 둘 다 처리할 수 있어 명시적이고 직관적인 코드 작성이 가능하다.
// 사용 예:
// ModelAndView mav = new ModelAndView("viewName");
// mav.addObject("key", value);
// return mav;
// DispatcherServlet은 이 객체를 받아 ViewResolver로 View를 찾고,
// Model 데이터를 View에 전달해 클라이언트에게 최종 응답을 렌더링한다.
