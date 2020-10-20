const fs = require('fs');
const csv = require('csv-parser');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const readline = require('readline');

const writeToCSV = (csvPath, txtPath) => {
  const csvWriter = createCsvWriter({
    path: csvPath,
    append: true,
    header: [
      { id: 'id' },
      { id: 'title' },
      { id: 'description' },
      { id: 'availability' },
      { id: 'inventory' },
      { id: 'condition' },
      { id: 'price' },
      { id: 'link' },
      { id: 'image_link' },
      { id: 'brand' }
    ]
  });

  const data = [];

  let array = fs.readFileSync(txtPath).toString().split('\n');
  for (i in array) {
    console.log(array[i]);
  }
  console.log(array.length);

  for (let i = 52; i < array.length + 52; i++) {
    data.push({
      id: i + 1,
      title: 'Tunika',
      description: 'Tunike',
      availability: 'in stock',
      inventory: 1,
      condition: 'new',
      price: 'CHANGE',
      link: 'https://www.facebook.com/Hijab-Shop-Kaftan-100956541806389/',
      image_link: array[i - 52],
      brand: 'Hijab Shop Kaftan'
    });
  }

  csvWriter
    .writeRecords(data)
    .then(() => {
      console.log('The CSV file was written to successfully');
    })
    .catch(err => {
      console.log(err);
    });
};

const readCSV = csvPath => {
  fs.createReadStream(csvPath)
    .pipe(csv())
    .on('data', row => {
      console.log(row);
    })
    .on('end', () => {
      console.log('CSV file successfully processed');
    });
};

module.exports = { readCSV, writeToCSV };
