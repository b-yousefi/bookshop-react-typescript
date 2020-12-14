import React from "react";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import "../../styles/phone_number.css";

interface PhoneNumberControlProps {
  name: string;
  required?: boolean;
  value?: string;
  onChange(
    value: string,
    data: any,
    event: React.ChangeEvent<HTMLInputElement>,
    formattedValue: string
  ): void;
  error?: string;
}

export const PhoneNumberControl: React.FC<PhoneNumberControlProps> = (
  props
) => {
  const { name, required, value, onChange } = props;

  const isValid = (
    inputValue: string,
    country: object,
    countries: object[],
    hiddenAreaCodes: object[]
  ) => {
    if (required && inputValue.length < 12) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <div>
      <ReactPhoneInput
        inputProps={{
          name: name,
          required: required,
          autoFocus: true,
        }}
        masks={{ ir: "(...) ...-..-.." }}
        placeholder="+98 (935) 123-45-67"
        country="ir"
        value={value}
        onChange={onChange}
        inputStyle={{ width: 250 }}
        isValid={isValid}
      />
    </div>
  );
};
