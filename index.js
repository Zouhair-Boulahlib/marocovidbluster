const puppeteer = require('puppeteer');
const URL = 'https://www.marocovid.com/';


async function  mssemena(){
        const browser = await puppeteer.launch({headless: true});
        const page = await browser.newPage();
        await page.goto(URL);

        const res = await page.waitForResponse('https://app.siendogroup.com/api');
        const data = await res.json();
        await browser.close();

       return data;

}
