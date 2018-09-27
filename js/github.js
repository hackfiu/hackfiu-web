//fetches github info
const githubUrl = "https://api.github.com/orgs";
const getHeaders = { "Content-Type": "application/json" };
const getOptions = { method: "GET", headers: getHeaders };
const githubOrganization = "hackFIU";

const asyncFetch = url =>
  new Promise((resolve, reject) => {
    fetch(url, getOptions)
      .then(data => resolve(data.json()))
      .catch(err => reject(err.message));
  });

const getGitHubReposUrl = async organization => {
  const organizationUrl = `${githubUrl}/${organization}`;
  const { repos_url } = await asyncFetch(organizationUrl);

  return repos_url;
};

const getGitHubRepos = async organization => {
  const repos_url = await getGitHubReposUrl(organization);
  const payload = await fetch(repos_url, getOptions);
  const repos = await payload.json();

  return repos;
};

const getGitHubMembers = async () => {
  const memberUrl = `${githubUrl}/${githubOrganization}/members`;
  const payload = await fetch(memberUrl, getOptions);
  const members = await payload.json();

  return members;
};

/**
 * Documentation on how to use each method.
 *
 * Note that each method returns a promise
 *
 * Cleanest client side JS in South Florida
 */
// getGitHubReposUrl(githubOrganization).then(res => console.log(res));
// getGitHubRepos(githubOrganization).then(res => console.log(res));
// getGitHubMembers().then(res => console.log(res));
