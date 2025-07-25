/* RestAPI란? */
// REST API는 쉽게 말해, 웹에서 데이터를 주고받는 방식 중 하나이다. 
// REST는 'Representational State Transfer'의 줄임말로, 웹에서 자원의 상태를 전송하는 방식이다. 
// 즉, 클라이언트가 서버에 요청을 보내면 서버는 자원의 상태를 반환하는 방식이다. 
// REST API의 핵심 요소는 자원(Resource), URI, HTTP Method이다. 
// 자원은 웹에서 관리되는 데이터로, 예를 들면 '사용자', '게시글', '댓글' 등이 자원에 해당한다. 
// URI는 자원의 고유한 이름을 의미하며, 자원에 접근하기 위한 주소로 '/users/1' 같은 형태로 표현된다. 
// URL도 URI의 일종이지만, URI는 그 자체가 자원을 고유하게 식별하는 이름이고, URL은 그 자원을 찾을 수 있는 실제 주소라는 차이가 있다.
// HTTP Method는 자원에 대해 어떤 작업을 수행할지를 정의한다. 
// 주요 HTTP 메서드는 다음과 같다:
// - GET: 자원을 조회(가져오기)
// - POST: 새로운 자원을 생성
// - PUT: 기존 자원의 상태를 업데이트
// - DELETE: 자원을 삭제
// 정리하면 REST API는 자원을 중심으로 URL을 설계하고, HTTP 메서드를 통해 데이터를 주고받는 방식이며
// 웹의 기본 요소를 잘 활용해서 시스템 간 통신을 효율적으로 할 수 있는 게 장점입니다."

/* REST의 특징 */
// 1. 클라이언트/서버 구조
// : 클라이언트와 서버의 역할이 명확히 구분된다. 클라이언트는 사용자 인터페이스와 상태를 관리하고,
//   서버는 API를 제공하며 비즈니스 로직 처리 및 데이터를 저장한다.
// 2. 무상태성(Stateless)
// : REST는 HTTP 프로토콜을 기반으로 하여 무상태성(Stateless)을 가진다.
//   서버는 각 요청을 독립적으로 처리하며, 이전 요청의 상태를 기억하지 않아서 확장성과 유지보수가 용이하다.
// 3. 캐시 처리 가능(Cacheable)
// : REST는 HTTP 명세를 따르기 때문에 캐시를 사용할 수 있다.
//   캐시를 사용하면 응답 시간이 빨라지고, 서버의 부하가 줄어들며 성능이 향상된다.
// 4. 자체 표현 구조
// : REST API의 메시지만으로 요청이 어떤 작업을 수행할지 직관적으로 이해할 수 있다.
// 5. 계층화
// : 클라이언트와 서버가 분리되어 있기 때문에 중간에 프록시 서버나 암호화 계층을 삽입할 수 있어 유연하다.
// 6. 유니폼 인터페이스
// : HTTP 표준을 따르기 때문에 모든 플랫폼에서 사용이 가능하고, URL을 통해 리소스를 일관되게 처리할 수 있게 된다.
//   즉, 특정 언어나 기술에 종속되지 않는다.

/* RESTful이란? */
// RESTful은 HTTP와 URI를 기반으로 자원에 접근하는 방식을 제공하는 아키텍처 스타일이다.
// 기본적으로 개발자는 HTTP 메서드와 URI만으로 인터넷 상의 자원을 CRUD(생성, 조회, 수정, 삭제)할 수 있다.
// 'REST API'를 제공하는 웹 서비스를 'RESTful'하다고 할 수 있다.
// 즉, RESTful은 REST의 원칙을 잘 따르는 방식을 의미하며, 특정 기준이나 규격에 의해 정해진 것이 아니다.

/* ------------------------------------------------------------------------ */
/* ---------- 다시 정리 하기 ---------- */
// 1. REST API와 RESTful API의 차이점은 무엇인가요?
// 목표: REST와 RESTful의 차이점과 각각의 정의를 명확하게 이해하고 있는지를 평가하는 질문입니다.
// 핵심 답변:
// REST는 아키텍처 스타일로, 자원(Resource) 기반으로 HTTP 메서드(GET, POST, PUT, DELETE)를 사용해 데이터를 처리하는 방식입니다.
// RESTful API는 REST의 원칙을 따르는 API를 의미하며, REST의 개념을 실제 API 구현에 잘 적용한 형태입니다.
// RESTful API는 "REST를 잘 구현한 API"라고 할 수 있습니다.

// 2. REST의 6가지 주요 특징에 대해 설명해 주세요.
// 목표: REST의 핵심 특징을 잘 이해하고 있는지 평가합니다.
// 핵심 답변:
// 클라이언트/서버 구조: 클라이언트와 서버가 역할이 분리되어 독립적으로 동작합니다.
// 무상태성(Stateless): 서버는 클라이언트의 상태를 저장하지 않고, 각 요청은 독립적으로 처리됩니다.
// 캐시 처리 가능(Cacheable): 서버 응답은 캐시할 수 있어 성능이 향상됩니다.
// 자체 표현 구조(Uniform Interface): 요청의 메시지만으로 어떤 행위가 일어날지 알 수 있습니다.
// 계층화(Layered System): 서버와 클라이언트 사이에 중간 계층을 둘 수 있습니다.
// 코드 온 디맨드(Code on Demand): 선택적으로 서버가 클라이언트에 코드를 제공할 수 있습니다.

// 3. HTTP 메서드(GET, POST, PUT, DELETE)의 차이점과 사용 사례를 설명해주세요.
// 목표: REST API의 기본적인 HTTP 메서드의 사용 용도와 차이점을 명확히 이해하고 있는지 평가합니다.
// 핵심 답변:
// GET: 자원을 조회할 때 사용. (예: GET /users/1 → 특정 사용자 조회)
// POST: 새로운 자원을 생성할 때 사용. (예: POST /users → 사용자 생성)
// PUT: 기존 자원을 수정할 때 사용. (예: PUT /users/1 → 1번 사용자 정보 수정)
// DELETE: 자원을 삭제할 때 사용. (예: DELETE /users/1 → 1번 사용자 삭제)

// 4. RESTful API에서 URI 설계 원칙에 대해 설명해주세요.
// 목표: RESTful API에서 자원(Resource)을 어떻게 정의하고 URI를 설계하는지 평가합니다.
// 핵심 답변:
// 자원은 명사로 표현: 예를 들어, 사용자 정보를 다룰 때 /users, 게시글을 다룰 때 /posts와 같이 자원을 명사로 나타냅니다.
// 동사 대신 HTTP 메서드 사용: URI에서 동사는 사용하지 않고, HTTP 메서드(GET, POST, PUT, DELETE)로 동작을 정의합니다.
// 복수형 사용: 자원은 항상 복수형으로 표현하는 것이 좋습니다. 예: /users (단수형 사용은 피합니다.)
// 계층적 구조: 자원 간 관계를 반영해 계층적으로 URI를 설계합니다. 예: /users/1/posts (1번 사용자의 게시글)

// 5. REST API에서 상태를 관리하는 방식에 대해 설명해주세요. (Stateless)
// 목표: REST API에서 무상태성(Stateless)의 의미와 그것이 중요한 이유를 설명할 수 있는지를 평가합니다.
// 핵심 답변:
// 무상태성(Stateless): REST에서는 각 요청이 독립적으로 처리됩니다. 즉, 서버는 클라이언트의 상태를 저장하지 않으며, 클라이언트는 필요한 모든 정보를 요청에 포함시켜야 합니다.
// 중요성: 무상태성 덕분에 서버는 각 요청을 독립적으로 처리할 수 있기 때문에, 서버 확장이 용이하고, 서버의 부하를 줄일 수 있습니다.