
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

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animation to quadwrapper elements
const quads = document.querySelectorAll('.quad');
quads.forEach(quad => {
    quad.addEventListener('mouseenter', () => {
        gsap.to(quad, {duration: 0.3, y: -5, boxShadow: '0 6px 20px rgba(94, 94, 94, 0.2)'});
    });
    quad.addEventListener('mouseleave', () => {
        gsap.to(quad, {duration: 0.3, y: 0, boxShadow: '0 4px 30px rgba(94, 94, 94, 0.1)'});
    });
});