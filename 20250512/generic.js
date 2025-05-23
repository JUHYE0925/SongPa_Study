/* 동기/비동기 */
// 동기와 비동기는 작업 처리의 방식에 대한 개념이다.
// 동기는 요청한 작업이 완료될 때까지 대기한 후, 다음 작업을 수행하는 방식이다.
// 즉, 요청 -> 작업 완료 -> 응답의 순서가 보장된다.
// 반면 비동기는 요청한 작업의 완료 여부와 상관없이 다음 작업을 바로 수행하는 방식이다.
// 작업 결과는 콜백, 이벤트 등을 통해 나중에 처리된다.
// 예를 들어 동기 방식에서는 A 작업이 끝날 때까지 B 작업이 기다리지면, 
// 비동기 방식에서는 A 작업을 시작해 놓고 끝나기 전에 B 작업을 먼저 진행할 수 있다. 

/* StringBuilder/StringBuffer */
// 자바에서는 문자열을 다루기 위해 String, StringBuilder, StringBuffer 세 가지 클래스를 제공한다.
// String은 불변 객체이다. 문자열 연산 시 새로운 객체가 생성되므로 메모리 낭비와 성능 저하가 발생할 수 있다.
// 하지만 읽기 전용 문자열 처리에 적합하다.
// StringBuilder는 가변 객체로, 문자열을 빈번하게 수정해야할 경우 사용된다.
// 싱글 스레드 환경에서 빠른 성능을 제공한다.
// StringBuffer는 StringBuilder와 유사하지만 멀티스레드 환경에서의 동기화를 지원한다.
// 따라서 스레드 안전성이 요구되는 상황에서 사용되지만 그만큼 성능은 StringBuilder에 비해 느릴 수 있다.
//
// 예시시
// String str = "hello";
// str += " world"; // 매번 새로운 String 객체 생성
//
// StringBuilder sb = new StringBuilder("hello");
// sb.append(" world"); // 기존 객체에 문자열 추가
//
// StringBuffer sbf = new StringBuffer("hello");
// sbf.append(" world"); // 스레드 안전하게 문자열 추가

/* 프로세스와 스레드란? */
// 프로세스는 일반적으로 cpu에 의해 메모리에 올려져 실행 중인 프로그램을 말한다.
// 독립된 메모리 공간(코드, 데이터, 스택, 힙)을 가지고 있으며, 운영체제에 의해 관리된다.
// 각 프로세스는 서로 독립적이며, 다른 프로세스와 메모리를 공유하지 않는다.
// 스레드는 프로세스 안에서 실질적인 작업을 실행하는 작업의 최소 단위를 말한다.
// 하나의 프로세스에는 적어도 한 개 이상의 스레드가 있으며,
// 스레드는 프로세스의 메모리 공간(힙 등)을 공유하지만 각자 개별적인 스택을 갖고 실행된다.
// 자바는 JVM 위에서 하나의 프로세스로 실행된다.
// 자바는 스레드 클래스나 Runnable 인터페이스, 그리고 ExecutorService 등을 통해 멀티 스레딩을 지원한다.
// 메인 스레드를 기준으로 별도의 스레드를 생성하거나 풀로 관리하여 동시에 여러 작업을 수행할 수 있다.

/* 스레드의 장단점 */
// 스레드는 경량 구조로 빠른 컨텍스트 스위칭, 메모리 공유를 통한 효율성을 제공한다.
// 하지만 메모리를 공유하기 때문에 동기화 문제가 발생할 수 있으며, 교착 상태나 경쟁 조건 등 동시성 문제에 주의해야 한다는 단점이 있다

/* 박싱/언박싱 */
// 박싱은 자바에서 기본형의 값을 래퍼 클래스 객체로 변환하는 과정을 말한다.
// 예를 들어 int 타입 값을 Integer 객체로 감싸는 것을 박싱이라고 한다.
// 반대로 언박싱은 래퍼 클래스 객체에서 기본형 값을 꺼내는 과정을 말한다.
// 즉, Integer를 int로 변환하는 경우를 언박싱이라고 한다.
// 자바 5부터는 오토 박싱과 오토 언박싱 기능이 도입되어 개발자가 명시적으로 변환하지 않아도 컴파일러에 의해 자동으로 변환해준다.
// 이 기능은 코드 작성 시 편리하지만, 주의할 점도 있다.
// 예를 들으 null 값이 할당 된 Wrapper 객체를 언박싱 하면 NullPointException이 발생할 수 있다.
// 또한 == 연산자를 사용할 때는 객체 참조 비교가 이루어지므로, 값 비교 시에는 equals()를 사용하는 것이 안전하다.

/* Wrapper 클래스란? */
// Wrapper 클래스는 자바에서 기본 자료형을 객체로 다룰 수 있도록 제공하는 클래스이다.
// 예를 들면 int는 Integer, double은 Double과 같은 클래스에 의해 객체로 포장된다.
// 컬렉션 API(List, Map 등)는 객체만 저장할 수 있기 때문에 기본형 값을 저장하려면 Wrapper 클래스를 사용해야 한다.
// 또한 제네릭과 동기화가 필요한 문맥에서도 객체 형태를 다뤄야하기 때문에 Wrapper 클래스가 필요하다.
// 자바는 오토 박싱과 언박싱을 통해 기본형과 Wrapper 객체 간의 변환을 자동으로 처리해준다.
// Wrapper 클래스는 자바에서 기본형을 객체처럼 다루고자 할 때 핵심적인 역할을 한다.

/* Collection FrameWork */

/* Collections 클래스란? */