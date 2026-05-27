export default {
  async fetch(request, context, env) {
    const TEST_KEY_PLAIN = env.TEST_KEY_PLAIN;
    const TEST_KEY_SECRET = env.TEST_KEY_SECRET;

    return new Response(`Get TEST_KEY_PLAIN_main: ${TEST_KEY_PLAIN} and TEST_KEY_SECRET_main: ${TEST_KEY_SECRET} successfully!`);
  },
};
