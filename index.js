const puppeteer = require('puppeteer');
const URL = 'https://www.marocovid.com/';
const URL_API = 'https://app.siendogroup.com/api'


async function getData(url) {

        const response = await fetch(url, {
          method: 'POST',
          body: JSON.stringify({"type":"get_chart_data"}) 
        });
        return await response.json();
      }


async function  getCovidData(headless = true){

        headless = !!headless;
        const browser = await puppeteer.launch({headless});
        const page = await browser.newPage();

        await page.goto(URL);
        const data = await page.evaluate(getData, URL_API)
        await browser.close();

       return data;

}
exports = module.exports;
module.exports.getCovidData = getCovidData;
