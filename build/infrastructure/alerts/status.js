"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStatus = void 0;
const alerts_json_1 = __importDefault(require("../../config/alerts.json"));
const puppeteer_1 = __importDefault(require("puppeteer"));
const getStatus = async () => {
    try {
        const browser = await puppeteer_1.default.launch({
            headless: true,
            args: ["--no-sandbox", "--disable-setuid-sandbox"],
            defaultViewport: { width: 800, height: 600 },
        });
        const page = await browser.newPage();
        await page.goto(alerts_json_1.default.url, {
            waitUntil: "networkidle0",
        });
        await page.waitForSelector(alerts_json_1.default.selector);
        const alert = await page.$eval(alerts_json_1.default.selector, element => {
            return element.getAttribute("data-alert-type");
        });
        return Boolean(alert);
    }
    catch (throwable) {
        console.error(throwable);
        return false;
    }
};
exports.getStatus = getStatus;
