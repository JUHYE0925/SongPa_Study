// 변수와 기본 타입
/* 
    파이썬의 기본 타입으로는 String, int, boolean, None이 있다.
    Java와 달리 변수 선언 시 타입을 지정하지 않으며 할당된 값의 형태에 따라 타입이 변한다.
    만약변수명이 여러 단어로 연결되어 있을 경우 snake_case로 작성한다.
    또한 문장 뒤에 세미콜론(;)을 찍지 않는다.(찍으면 컴파일 에러가 난다.)
    user_name : '홍길동'
*/

// 출력문
/* 
    f-string
    f-string은 문자열 앞에 f를 붙여 사용하는 파이썬의 기능으로, 변수나 표현식을 문자열에 쉽게 삽입할 수 있게 한다.
    변수를 사용하여 값을 출력할 경우 {} 중괄호 안에 변수명을 기입하면 된다.
    print(f"사용자 이름 : {user_name}")
*/

// 순서가 있는 가변 배열
/* 
    List []
    List는 Java의 ArrayList와 같은 개념으로 순서가 있는 가변 배열이다.
    값을 추가할 경우 append()를 상용하며 배열 맨 뒤에 추가된다.
    insert(인덱스, 요소)를 사용할 경우 똑같이 값이 배열에 추가되지만 첫 번째 라미터로 넘긴 인덱스 자리에 두 번째 파라미터가 값으로 들어간다.
    값을 제거하는 경우는 ArrayList와 같이 pop() 사용하여 제거 가능하다.
*/

// key-value 쌍의 가변 맵
/* 
    Dictionary {}
    Dictionary는 Java의 HashMap과 같은 개념으로 키-값의 형태로 이루어진 맵이다.
    값을 꺼낼 때는 키를 사용하여 꺼낼 수 있다.
    ex)
    user = {'name' : '홍길동', 'age' : 30}
    print(f"사용자 정보 : {user}, 이름 : {user['name']}")    
    또한 없는 키 값일 경우 새로 추가되며 이미 존재하는 키값의 경우에는 값이 수정된다.
    ex)
    user['job'] = '의적'
    user['age'] = 32  
    값을 조회할 때 없는 키 값으로 조회하면 에러가 나면서 프로그램이 종료될 수 있다.
    그래서 안전하게 조회하기 위해서 .get()을 사용하며 .get()을 사용하면 key가 없어도 에러 대신 기본값을 반환하게 설정할 수 있다.
    ex)
    email = user.get('email', '정보 없음')
    print(f"사용자 이메일 : {email}")
*/

// 복사
/* 
    얕은 복사
    Java와 같이 주소값만 복사하는 경우로 대입 연산자(=)를 사용하여 복사한다.
    그렇기 때문에 복사본에서 배열의 값을 수정하면 원본 배열에도 영향을 미친다.
    ex)
    prices = [10000, 20000]
    prices_shallow_copy = prices

    깊은 복사
    Java와 마찬가지로 원본 배열 그 자체를 복사하는 경우로 copy()를 사용하여 복사한다.
    배열 자체를 복사하여 새 객체를 생성하는 것이기 때문에 복사본에서 배열에 값을 변경하면 원본 배열에 영향을 미치지 않는다.
    ex)
    new_prices = prices.copy()
*/

// 문자열 핵심 기능
/* 
    slicing
    슬라이싱은 문자열 일부를 잘라내는 기능이다.
    [시작 인덱스:끝 인덱스] 형태로 시작 인덱스부터 끝 인덱스 전까지 잘라서 출력한다는 의미이다.
    만약 0번째 인덱스 부터 시작할 경우 출력 인덱스는 생략 가능하다.
    ex)
    print(f"슬라이싱 [0:5] : {txt[0:5]}")
    print(f"슬라이싱 [0:5] : {txt[:5]}")
    또한 마지막 인덱스까지 출력할 경우에도 마지막 인덱스 기입이 생략 가능하다.
    ex)
    print(f"슬라이싱 [6:11] : {txt[6:11]}") 
    print(f"슬라이싱 [6:11] : {txt[6:]}") 
    거꾸로 출력하고자 한다면 마지막에 -1기입하면 된다.
    ex)
    print(f"거꾸로 슬라이싱 : {txt[::-1]}")

    split()
    문자열을 특정 기준으로 나눠 새 리스트를 만들며 주로 CSV 데이터를 콤마 기준으로 나눌 때 사용한다.
    ex)
    csv_data = "홍길동, 20, 서울"
    user_list = csv_data.split(', ')    
    print(f"split 결과 : {user_list}, 이름 : {user_list[0]}")
*/

// 제어문
/* 
    조건문
    if-elif-else
    Java와 달리 소괄호나 중괄호를 사용하지 않으며 조건절 뒤에 콜론(:)을 붙여 조건절임을 표현한다.
    또한 조건에 대한 결과값을 작성할 때는 tab키 혹은 space * 4번을 하여 들여쓰기로 표시한다.
    ex)
    score = 85
    if score >= 90:
        grade = 'A'
    elif score >= 80:
        grade = 'B'
    else:
        grade = 'F'
    print(f"점수 : {score}, 등급 : {grade}")

    반복문
    for문을 사용하되 Java보다 더 간결한 형태로 작성한다.
    [for 요소 in 배열]의 형태로 반복되는 구절을 작성하고 마찬가지로 마지막에 콜론을 붙인다.
    또한 그 실행 결과를 들여쓰기로 구분한다.
    ex)
    foods = ['햄버거', '치킨', '피자']
    for food in foods:
        print(f"오늘의 메뉴 : {food}")
    딕셔너리로 구성된 배열일 경우 .items()를 사용하여 key와 value를 한 쌍으로 가져올 수 있으며 keys()는 key값만, values()는 value 값만 가져올 수 있다.
    ex)
    for key, value in user_info.items():
        rint(f"- {key} : {value}")
*/

// List Comprehension
/* 
    한 줄 for문
    [결과 표현식 for 아이템 in 리스트 if 조건]의 기본 구조를 가진다.
    ex)
    squares = [n**2 for n in range(1, 11)]  ->  1 부터 10까지의 숫자 하나하나를 제곱수로 계산하여 리스트 생성
    print(f"제곱수 리스트 : {squares}")
    또한 마지막에 조건절을 사용하여 필터링 결과도 출력할 수 있다.
    fruits = ['orange', 'apple', 'banana', 'kiwi','grape']
    long_fruits = [fruit.upper() for fruit in fruits if len(fruit) >= 5]
    print(f"긴 이름 과일(대문자) : {long_fruits}")
*/

// Dictionary Comprehension
/* 
    {키_표현식 : 값_표현식 for 아이템 in 리스트}로 List Comprehension과 달리 중괄호로 묶는다.
    ex)
    students_names = ['홍길동', '신사임당', '이순신']
    name_lengths = {name : len(name) for name in students_names}
    print(f"이름 길이 : {name_lengths}")
    마찬가지로 if를 사용하여 필터링 된 결과만 출력 가능하다.
*/

// lambda
/* 
    람다 함수는 이름 없는 한 줄짜리 익명 함수를 의미한다.
    lambda 파라미터 : 표현식 의 형태로 작성 가능하다.
    ex)
    a와 b를 파라미터로 전달받아 a+b를 반환하는 람다식 함수의 경우에는 아래와 같이 작성 가능하다.
    add = lambda a, b : a + b 
    sort() 함수 내에서 key값에 대한 정의로 사용 가능하다.
    ex)
    students.sort(key=lambda s : s['score'], reverse=True)
*/