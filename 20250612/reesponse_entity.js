/* 클라이언트와 서버의 비동기 통신 */
// 클라이언트에서 서버로 통신하는 메세지를 요청(Request) 메세지라고 하며, 
// 서버에서 클라이언트로 통신하는 메세지를 응답(Response) 메세지라고 한다.
// 웹에서 화면전환(새로고침) 없이 이루어지는 동작들은 대부분 비동기(비순차적)통신으로 이루어진다.
// 비동기 통신으로 클라이언트에서 서버로 요청 메세지를 보내면 body에 데이터를 담아서 보내야 하고
// 반대의 경우에도 body에 데이터를 담아서 서버에서 클라이언트에게 보내야 한다.
// 즉, 요청할 때는 RequestBody에 응답할 떄는 ResponseBody에 담아서 보내야 한다.
// 이 때 body에 담기는 데이터 형식은 여러가지가 있지만 가장 대표적인 것이 JSON으로
// 스프링 MVC에서도 클라이언트에서 전송한 xml 데이터나 JSON 등의 데이터를 컨트롤러에서 DOM 객체나 자바 객체로 변환해서 송수신할 수 있다.
// 이 때 사용하는 것이 @RequestBody 어노테이션과 @ResponseBody 어노테이션으로
// 두 어노테이션들은 각각 HTTP RequestBody를 자바 객체로 변환하고 자바 객체를 HTTP ResponseBody로 변환해준다.

/* RequestBody에 담긴 값을 자바 객체로 변환하는 과정 */
// @RequestBody를 통해서 HTTP RequestBody를 자바 객체로 변환하는데, 이 때 HttpMessageConverter를 사용한다.
// @ResponseBody가 붙은 파라미터에는 Http 요청의 body부분이 그대로 전달되며
// RequestMappingHandleAdapter에는 HttpMessageConverter 타입의 메세지 변환기가 여러개 등록되어 있다.

/* @RequestBody란? */
// @RequestBody 어노테이션은 해당 어노테이션이 붙은 파라미터에 http requestBody에 내용이 그대로 전달되게 해준다.
// 주로 xml이나 json 형식의 데이터를 requestbody에 담아서 오는 경우 사용되며
// Http Request Body를 통째로 자바 객체로 변환하여 매핑된 메소드의 파라미터로 전달하는 역할을 한다.

/* @ResponseBody란? */
// @ResponseBody는 자바 객체를 Http ResponseBody로 매핑하여 클라이언트에 전송한다.

/* @RequestBody와 @ResponseBody 정리 */
// 클라이언트에서 서버로 필요한 데이터를 요청하기 위해서는 JSON 데이터를 요청 본문에 담아서 서버로 보내면, 
// 서버에서는 @RequestBody 어노테이션을 사용하여 Http 요청 본문에 담긴 값들을 자바 객체로 변환시켜 객체에 저장한다.
// 반대로 서버에서 클라이언트로 응답 데이터를 전송하기 위해서 @ResponseBody 어노테이션을 사용하여
// 자바 객체를 Http 응답 본문의 객체로 변환하여 클라이언트로 전송한다.

/* @RestController란? */
// RestAPI를 사용하는 경우 컨트롤러에 붙이는 어노테이션으로
// @Cotroller와 달리 리턴값에 자동으로 @ResponseBody가 붙게되어 별오의 어노테이션을 명시해주지 않아도
// HTTP 응답 데이터(body)에 자바 객체가 매핑되어 전달된다.
// @Controller인 경우에는 바디를 자바 객체로 받기 위해서는 @ResponseBody 어노테이션을 반드시 명시해주어야 한다.

// 참고 사이트 : https://velog.io/@hotdog1029/RequestBody-%EB%9E%80

// ----------------------------------------------------------------------------------------------------

/* ResponseEntity란? */
// ResponseEntity는 스프링 프레임워크에서 HTTP 응답을 더 세밀하게 제어할 수 있도록 도와주는 클래스이다.
// 주로 컨트롤러에 사용되며, HTTP 상태 코드, 헤더, 응답 본문 등을 원하는 대로 설정하여 반환할 수 있다.
// 장점
// - Http 응답에 대한 높은 제어력 
// : HTTP 상태 코드, 헤더, 본문 등을 세밀하게 설정하여 응답을 제어할 수 있다.
// - RESTful API 설계 
// : RESTful API를 설계할 떄, 상태 코드와 헤더를 사용하여 응답의 의미를 명확하게 전달할 수 있다.
// - 응답 데이터 포맷 설정
// : XML, JSON등의 다양한 데이터 포맷으로 응답 본문을 변환할 수 있다.
// 즉, ResponseEtity는 웹서비스 개발에서 클라이언트에게 정확하고 상세한 응답을 전달하는데 중요한 역할을 한다.

/* @RequestBody와 RequestParam의 차이를 설명하시오. */
// https://ocblog.tistory.com/49 -> 참고 사이트