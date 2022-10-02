const fetch = require('node-fetch');
const readline = require('readline-sync');
const chalk = require('chalk');
const fs = require('fs');


const cek = resi => new Promise((resolve,reject) => {
  fetch("https://jet.co.id/index/router/index.html", {
    method: 'POST',
    headers: {
      Accept: "application/json, text/javascript, */*; q=0.01",
      "Accept-Language": "en-US,en;q=0.5",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:76.0) Gecko/20100101 Firefox/76.0",
      "X-Requested-With": "XMLHttpRequest"
    }, 
    body: `method=app.findTrack&data%5Bbillcode%5D=${resi}&data%5Blang%5D=in&data%5Bsource%5D=3`
  })
  .then(async res => {
    const hasil = await res.json();
    const json = JSON.parse(JSON.parse(hasil).data);
    resolve(json);
  }).catch(e => reject(e));
});

const genUniqueId = length =>
    new Promise((resolve, reject) => {
        var text = "";
        var possible =
            "1234567890";

        for (var i = 0; i < length; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        resolve(text);
    });

;

// JP7161644709
 (async() => {
   for (let index = 0; index < 50000; index++) {
     try{
       const trackingNumber = await genUniqueId(10)

      let resinya = "";

      try { 
        resinya = await cek(`JP${trackingNumber}`);
      } catch(e){
        console.log(e);
        continue;
      }

       if (resinya.details.length !== 0) {
           if (resinya.details[resinya.details.length -1]["scantype"] === "TandaTerima") {

                  const tahun = new Date(resinya.details[resinya.details.length -1]["scantime"])
                  const thn = tahun.getFullYear()
                  if (thn == "2021") {
                      console.log(chalk.green(`JP${trackingNumber}|${resinya.details[resinya.details.length -1]["desc"]} => ${resinya.details[resinya.details.length -1]["city"]}|${resinya.details[resinya.details.length -1]["scantime"]}`))
                    await fs.appendFileSync('result.txt', `JP${trackingNumber}\n`);
                  } else{
                    console.log(chalk.red(`JP${trackingNumber}|jadul resi tahun ${thn}`));
                  }
           } 
       }else{
           console.log(chalk.red(`JP${trackingNumber}|Gak Ketemu`));
       }
     }catch(e){
      console.log(e);
       continue;
     }
   }
  

 })();
