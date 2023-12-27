import React, { ChangeEvent } from "react";

interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  type: string;
  placeholder: string;
}

const TextInput: React.FC<TextInputProps> = ({
  value,
  onChange,
  type,
  placeholder,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <input
      type={type}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};

export default TextInput;
