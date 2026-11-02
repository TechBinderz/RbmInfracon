import https from 'https';

const HOST = 'www.rbminfracon.com';
const KEY = 'd5a9cf7362844f2b963bf7246ba6df21';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const URLS = [
  `https://${HOST}/`,
  `https://${HOST}/aboutus`,
  `https://${HOST}/aboutus/boardofdirector`,
  `https://${HOST}/aboutus/current-projects`,
  `https://${HOST}/aboutus/executed-projects`,
  `https://${HOST}/aboutus/awards`,
  `https://${HOST}/services`,
  `https://${HOST}/services/engineeringServices`,
  `https://${HOST}/services/procurementServices`,
  `https://${HOST}/services/logisticsServices`,
  `https://${HOST}/services/turnaroundServices`,
  `https://${HOST}/services/operationMaintenanceServices`,
  `https://${HOST}/services/workshopServices`,
  `https://${HOST}/services/renovationServices`,
  `https://${HOST}/services/constructionServices`,
  `https://${HOST}/services/pipingServices`,
  `https://${HOST}/services/plateWork`,
  `https://${HOST}/services/heaterOperation`,
  `https://${HOST}/services/drillingAndOMServices`,
  `https://${HOST}/services/structuralSteelWork`,
  `https://${HOST}/services/boilerErectionWork`,
  `https://${HOST}/services/workoverDrillingServices`,
  `https://${HOST}/services/hydrojetting`,
  `https://${HOST}/news`,
  `https://${HOST}/news/ongc_work_order_signed`,
  `https://${HOST}/investors`,
  `https://${HOST}/careers`,
  `https://${HOST}/careers/CareerOpening`,
  `https://${HOST}/contact`,
  `https://${HOST}/privacy-policy`,
];

const payload = JSON.stringify({
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList: URLS,
});

const options = {
  hostname: 'api.indexnow.org',
  port: 443,
  path: '/indexnow',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(payload),
  },
};

console.log(`Submitting ${URLS.length} URLs to IndexNow (Bing, Yandex, Seznam)...`);

const req = https.request(options, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    if (res.statusCode === 200 || res.statusCode === 202) {
      console.log(`IndexNow submission successful! Status: ${res.statusCode} ${res.statusMessage}`);
    } else {
      console.log(`IndexNow returned status: ${res.statusCode} ${res.statusMessage}`);
      if (data) console.log('Response body:', data);
    }
  });
});

req.on('error', (e) => {
  console.error(`IndexNow submission error: ${e.message}`);
});

req.write(payload);
req.end();
