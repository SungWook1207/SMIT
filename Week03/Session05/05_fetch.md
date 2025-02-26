# Call API

## What is API?
- Application Programming Interface
- 한 소프트웨어가 다른 소프트웨어와 소통할 수 있도록 도와주는 규칙과 도구들의 모음
- API는 프로그램 간 데이터를 주고받을 때 사용됨.
- 클라이언트(사용자)와 서버(데이터 제공자) 간의 통신을 담당함.
- URL을 통해 요청(Request)을 보내고, 서버는 응답(Response) 데이터를 반환함.
![diagram-what-is-an-api.svg](diagram-what-is-an-api.svg)

### Different kinds of APIs
- **REST API**: 가장 일반적인 API 형태, HTTP 요청(GET, POST, PUT, DELETE) 사용
- **SOAP API**:XML 기반의 API로, 은행/기업에서 주로 사용됨
- **GraphQL API**: 원하는 데이터만 요청할 수 있는 API
- **WebSocket API**: 실시간 데이터 전송(API 요청 없이 서버에서 데이터 Push 가능) Stripe, Zoom, Email Services, etc.

## fetch()
- 비동기적으로 네트워크 요청을 보내고, 응답을 기다리는 함수.
- 호출하면 즉시 실행되고, 비동기적으로 데이터가 도착하면 Promise가 해결(resolved)되거나 거부(rejected)됨
- 네트워크 요청이 완료될 때까지 기다리지 않고 다음 코드가 실행됨.
- .then() 체인을 이용하여 응답을 처리함.
- .catch()를 사용하여 오류를 처리할 수 있음.
- Promise를 반환 
  - 즉시 실행되지만, 네트워크 요청이 끝나기 전까지 Promise 상태는 pending(대기) 상태임. 
  - 네트워크 요청이 성공하면 fulfilled(이행됨) 상태가 되고, 데이터를 반환함.

## axios
- axios는 Promise로 직접 data 반환. fetch의 response를 .json()으로 풀어주는 번거로움이 없다.
- timeout 옵션 가능
- HTTP 에러를 효과적으로 관리할 수 있다. fetch 는 400, 500 에러가 catch로 잡히지 않음
- get, post 등 REST api 형태를 지정해서 API call을 하기 때문에 가독성이 좋다.
- 다만 `npm install axios`를 통해서 module을 설치해야 한다.

Assignment template link
https://codesandbox.io/p/sandbox/pfxv59