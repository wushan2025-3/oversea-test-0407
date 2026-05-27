import { env } from "alibaba:workers";

const TEST_KEY_PLAIN = env.TEST_KEY_PLAIN;
const TEST_KEY_SECRET = env.TEST_KEY_SECRET;

export default {
  async fetch(request, context) {
    return new Response(`Get TEST_KEY_PLAIN_ly_A: ${TEST_KEY_PLAIN} and TEST_KEY_SECRET_ly_A: ${TEST_KEY_SECRET} successfully!`);
  },
};
