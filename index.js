const core = require("@actions/core");
const github = require("@actions/github");

async function run() {
  try {
    const percentage = core.getInput("percentage");
    const actor = core.getInput("actor");
    var message;
    if (
      percentage > Math.floor(Math.random() * 100) &&
      (context === github.context.actor) === actor
    ) {
      message =
        "![batman](https://media.giphy.com/media/jIzXYqaQ0nLkA/giphy.gif)";
      console.log("Gottem!!");
    } else {
      console.log("Fine you win this time.");
      message = core.getInput("message");
      if (message == "") {
        return;
      }
    }

    const github_token = core.getInput("GITHUB_TOKEN");

    const context = github.context;
    if (context.payload.pull_request == null) {
      core.setFailed("No pull_request found.");
      return;
    }

    const pull_request_number = context.payload.pull_request.number;

    const octokit = new github.getOctokit(github_token);
    const new_comment = octokit.issues.createComment({
      ...context.repo,
      issue_number: pull_request_number,
      body: message,
    });
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
