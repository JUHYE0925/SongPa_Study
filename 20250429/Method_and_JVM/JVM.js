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

// JVM 동작 방식
// 1. 자바 프로그램이 실행되면 JVM은 OS로부터 메모리를 할당받는다.
// 2. 자바 컴파일러(javac)가 자바 소스코드(.java)를 JVM이 읽을 수 있는 java bytecode(.class)로 컴파일한다.
// 3. Class Loader는 동적 로딩을 통해 필요한 클래스들을 로딩 및 링크하여 Runtime Data Area(실질적인 메모리를 할당 받아 관리하는 영역)에 올린다.
// 4. Runtime Data Area에 로딩 된 bytecode는 Execution Engine을 통해 해석된다.
// 5. 이 과정에서 Execution Engine에 의해 Garbage Collector의 작동과 Thread 동기화가 이루어진다.
