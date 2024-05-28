const fileUpload = document.getElementById('fileUpload');
fileUpload.addEventListener('change', handleFileUpload);

function handleFileUpload(event) {
    const selectedFile = event.target.files[0];
    const filePath = selectedFile.path; // Access file path
    const filename = selectedFile.name;
    const fileType = selectedFile.type;
    const fileSize = selectedFile.size; // Optional: Capture file size

    // Extract other metadata as needed
}