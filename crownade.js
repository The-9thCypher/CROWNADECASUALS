const http = require('http');
const fs = require('fs');

const crownade = fs.readFileSync('./Crownade.html', 'utf-8');
const cownade = fs.readFileSync('./cownade.css', 'utf-8');
const image1 = fs.readFileSync('IMG-20220812-WA0139_1.jpg');
const image2 = fs.readFileSync('photo-1560796952-f1c9b838544c.jfif');
const image3 = fs.readFileSync('IMG-20220812-WA0168.jpg');
const image4 = fs.readFileSync('IMG-20220812-WA0172.jpg');
const image5 = fs.readFileSync('IMG-20220812-WA0131.jpg');
const image6 = fs.readFileSync('IMG-20220812-WA0173.jpg');
const image7 = fs.readFileSync('IMG-20220812-WA0174.jpg');
const image8 = fs.readFileSync('istockphoto-1067772724-612x612.jpg')
const image9 = fs.readFileSync('20220706_084251.jpg');
const image10 = fs.readFileSync('20220706_084024.jpg');
const image11 =fs.readFileSync('20220721_104325.jpg');

const server = http.createServer((req, res) =>{
  console.log(req.url)
  if (req.url === '/Crownade.html'){
    res.end(crownade);
  }
  if (req.url === '/cownade.css'){
    res.statusCode = 200;
    res.end(cownade);
  }
  if (req.url === '/IMG-20220812-WA0139_1.jpg'){
  res.end(image1);
  }
  if (req.url === '/photo-1560796952-f1c9b838544c.jfif'){
    res.end(image2);
  }
  if (req.url === '/IMG-20220812-WA0168.jpg'){
    res.end(image3);
  }
  if (req.url === '/IMG-20220812-WA0172.jpg'){
    res.end(image4);
  }
  if (req.url === '/IMG-20220812-WA0131.jpg'){
    res.end(image5);
  }
  if (req.url === '/IMG-20220812-WA0173.jpg'){
    res.end(image6);
  }
  if (req.url === '/IMG-20220812-WA0174.jpg'){
    res.end(image7);
  }
  if (req.url === '/istockphoto-1067772724-612x612.jpg'){
    res.end(image8);
  }
  if (req.url === '/20220706_084251.jpg'){
    res.end(image9);
  }
  if (req.url === '/20220706_084024.jpg'){
    res.end(image10);
  }
  if (req.url === '/20220721_104325.jpg'){
    res.end(image11);
  }
})



server.listen((5000), () => {
  console.log("server listening at 5000")
})

