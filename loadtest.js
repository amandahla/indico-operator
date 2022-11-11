import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  duration: '10s',
  vus: 5,
  thresholds: {
    http_req_failed: ['rate<0.01'], // http errors should be less than 1%
	    http_req_duration: ['p(95)<10000'], // 95 percent of response times must be below 10s
  },
};

const params = {
    headers: {
      'Host': 'indico.local',
    },
  };

export default function () {
  const res = http.get(`http://${__ENV.UNIT_ADDRESS}:8080/`,params);
  sleep(1);
}
