/* eslint-disable no-console */
const exchangeCodeForToken = async (code) => {
  console.log(`MOCK INVOKED: exchangeCodeForToken(${code})`);
  return `MOCK_TOKEN_FOR_CODE_${code}`;
};

const getGithubProfile = async (token) => {
  console.log(`MOCK INVOKED: getGithubProfile(${token})`);
  return {
    login: 'test_user',
    avatar_url: 'https://www.placecage.come/gif/300/300',
    email: 'abc@123.com'
  };
};

module.exports = { exchangeCodeForToken, getGithubProfile };
