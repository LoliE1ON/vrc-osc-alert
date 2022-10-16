import { api } from "../api/index.js";
import { infrastructure } from "../infrastructure/index.js";
import { domain } from "../domain/index.js";

import config from "../config/alerts.json" assert { type: "json" };

setInterval(async () => {
    const status = await infrastructure.alerts.getStatus();

    domain.alert.setStatus(status);
    api.alert.send(infrastructure.osc.client, domain.alert.status);

    console.log(`Alert status ${status} [${new Date()}]`);
}, config.refreshRate);
