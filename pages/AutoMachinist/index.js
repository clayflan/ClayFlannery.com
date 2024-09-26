import * as React from 'react';
import * as THREE from 'three';

function App23() {
    return (
      <div>
        <h1>React + Three.js Example</h1>
        <canvas id="canvas" width={640} height={480} />
      </div>
    );
  }
  
  export default App23;

document.getElementById('file-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form behavior
    
    const uploadedFiles = document.getElementById('uploaded-files');
    
    let validFile = false;
    for (const file of this.files) {
        if (['stl', 'step'].includes(file.name.split('.').pop().toLowerCase())) {
            validFile = true;
            break; // Exit loop once a valid file is found
        }
    }
    
    if (!validFile) {
        alert("Only STL (.stl) and STEP (.step) files are accepted.");
        return false; // Prevent form submission with invalid files
    }
    
    uploadedFiles.innerHTML = '';
    Array.from(this.files).forEach(file => {
        const li = document.createElement('li');
        li.textContent = file.name;
        uploadedFiles.appendChild(li);
    });
});

document.getElementById('file-upload').addEventListener('change', function() {
    if (this.files.length > 0) {
        console.log("Selected files: ", this.files);
    }
});