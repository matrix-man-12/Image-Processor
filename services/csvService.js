import fs from 'fs';
import csv from 'csv-parser';

export const parseCsv = (file) => {
  return new Promise((resolve, reject) => {
    const results = [];
    fs.createReadStream(file.path)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => resolve(results))
      .on('error', (err) => reject(err));
  })
}

export const validateCsvData = (csvData) => {
  const validProducts = [];
  const invalidProducts = [];
  
  csvData.forEach((row) => {
    // TODO: Add validation logic here
    validProducts.push(row); // Placeholder for valid products
  })
  
  return { validProducts, invalidProducts };
}
