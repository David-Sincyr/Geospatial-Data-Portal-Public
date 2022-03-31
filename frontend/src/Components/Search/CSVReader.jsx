import * as Papa from 'papaparse';

function CSVReader() {
  const handleFileUpload = e => {
    const file = e.target.files[0];
    // const reader = new FileReader();
    Papa.parse(file);
    console.log(file);
  };

  return (
    <div>
      <input type='file' accept='.csv' onChange={handleFileUpload} />
    </div>
  );
}

export default CSVReader;
