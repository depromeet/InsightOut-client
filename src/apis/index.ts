import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://insight-out-eb-instance-env.eba-wiaanpdd.ap-northeast-2.elasticbeanstalk.com',
  headers: { 'Content-Type': 'application/json' },
});

export default instance;
