import React, { ChangeEvent } from 'react';

interface TextAreaProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const TextArea: React.FC<TextAreaProps> = ({ value, onChange, placeholder = '' }) => {
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

  return (
    <textarea
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};

export default TextArea;
