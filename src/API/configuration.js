const { Octokit } = require("@octokit/core");
const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

export const callAPi = (config) => {
  const data = octokit.request(config.url, {
    q: `${config.search}+in:name`,
  });
  return data;
};
