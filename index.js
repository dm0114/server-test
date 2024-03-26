/**
 * 왜 nest 아키텍쳐가 좋은가?
 */

// import http from 'http'
const http = require("http");

/**
 * localhost -> 127.0.0.1 -> loop back -> 서버를 실행한 컴퓨터
 *
 * 127.0.0.1은 컴퓨터 네트워크에서 Loopback 주소로 알려진 특수한 IP 주소입니다.
 * 이 IP 주소는 로컬 호스트를 나타내며, 자신의 컴퓨터를 가리킵니다.
 * 즉, 컴퓨터 자체에 연결된 네트워크 인터페이스를 가리키는 것입니다.
 * 이것은 일종의 루프백 메커니즘으로 사용되어, 네트워크 연결 없이도 자신의 시스템에서 서비스 및 프로세스에 접근할 수 있게 합니다.
 * 주로 개발 및 테스트 목적으로 사용되지만, 일부 서비스 및 응용 프로그램도 자체적으로 127.0.0.1을 사용하여 로컬 시스템에 접근합니다.
 */
const host = "localhost";
const port = 3000;

// req를 기반으로, res를 만들어서 응답을 보내는 서버
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World");
});

// 콜백 - 서버가 실행되면 실행되는 함수
server.listen(port, host, () => {
  console.log(`Server is running at http://${host}:${port}`);
});
