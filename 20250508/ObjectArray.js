/* 오버라이딩 */
// 오버라이딩은 상위 클래스로부터 상속받은 메소드의 내용을 변경(재정의)하여 사용하는 것이다.
// 즉 부모 클래스가 가지는 메소드 선언부를 그대로 사용하면서 자식 클래스가 정의한 메소드대로 동작하도록 
// 구현 몸체 부분을 새롭게 다시 작성하는 것이다.
// 메소드 재정의를 하면 메소드를 호출할 때 재정의한 메소드가 우선적으로 동작하게 된다.

/* 오버라이딩 성립요건 */
// 상위 클래스의 메소드의 이름이 동일해야한다.
// 상위 클래스의 메소드의 리턴 타입도 동일해야한다.
// 상위 클래스의 메소드의 매개변수의 타입, 순서, 갯수가 동일해야한다.
// 접근제한자는 부모 클래스의 접근제한자보다 같거다 더 넓은 범위여야한다.
// private이나 final로 선언한 메소드는 오버라이딩이 불가능하다.
// 예외처리는 부모 클래스의 메소드의 예외처리와 같거나 더 구체적이어야한다.

/* 오버로딩과 오버라이딩 차이 */
// 오버로딩은 같은 클래스에서의 메소드를 정의하는 것으로 메소드의 이름은 동일하나 
// 매개변수의 타입, 순서, 갯수를 다르게 지정함으로써 동일한 메소드명으로 여러개의 메소드를 생성하는 것이다.
// 그렇기에 오버로딩은 리턴타입, 접근제한자, 예외처리는 상관없다.
// 반면 오버라이딩은 상위 클래스로부터 상속받은 메소드를 하위 클래스에서 재정의하는 것을 말한다.
// 오버라이딩의 경우 메소드명과 매개변수의 타입, 순서, 갯수, 리턴 타입 모두 동일해야한다.
// 접근제한자의 경우에는 상위 클래스와 같거나 더 넓은 범위어야하며
// 예외처리는 반대로 상위 클래스의 예외처리와 같거다 더 구체적이어한다.

/* 상속 */
// 상위 클래스가 가지는 멤버(필드, 메소드)를 하위 클래스가 물려 받아 자신의 멤버인 것 처럼 사용하는 것을 말한다.
// 더 나아가서 자바에서의 상속은 상위 클래스의 확장 개념으로 상위 클래스로부터 물려받은 것 외에 하위 클래스 고유의 멤버 또한 추가 작성 가능하다.
// 특히 오버라이딩(메소드 재정의)을 통해 상위 클래스가 가진 메소드를 하위 클래스에 맞게 재정의하는 것도 가능하다.

/* 상속의 장단점 */
// 상속에는 다양한 장단점이 있다. 우선 장점으로는
// 새로운 클래스 작성할 때 기존에 작성한 클래스를 재사용할 수 있다.
// 이렇게 재사용할 경우 새롭게 클래스를 작성하는 것보다 속도가 빠르므로 생산성이 증가한다.
// 또한 공통적으로 사용하는 코드의 경우 상위 클래스만 수정해도 하위 클래스의 코드 또한 전체적으로 적용되며 유지보수가 증가한다.
// 클래스간의 계층 관계가 형성되며 다형성의 문법적인 토대가 된다.
// 단점으로는
// 상위 클래스의 기능을 추가/변경할 때 하위 클래스가 정상적으로 동작하는지 예측하기 어렵다.
// 또한 상속 구조가 복잡해질 수록 그 영향에 대한 예측이 어려우며 이로 인해 유지보수성에 악영향을 준다.
// 뿐만 아니라 상위 클래스의 변경이 일어날 경우 하위 클래스에도 영향이 가기에 유지보수에 영향을 미친다.
// 상위 클래스에서 의미있던 기능이 하위 클래스에서는 무의미할 수 있으며 이로 인해 하위 클래스에 불필요한 기능이 추가될 수 있다.

/* 객체 지향 설계 관점에서 바라보는 상속 */
// 모든 객체는 자신이 수신한 메세지에 대해 응답을 해야하는 책임을 가지며 그 책임이 많아서는 안된다.
// 적절한 책임을 가진 객체들이 서로 메세지에 대해 수신과 응답을 함으로써 프로그램이 동작하는 것이 객체 지향 프로그램이다.
// 적절한 책임을 수행하는 객체 또한 그 객체만 수행할 수 있는 기능이라기 보다 역할의 관점에서 바라봐야 한다. 
// 여기서 말하는 역할이란 동일한 동작을 수행하는 것을 말하며 대체 가능성을 의미한다.
// 상위 클래스를 추상화하는 경우에는 역할의 관점에서 바라봐야 한다.
// 그래야 하위 클래스로 생성한 객체들이 서로 역할을 수행해가며 유연한 코드를 작성할 수 있게 된다.
// 동일한 역할을 가지는 모든 객체는 동일한 메세지를 수신하기는 하지만, 객체별로 그 메세지에 대한 응답 방식은 서로 다를 수 있다.(다형성) 

/* super 와 super()의 차이 */
// 하위 클래스를 이용해서 객체 생성할 때 상위 클래스를 호출하여 상위 클래스의 인스턴스도 함께 생성하게 되는데
// 이 때 생성한 상위의 인스턴스 주소를 담고 있는 레러펀스 변수가 super이다.
// super는 하위 클래스 내의 모든 생성자와 메소드 내에서 선언하지 않고도 사용할 수 있다.
// super()의 경우는 상위 클래스의 생성자를 호출하는 구문으로 인자와 매개변수 타입, 순서, 갯수가 일치하는 상위 클래스의 생성자를 호출한다.
// this()의 경우에는 해당 클래스 내의 다른 생성자를 호출하는 구문이지만,
// super()는 상위 클래스가 갖는 생성자 중 private을 제외한 모든 생성자를 호출할 수 있도록 한 구문이라는 점에서 차이가 있다.
// 또한 모든 생성자에는 super()가 묵시적으로 존재하기에 명시적으로 작성하지 않을 경우에는 컴파일러가 자동으로 추가해준다.