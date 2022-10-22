import { api } from "../api";
import { infrastructure } from "../infrastructure";
import { domain } from "../domain";

import config from "../config/alerts.json";

const setAlertStatus = async () => {
    if (domain.vrchat.isRunning) {
        const status = await infrastructure.alerts.getStatus();

        domain.alert.setStatus(status);
        api.alert.sync(infrastructure.osc.client, domain.alert.status);

        console.log(`Alert status: ${domain.alert.status} [${new Date()}]`);
    }
};

export function handleAlertsStatus() {
    setInterval(setAlertStatus, config.refreshRate);
}
