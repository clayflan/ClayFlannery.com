import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/components/App';
import { ThreeScene } from './src/components/ThreeSceneSetUp';

const root = document.getElementById('root');

ReactDOM.render(
  React.createElement(React.StrictMode, null,
    React.createElement(App)
  ),
  root
);

// File upload functionality
document.addEventListener('DOMContentLoaded', function() {
  const fileForm = document.getElementById('file-form');
  const fileUpload = document.getElementById('file-upload');
  const uploadedFiles = document.getElementById('uploaded-files');

  if (fileForm) {
      fileForm.addEventListener('submit', function(e) {
          e.preventDefault();
          
          let validFile = false;
          for (const file of fileUpload.files) {
              if (['stl', 'step'].includes(file.name.split('.').pop().toLowerCase())) {
                  validFile = true;
                  break;
              }
          }
          
          if (!validFile) {
              alert("Only STL (.stl) and STEP (.step) files are accepted.");
              return false;
          }
          
          uploadedFiles.innerHTML = '';
          Array.from(fileUpload.files).forEach(file => {
              const li = document.createElement('li');
              li.textContent = file.name;
              uploadedFiles.appendChild(li);
          });

          // Here you would typically send the file to a server
          console.log("Files ready for upload:", fileUpload.files);
      });
  }

  if (fileUpload) {
      fileUpload.addEventListener('change', function() {
          if (this.files.length > 0) {
              console.log("Selected files: ", this.files);
          }
      });
  }
});