import React, { useState } from 'react';

const InputTextBox = ({ label, maxlength, placeholder }) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="input-text-container">
      <label htmlFor={name}>{label}</label>
      <input type="text" maxLength={maxlength} value={value} placeholder={placeholder} onChange={handleChange} />

    </div>
  );

}

export default InputTextBox;
