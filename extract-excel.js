const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

const excelFile = path.join(__dirname, 'Sample Framework_Customer Database_Global EB Ink CI Flexographic Printing Machine Professional Market_CMI.xlsx');

if (fs.existsSync(excelFile)) {
  const workbook = XLSX.readFile(excelFile);
  console.log('Sheet names:', workbook.SheetNames);
  
  workbook.SheetNames.forEach(sheetName => {
    console.log(`\n=== Sheet: ${sheetName} ===`);
    const worksheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(worksheet);
    console.log(JSON.stringify(data, null, 2));
  });
} else {
  console.error('Excel file not found at:', excelFile);
}
