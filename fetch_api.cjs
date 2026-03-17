const https = require('https');

https.get('https://script.google.com/macros/s/AKfycbyvdX7cSoBgBKlW6nXUxMJXeUIG6I-3jH_zL1ojCQpvFL5wdnO5Xm98RKdvL8NIxZsBPw/exec?action=getYkienCuTri', (resp) => {
  let data = '';
  resp.on('data', (chunk) => { data += chunk; });
  resp.on('end', () => {
    console.log(data);
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});
