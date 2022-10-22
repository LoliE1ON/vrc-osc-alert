"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleAlertsStatus = void 0;
const api_1 = require("../api");
const infrastructure_1 = require("../infrastructure");
const domain_1 = require("../domain");
const alerts_json_1 = __importDefault(require("../config/alerts.json"));
const setAlertStatus = async () => {
    if (domain_1.domain.vrchat.isRunning) {
        const status = await infrastructure_1.infrastructure.alerts.getStatus();
        domain_1.domain.alert.setStatus(status);
        api_1.api.alert.sync(infrastructure_1.infrastructure.osc.client, domain_1.domain.alert.status);
        console.log(`Alert status: ${domain_1.domain.alert.status} [${new Date()}]`);
    }
};
function handleAlertsStatus() {
    setInterval(setAlertStatus, alerts_json_1.default.refreshRate);
}
exports.handleAlertsStatus = handleAlertsStatus;
