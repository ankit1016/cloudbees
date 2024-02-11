import { Octokit } from "@octokit/core";

export const octokit = new Octokit({
    auth: process.env.ACCESS_TOKEN
  })
  console.log(process.env.ACCESS_TOKEN)