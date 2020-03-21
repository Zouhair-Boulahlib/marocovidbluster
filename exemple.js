covid = require('./index').getCovidData;


(async function(){
  console.log(await covid(false))
})()
