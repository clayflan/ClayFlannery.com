import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const FileUpload = ({ onFileUpload }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      onFileUpload(file);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <input
        type="file"
        onChange={handleFileChange}
        accept=".stl,.step"
        className="hidden"
        id="file-upload"
      />
      <label htmlFor="file-upload" className="cursor-pointer">
        <Button variant="outline">Choose File</Button>
      </label>
      {file && <p>{file.name}</p>}
      <Button onClick={handleUpload} disabled={!file}>
        Upload
      </Button>
    </div>
  );
};

export default FileUpload;