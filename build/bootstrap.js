"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = __importDefault(require("child_process"));
const deamon_json_1 = __importDefault(require("./config/deamon.json"));
const domain_1 = require("./domain");
const application_1 = require("./application");
(0, application_1.application)();
const observer = () => {
    child_process_1.default.exec("tasklist", (err, stdout) => {
        stdout.includes(deamon_json_1.default.processName) ? setIsRunning() : setIsNotRunning();
    });
};
const setIsRunning = () => {
    if (!domain_1.domain.vrchat.isRunning) {
        domain_1.domain.vrchat.setIsRunning(true);
        console.log("VRChat is running");
    }
};
const setIsNotRunning = () => {
    if (domain_1.domain.vrchat.isRunning) {
        domain_1.domain.vrchat.setIsRunning(false);
        console.log("VRChat is closed");
    }
};
setInterval(observer, deamon_json_1.default.refreshRate);
console.log("Application is starting!");
