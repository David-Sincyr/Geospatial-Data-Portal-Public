import './Upload.css';
import React from 'react';
import Button from '../Button/Button';

/* This function allows a user to upload files from their desktop through the browser. */
function Upload() {
  const [selectedFile, setSelectedFile] = React.useState(null);
  const buttonRef = React.useRef(null);

  const openFileBrowser = () => {
    buttonRef.current.click();
  };

  const onFileChange = e => {
    setSelectedFile(e.target.files[0]);
  };

  const onFileUpload = () => {
    // Create an object of formData.
    const formData = new FormData();

    // Update the formData object.
    if (selectedFile) {
      formData.append('myFile', selectedFile, selectedFile.name);
      // Details of the uploaded file.
      console.log(selectedFile);
    } else {
      console.log('Error: Please select a file');
    }
  };

  // File content to be displayed after file upload is complete.
  const fileData = () => {
    if (selectedFile) {
      return (
        <div>
          <h2>File Details:</h2>
          <p>File Name: {selectedFile.name}</p>
          <p>File Type: {selectedFile.type}</p>
        </div>
      );
    }

    return (
      <div>
        <br />
        <h4>Choose before pressing the Upload button or else it will error</h4>
      </div>
    );
  };

  return (
    <div>
      <div>
        <input ref={buttonRef} type='file' onChange={onFileChange} />
        <Button name='Browse...' handleClick={openFileBrowser} />
        <Button name='Upload' handleClick={onFileUpload} />
      </div>
      {fileData()}
    </div>
  );
}

export default Upload;
