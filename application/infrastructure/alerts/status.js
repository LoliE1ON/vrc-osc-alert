import { browser } from "./browser.js";
import config from "../../config/alerts.json" assert { type: "json" };

export const getStatus = async () => {
    try {
        const page = await browser.newPage();

        await page.goto(config.url);
        await page.waitForSelector(config.selector);

        const alert = await page.$eval(config.selector, element => {
            return element.getAttribute("data-alert-type");
        });

        await browser.close();

        return Boolean(alert);
    } catch (e) {
        return false;
    }
};
