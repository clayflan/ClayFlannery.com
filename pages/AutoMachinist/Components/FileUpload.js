import React, { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { useDropzone } from 'react-dropzone';

const FileUpload = ({ onFileUpload }) => {
  const [file, setFile] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: '.stl,.step',
    multiple: false
  });

  const handleUpload = () => {
    if (file) {
      onFileUpload(file);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-6 w-full max-w-xl mx-auto">
      <div
        {...getRootProps()}
        className={`w-full h-64 border-4 border-dashed rounded-lg flex flex-col items-center justify-center cursor-pointer transition-colors duration-300 ${
          isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400'
        }`}
      >
        <input {...getInputProps()} />
        <svg
          className="w-16 h-16 text-gray-400 mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
          />
        </svg>
        <p className="text-lg text-gray-600">
          {isDragActive ? 'Drop the file here' : 'Drag & drop a file here, or click to select'}
        </p>
        <p className="text-sm text-gray-500 mt-2">Supported formats: .stl, .step</p>
      </div>
      {file && (
        <div className="text-center">
          <p className="text-lg font-semibold text-gray-700">{file.name}</p>
          <p className="text-sm text-gray-500">
            {(file.size / 1024 / 1024).toFixed(2)} MB
          </p>
        </div>
      )}
      <Button
        onClick={handleUpload}
        disabled={!file}
        className="px-8 py-3 text-lg font-semibold transition-colors duration-300"
        style={{
          backgroundColor: file ? '#4ECDC4' : '#ccc',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
        }}
      >
        {file ? 'Upload Model' : 'Select a file to upload'}
      </Button>
    </div>
  );
};

export default FileUpload;