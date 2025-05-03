/* JVM */
// JVM : Java Virtual Machine : 자바를 실행하기 위한 가상 기계(컴컴퓨터)
// JVM은 자바가 OS(운영체제)에 종속적이지 않고 CPU가 Java를 인식 및 실행할 수 있게 해준다.
// 그렇기 때문에 자바는 JVM에 의해 운영체제에 독립적이라는 장점을 가질 수 있다.

// 자바 소스코드, 즉 원시코드(.java)는 CPU가 인식을 못하기에 CPU가 인식할 수 있는 기계어로 컴파일해줘야 한다.
// 하지만 자바는 JVM을 통해 운영체제에 도달하기 때문에 운영체제가 인식할 수 있는 기계어로 바로 컴파일하는 것이 아니라
// 우선 JVM이 읽을 수 있는 Java bytecode(.class)로 변환된다.
// 이렇게 변환된 bytecode는 기계어가 아니기 때문에 운영체제가 읽을 수 있도록 JVM을 통해 기계어(Binary Code)로 변환한다.
// 이렇게 자바 언어로 작성한 소스파일은 바로 운영체제로 가는 것이 아닌, JVM을 거쳐서 운영체제와 상호작용하는 것이기 때문에
// 운영체제로부터 독립적일 수 있다.

// ++) bytecode란?
// 바이트 코드는 가상 컴퓨터(VM)에서 돌아가는 실행 프로그램을 위한 이진 표현법으로
// 자바 바이트 코드는 JVM이 이해할 수 있는 언어로 변환된 자바 소스코드를 의미한다.
// 자바 컴파일러에 의해 변환된 코드의 명령어 크기가 1byte라서 자바 바이트 코드라고 불리고 있다.
// 바이트 코드는 다시 실시간 번역기 또는 JIT 컴파일러에 의해 바이너리 코드로 변환된다.
// ++) binarycode란?
// 바이너리 코드 또는 이진 코드라고 불리며
// 컴퓨터가 인식할 수 있는 0과 1로 구성된 이진코드를 의미한다.
// ++) 기계어란?
// 0과 1로 이루어진 바이너리 코드이다.
// 기계어가 이진코드로 이루어졌을 뿐 모든 이진 코드가 기계어인 것은 아니다.
// 기계어는 특정한 언어가 아니라 CPU가 이해하는 명령어의 집합이며, CPU 제조사마다 기계어가 다를 수 있다.
// 즉, CPU가 이해할 수 있는 언어는 바이너리 코드, 가상 머신이 이해할 수 있는 코드는 바이트코드이다.

// JVM 동작 방식
// 1. 자바 프로그램이 실행되면 JVM은 OS로부터 메모리를 할당받는다.
// 2. 자바 컴파일러(javac)가 자바 소스코드(.java)를 JVM이 읽을 수 있는 java bytecode(.class)로 컴파일한다.
// 3. Class Loader는 동적 로딩을 통해 필요한 클래스들을 로딩 및 링크하여 Runtime Data Area(실질적인 메모리를 할당 받아 관리하는 영역)에 올린다.
// 4. Runtime Data Area에 로딩 된 bytecode는 Execution Engine을 통해 해석된다.
// 5. 이 과정에서 Execution Engine에 의해 Garbage Collector의 작동과 Thread 동기화가 이루어진다.

// JVM 구성
// - 클래스 로더(Class Loader)
// - 실행 엔진(Execution Engine)
//   ㄴ 인터프리터(Interpreter)
//   ㄴ JIT 컴파일러(Just-in-Time)
//   ㄴ 가비지 콜렉터(Garbage Collector)
// - 런타임 데이터 영역(Runtime Data Area)
//   ㄴ 메소드 영역(Method Area)
//   ㄴ 힙 영역(Heap Area)
//   ㄴ 스택 영역(Stack Area)
//   ㄴ PC Register
//   ㄴ 네이티브 메소드(Native Method)
// - JNI - 네이티브 메소드 인터페이드(Native Method Interface)
// - 네이티브 메소드 라이브러리(Native Method Library)

// 클래스 로더(Class Loader)
// 클래스 로더는 JVM 내로 클래스 파일(.class)을 동적으로 로드하고, 링크를 통해 배치하는 작업을 수행하는 모듈이다.
// 즉, 로드된 바이트 코드(.class)들을 엮어서 JVM의 메모리 영역인 런타임 데이터 영역에 배치한다.
// 클래스를 메모리에 올리는 로딩 기능은 한 번에 메모리에 올라지 않고, 어플리케이션에서 필요한 경우 동적으로 메모리에 적재한다.

// https://doozi0316.tistory.com/entry/1%EC%A3%BC%EC%B0%A8-JVM%EC%9D%80-%EB%AC%B4%EC%97%87%EC%9D%B4%EB%A9%B0-%EC%9E%90%EB%B0%94-%EC%BD%94%EB%93%9C%EB%8A%94-%EC%96%B4%EB%96%BB%EA%B2%8C-%EC%8B%A4%ED%96%89%ED%95%98%EB%8A%94-%EA%B2%83%EC%9D%B8%EA%B0%80
// https://velog.io/@jungmyeong96/JAVA%EA%B8%B0%EC%B4%88-JVM%EC%9D%B4%EB%9E%80
// https://inpa.tistory.com/entry/JAVA-%E2%98%95-JVM-%EB%82%B4%EB%B6%80-%EA%B5%AC%EC%A1%B0-%EB%A9%94%EB%AA%A8%EB%A6%AC-%EC%98%81%EC%97%AD-%EC%8B%AC%ED%99%94%ED%8E%B8