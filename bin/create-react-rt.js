#!/usr/bin/env node
const { exec } = require("child_process");

if (process.argv.length !== 3) {
  console.error("Usage: react-cli-rt <app-name>");
  process.exit(1);
}

const appName = process.argv[2];
const githubRepoURL = "https://github.com/shenmemoon1/create-react-rt.git"; // 修改为你的GitHub仓库URL

function createReactApp() {
  try {
    // 1. 使用Git克隆GitHub仓库
    exec(`git clone ${githubRepoURL} ${appName}`, (error, stdout, stderr) => {
      if (error) {
        console.error("An error occurred:", error.message);
        return;
      }

      // 2. 进入应用目录
      process.chdir(appName);

      // 3. 安装项目依赖项
      exec("npm install", (error, stdout, stderr) => {
        if (error) {
          console.error("An error occurred:", error.message);
          return;
        }

        console.log(`Your React app '${appName}' has been created.`);
      });
    });
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}

createReactApp();
