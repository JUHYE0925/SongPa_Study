/* Handler Method란? */
// 핸들러 메소드는 사용자 요청에 대한 응답을 생성하는 메소드이다.
// 핸들러 메소드에 파라미터로 특정 몆 가지 타입을 선언하게 되면 핸들러 메소드 호출 시 
// 인자로 값을 전달해준다.
// 이러한 핸들러 메소드에는 여러 가지가 있는데
// WebRequest, @RequestParam, @ModelAttribute, HttpSession, @RequestBody 등이 있다.

/* WebRequest란? */
// 파라미터 선언부에 WebRequest 타입을 선언하면 해당 메소드 호출 시 인자로 값을 전달해준다.
// 핸들러 메소드 매개변수로 HttpServletRequest, HttpServletResponse도 사용 가능하다.
// 또한 상위 타입인 ServletRequest, ServletResponse도 사용 가능하다.
// WebRequest는 HttpServletRequest의 요청 정보를 거의 대부분 그대로 가지고 있는 API로 Servlet에 종속적이지 않다.
// WebRequest는 Spring의 일부이기 때문에 Spring 기반의 프로젝트에서 더 자주 사용한다.

/* @RequestParam */
// 요청 파라미터로 매핑하여 호출 시 값을 넣어주는 어노테이션으로 매개변수 앞에 작성한다.
// form의 name 속성값과 매개변수의 이름이 다른 경우 @RequestParam("name")을 설정하면 된다.
// 또한 어노테이션은 생략 가능하지만 명시적으로 작성해주는 것이 의미 파악에 쉽다.
// 전달하는 form의 name 속성이 일치하는 것이 없는 경우 400에러가 발생하는데 이는 required 속성의 기본값이 true이기 때문이다.
// required 속성을 false로 하면 해당 name의 값이 존재하지 않아도 null로 처리하며 에러가 발생하지 않는다.
// 또한 값이 제대로 넘어오지 않으면 "" 빈 문자열이 넘어오게 되는데, 이 때 parsing 관련 에러가 발생할 수 있다.
// 값이 넘어오지 않는 경우 defaultValue 속성을 이용하게 되면 기본값을 지정할 수 있다.

/* @ModelAttribute란? */
// DTO 같은 모델을 커맨드 객체로 전달 받는다.
// @ModelAttribute의 경우 커맨드 객체를 생성하여 매개변수로 전달해 준 뒤 해당 인스턴스를 model에 담는다.
// 경우에 따라서는 form에서 입력한 값을 다음 화면으로 바로 전달해야 하는 경우가 발생하는데 이 때 유용하게 사용할 수 있다.
// @ModelAttribute("모델에담을key값")을 지정할 수 있으며, 지정하지 않으면 타입의 앞글자를 소문자로 한 네이밍 규칙을 따른다.
// 또한 해당 어노테이션은 생략 가능하지만 명시적으로 작성하는 것이 좋다.

/* @SessionAttribute */
// 클래스 레벨에 @SessionAttributes 어노테이션을 이용하여 세션에 값을 담을 key값을 설정해두면
// Model 영역에 해당 key로 값이 추가되는 경우 session에 자동 등록을 한다.
// 또한 SessionAttributes로 등록된 값은 session의 상태를 관리하는 SessionStatus의 setComplete() 메소드를 통해 만료된다.

/* @RequestBody */
// @RequestBody는 http 본문 자체를 읽는 부분을 Model로 변환시켜 주는 어노테이션이다.
// 출력해보면 쿼리 스트링 형태의 문자열로 전송된다.
// JSON으로 값을 전달하는 경우 Jackson의 컨버터로 자동 파싱하여 사용할 수 있다.
// 주로 RestAPI 작성 시 많이 사용되며, 일반적인 form 전송을 할 때는 거의 사용하지 않는다.
// @RequestHeader 어노테이션을 사용하면 RequestHeader에 대한 정보를 가져올 수 있으며
// @CookieValue 어노테이션을 이용하면 쿠키 정보도 쉽게 불러올 수 있다.
// 