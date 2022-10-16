import puppeteer from "puppeteer";

export const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
    defaultViewport: { width: 800, height: 600 },
});
