const express = require('express');
const app = express();
const port = 3000;

// 정적 파일을 제공하기 위한 미들웨어 설정
app.use(express.static('public'));

// GET 요청 처리
app.get('/get-request', (req, res) => {
  console.log('GET 요청을 처리했습니다');
  res.send('GET 요청 처리를 완료했습니다');
});

// POST 요청 처리
app.post('/post-request', (req, res) => {
  console.log('POST 요청을 처리했습니다');
  res.send('POST 요청 처리를 완료했습니다');
});

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port}에서 실행 중입니다.`);
});
