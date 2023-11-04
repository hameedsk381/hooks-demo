import React, { useRef, useState, useEffect } from 'react';

const FileInput = () => {
  const fileInputRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    // On component mount, check if there's an image in localStorage
    const savedImage = localStorage.getItem('savedImage');
    if (savedImage) {
      setImageSrc(savedImage);
    }
  }, []);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const base64 = await toBase64(file);
      localStorage.setItem('savedImage', base64);
      setImageSrc(base64);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  // Convert file to a base64 URL
  const toBase64 = (file) => 
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });

  return (
    <div>
      {/* This input is hidden and only used to trigger the file dialog */}
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleFileChange} 
        accept="image/*"
        style={{ display: 'none' }} 
      />
      
      <button onClick={handleButtonClick}>Select Image</button>
      
      {/* Display the selected image */}
      {imageSrc && <img src={imageSrc} alt="Selected" style={{ marginTop: '20px', maxWidth: '100%', height: 'auto' }} />}
    </div>
  );
}

export default FileInput;
