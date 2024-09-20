const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const nftMarketplace = require('./nft_marketplace');

const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/mint-nft', async (req, res) => {
  const nft = await nftMarketplace.mintNFT(req.body.name, req.body.description, req.body.image);
  res.json(nft);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});