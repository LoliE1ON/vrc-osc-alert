import childProcess from "child_process";
import { hideConsole } from "node-hide-console-window";
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

domain.alert.setRegion(`${process.argv[2] || ""} ${process.argv[3] || ""}`);

console.log("Application is starting!");

console.log(`Selected region: ${domain.alert.region}`);

setTimeout(() => {
    hideConsole();
}, 2000);
