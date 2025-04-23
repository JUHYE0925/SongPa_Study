/* BOM */

// BOM(Browser Object Model)
// 브라우저 객체 모델은 문서 이외의 것을 제어하기 위해 브라우저(호스트 환경)가 제공하는 추가 객체를 의미한다.

// 01. location
// location 객체는 현재 URL을 읽을 수 있게 해주고 새로운 URL로 변경(redirect)할 수 있게 해준다.
// location.assign(URL) : 인자로 전달한 URL로 이동
location.assign("https://www.google.com");
// location = (URL) : 괄호 안 URL로 새 페이지를 열어 이동하여 뒤로 가기가 가능하다.
location = ("https://www.google.com");
// location.href = (URL) : 괄호 안 URL로 새 페이지를 열어 이동하여 뒤로 가기가 가능하다.
location.href = ("https://www.google.com");
// location.replace(URL) : 괄호 안 URL로 페이지를 대체하듯이 이동하여 뒤로 가기가 불가능하다.
location.replace("https://www.google.com");
// location.reload(); : 서버로부터 현재 페이지를 리로드한다.
location.reload();
// location = location; : 서버로부터 현재 페이지를 리로드한다.
location = location;
// location.href = location.href; : 서버로부터 현재 페이지를 리로드한다.
location.href = location.href;

// 02. navigator
// navigator 객체는 브라우저와 운영체제에 대한 정보를 제공한다.
// 객체엔 다양한 프로퍼티가 있는데 가장 잘 알려진 프로퍼티는 현재 사용 중인 브라우저 정보를 알려주는 navigator.userAgent와
// 브라우저가 실행 중인 운영체제(Window, Linux, Mac 등) 정보를 알려주는 navigator.platform이 있다.

// 03. screen
// screen 객체는 웹 브라우저 화면이 아닌 운영체제 화면의 속성을 가지는 객체이다.
// screen.width, screen.height : 화면 너비와 높이를 나타낸다.
// screen.availWidth, screen.availHeight : 상태 표시줄을 제외한 실제 화면에서 사용 가능한 너비와 높이를 나타낸다.
// screen.colorDepth : 사용 가능한 색상 수를 나타낸다.
// screen.pixelDepth : 한 픽셀 당 비트 수를 의미한다.

// 04. history
// history 객체는 브라우저의 세션 기록, 즉 현재 페이지를 불러온 탭 또는 프레임 방문 기록을 조작할 수 있는 방법을 제공한다.
// length는 현재 페이지를 포함해, 세션 기록의 길이를 나타내는 정수 값이다.
// back() 메소드 :  뒤로 가기
hitory.back();
// forward() 메소드 :  앞으로 가기
hitory.forward();
// go() 메소드 :  인수로 전달한 값만큼 이동하는 메소드이다. 양수를 전달하면면 forward()처럼 작동하고 음수를 전달하면 back()처럼 작동한다.
hitory.go(1);
hitory.go(-1);