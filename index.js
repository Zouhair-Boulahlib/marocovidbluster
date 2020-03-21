const puppeteer = require('puppeteer');
const URL = 'https://www.marocovid.com/';
const URL_API = 'https://app.siendogroup.com/api'



async function  getCovidData(headless = false){
        headless = !!headless;
        const browser = await puppeteer.launch({headless});
        const page = await browser.newPage();
        await page.goto(URL);

        const res = await page.waitForResponse(URL_API);
        const data = await res.json();
        await browser.close();
       return data;

}
exports = module.exports;
module.exports.getCovidData = getCovidData;
