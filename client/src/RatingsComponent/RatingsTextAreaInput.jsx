import React, { useState } from 'react';

const InputTextAreaBox = ({ label, rows, columns, minlength, maxlength, placeholder }) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="input-text-container">
      <label htmlFor={name}>{label}</label>
      <textarea type="text" rows={rows} columns={columns} minLength={minlength} maxLength={maxlength} value={value} placeholder={placeholder} onChange={handleChange} />
    </div>
  );

}

export default InputTextAreaBox;
