import childProcess from "child_process";
import config from "./config/deamon.json";
import { domain } from "./domain";
import { application } from "./application";

application();

const observer = () => {
    childProcess.exec("tasklist", (err, stdout) => {
        stdout.includes(config.processName) ? setIsRunning() : setIsNotRunning();
    });
};

const setIsRunning = () => {
    if (!domain.vrchat.isRunning) {
        domain.vrchat.setIsRunning(true);
        console.log("VRChat is running");
    }
};

const setIsNotRunning = () => {
    if (domain.vrchat.isRunning) {
        domain.vrchat.setIsRunning(false);
        console.log("VRChat is closed");
    }
};

setInterval(observer, config.refreshRate);

console.log("Application is starting!");
