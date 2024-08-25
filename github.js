const { Octokit } = require('@octokit/rest');

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN, // Store your GitHub token securely in an environment variable
});

async function fetchRepositories() {
  try {
    const response = await octokit.repos.listForUser({
      username: 'your-github-username', // Replace with your GitHub username
      sort: 'updated', // Sort repositories by the most recently updated
    });

    return response.data; // Return the list of repositories
  } catch (error) {
    console.error('Error fetching repositories:', error);
    return [];
  }
}

module.exports = { fetchRepositories };
