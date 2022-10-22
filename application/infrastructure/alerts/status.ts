import config from "../../config/alerts.json";
import puppeteer from "puppeteer";

export const getStatus = async () => {
    try {
        const browser = await puppeteer.launch({
            headless: true,
            args: ["--no-sandbox", "--disable-setuid-sandbox"],
            defaultViewport: { width: 800, height: 600 },
        });

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
