const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Welcome to the home page</h1>");
});

app.get("/post", (req, res) => {
  res.send("<h1>Welcome to the post page</h1>");
});

// else 느낌
app.use((req, res) => {
  res.status(404).send("<h1>404 Page Not Found</h1>");
});

app.listen(8080, () => {
  console.log("Server is running at http://localhost:8080");
});

/**
 * http api 서버를 express api로 가독성 있게 개선했다.
 * express api도 부족해서 나온게 nest
 *
 * nest는,
 * 위의 예제 같은 요청에 대한 코드를 어떻게 파일로 관리하고
 * 어떤 기준을 가지고 나누고 조합해나가는 것들에 대한 고민의 해답이며,
 * express를 기반으로 한다.
 */
