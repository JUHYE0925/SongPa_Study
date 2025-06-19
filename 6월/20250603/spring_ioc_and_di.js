/* Spring Framework란? */
// Spring Framework는 자바 기반의 오픈 소스 어플리케이션 프레임워크로, 
// 웹 어플리케이션을 개발할 때 필수적인 여러 기능을 제공한다.
// 대표적으로 IoC(제어의 역전), DI(의존성 주입), AOP(관점 지향 프로그래밍) 같은 구조적인  프로그래밍을 지원하며,
// Spring MVC를 통해 웹 계층 아키텍쳐도 쉽게 구성할 수 있다.
// 전자정부 표준 프레임워크의 기반 기술로도 사용되어 공공기관 시스템 개발에 널리 쓰이고 있다.
//
// **) 
// 프레임워크란 어떤 작업이나 프로젝트할 때 미리 정해진 틀이나 구조를 말한다.
// 즉, 소프트웨어 개발 시 기본 구조아 뼈대를 제공해주는 재사용 가능한 코드의 집합을 의미한다.
// 개발자가 어플리케이션을 빠르고 일관되게 만들 수 있도록 도와주는 개발 도구 + 구조 가이드라인이라고 보면 된다.

/* 라이브러리와 프레임워크의 차이 */
// 프레임워크와 라이브러리의 가장 큰 차이는 제어 흐름에 있다.
// 프레임워크는 
// "제어의 역전(IoC)"의 개념을 기반으로 프레임워크가 전체 실행 흐름을 제어하고
// 개발자는 그 틀에 맞춰 필요한 부분만 구현한다.
// 예를 들어 Spring에서는 컨트롤러, 서비스, 레포지토리 같은 구조에 맞춰 ㅗ드를 작성하면
// 실행 흐름은 프레임워크가 관리한다.
// 반면 라이브러리는
// 개발자가 필요할 때 직접 호출하여 사용하는 도구이다.
// 즉, 개발자가 흐름을 직접 제어하는 것이다.
// 예를 들어 JSON을 파싱할 때 Gson 같은 라이브러리를 직접 불러서 사용하는 방식이 있다.

/* IoC(Inversion of Control : 제어의 역전) */
// Ioc(Inversion of Control)은 제어의 역전이란 말 그대로 객체의 제어권을 개발자가 아닌 프레임워크가 가지는 개념이다.
// 쉽게 말해 메소드나 객체를 생성하고 호출하는 작업을 개발자가 아닌 Spring에게 맡겨서 진행한다는 것이다.
// Spring에서는 IoC 컨테이너가 객체를 생성하고 의존성 주입을 관리한다.
// 예전에는 개발자가 new 키워드를 사용하여 객체를 생성하고, 필요한 의존 객체도 직접 만들어야 했다.
// 하지만 Spring에서는 객체의 의존성을 미리 Bean으로 등록해두고, 필요한 시점에 자동으로 주입한다.
// 이 과정을 통해 객체 간 결합도는 낮아지고, 테스트와 유지보수가 쉬운 구조가 된다.
// Spring에서는 IoC를 구현하기 위해 주로 DI(Dependency Injection)을 사용한다.
// 또한 대부분의 Bean은 싱글턴으로 관리되어 효율적인 메모리 사용이 가능하다.
// ex)
// ------------------------- 기존 방식 -------------------------
// // Service 클래스
// public class OrderService {
//     private PaymentService paymentService;
//
//     public OrderService() {
//         // 의존 객체 직접 생성 (강한 결합)
//         this.paymentService = new PaymentService();
//     }
//
//     public void processOrder() {
//         paymentService.pay();
//     }
// }
//
// // 의존 클래스
// public class PaymentService {
//     public void pay() {
//         System.out.println("결제 완료");
//     }
// }
//
// // 실행
// public class App {
//     public static void main(String[] args) {
//         OrderService orderService = new OrderService();
//         orderService.processOrder();
//     }
// }
// ------------------------- Spring 방식 -------------------------
// Spring 방식
// // 의존 클래스
// @Component
// public class PaymentService {
//     public void pay() {
//         System.out.println("결제 완료");
//     }
// }
//
// // 서비스 클래스
// @Component
// public class OrderService {
//     private final PaymentService paymentService;
//
//     // 생성자 주입 (Spring이 자동으로 주입해줌)
//     public OrderService(PaymentService paymentService) {
//         this.paymentService = paymentService;
//     }
//
//     public void processOrder() {
//         paymentService.pay();
//     }
// }
//
// // 실행 클래스
// @SpringBootApplication
// public class App {
//     public static void main(String[] args) {
//         ApplicationContext context = SpringApplication.run(App.class, args);
//
//         OrderService orderService = context.getBean(OrderService.class);
//         orderService.processOrder();
//     }
// }

/* DI(Dependency Injection : 의존성 주입) */
// DI는 의존성 주입이라는 뜻으로, 객체가 의존하는 객체를 직접 생성하지 않고 외부에서 주입받는 설계 패턴이다.
// Spring에서는 객체 간의 의존 관계를 new 키워드를 사용하여 직접 코드 내에서 생성하지 않고,
// IoC 컨테이너가 대신 생성하고 주입해주는 방식으로 DI를 구현한다.
// 즉, 객체 간의 의존성을 어플리케이션 내부가 아닌 외부(Spring IoC 컨테이너)에 위임하여
// 객체 간의 결합도를 낮추고 유연한 구조를 만들 수 있게 해준다.
// 
// DI는 다음과 같은 장점을 가진다.
// 결합도 감소 - 코드 간의 의존성이 낮아져 유지보수와 테스트가 쉬워진다.
// 재사용성 증가 - 다양한 구현체를 쉽게 바꿔 끼울 수 있다.
// 유연성 증가 - 객체 간 관계를 설정 파일이나 어노테이션을 통해 유동적으로 구성할 수 있다.
//
// Spring에서는 DI를 다양한 방식으로 제공하며 대표적인 주입 방법으로는
// @Autowired, @Inject를 통한 생성자 주입 방법과
// setter를 활용한 세터 주입 방법
// 필드 주입 방법이 있다.
// ex)
// ----------- 생성자 주입 ------------
// @Component
// public class MemberService {
//
//     private final MemberRepository memberRepository;
//
//     // 생성자 주입: 의존성 주입 방식 중 가장 권장되는 방식
//     @Autowired
//     public MemberService(MemberRepository memberRepository) {
//         this.memberRepository = memberRepository;
//     }
//
//     public void doSomething() {
//         memberRepository.save();
//     }
// }
//
// @Repository
// public class MemberRepository {
//     public void save() {
//         System.out.println("회원 저장 완료");
//     }
// }