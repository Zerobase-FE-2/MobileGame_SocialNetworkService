import axios from 'axios';

const client = axios.create();

client.defaults.baseURL =
  'https://mobilegamereview-36ec7-default-rtdb.firebaseio.com/fireblog';

// //헤더 설정
// client.defaults.headers.common['Authorizatoin'] = 'Bearer a1b2c3d4';

// //인터셉터 설정
// axios.intercepter.response.use(
//   (response) => {
//     //요청 성공시 특정 작업 수행
//     return response;
//   },
//   (error) => {
//     //요청 실패 시 특정 작업 수행
//     return Promise.reject(error);
//   },
// );

export default client;
