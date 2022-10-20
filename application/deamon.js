import childProcess from "child_process";
import config from "./config/deamon.json" assert { type: "json" };

let process = null;

const observer = () => {
    childProcess.exec("tasklist", function (err, stdout) {
        if (stdout.includes(config.processName)) {
            !process && forkProcess();
        } else {
            process && killProcess();
        }
    });
};

const forkProcess = () => {
    process = childProcess.fork(config.scriptPath);
    console.log("process is running");
};

const killProcess = () => {
    process.kill("SIGINT");
    process = null;

    console.log("process is killed");
};

setInterval(observer, config.refreshRate);
