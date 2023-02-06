import React from "react";
import { InputContainer } from "./styles";

type FormInputProps = {
  label: string;
  type: string;
  id: string;
};

export const FormInput = ({ label, type, id }: FormInputProps) => {
  return (
    <InputContainer>
      <input type={type} id={id} placeholder=" " />
      <label htmlFor={id}>{label}</label>
    </InputContainer>
  );
};
