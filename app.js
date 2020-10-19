const fs = require('fs');
const ImageKit = require('imagekit');

const imagekit = new ImageKit({
  publicKey: 'public_O3/t6Ij7RE/yrOx7ExuzYSIL0/o=',
  privateKey: 'private_PlRszmF+oY3scL+VjQXKb7prGts=',
  urlEndpoint: 'https://ik.imagekit.io/benyo'
});

let fbURLs = '';

imagekit.listFiles({ path: '/Hijab_Shop_Kaftan/Jakne' }, (err, res) => {
  if (err) return console.log(err);

  res.forEach(photo => {
    fbURLs += photo.url + '\n\n';
    console.log('Writing URL to file -> ', photo.url + '\n');
  });

  fs.writeFileSync('./Jakne.txt', fbURLs);
});
