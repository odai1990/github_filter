const { Octokit } = require("@octokit/core");
const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

const callAPi = (config) => {
  const data = octokit.request(config.url, {
    q: `${config.search}+in:name`,
  });
  return data;
};

export default callAPi;
