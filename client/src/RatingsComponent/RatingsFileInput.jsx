import React, { useState } from 'react';

const InputFile = ({ label, maxlength, placeholder }) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="input-text-container">
      <label htmlFor={name}>Upload your photos</label>
      <input type="file" multiple />
    </div>
  );

}

export default InputFile;
