import { browser } from "./browser.js";
import config from "../../config/alerts.json" assert { type: "json" };

export const getStatus = async () => {
    try {
        const page = await browser.newPage();

        await page.goto(config.url, {
            waitUntil: "networkidle0",
        });

        await page.waitForSelector(config.selector);

        const alert = await page.$eval(config.selector, element => {
            return element.getAttribute("data-alert-type");
        });

        return Boolean(alert);
    } catch (throwable) {
        console.error(throwable);

        return false;
    }
};
