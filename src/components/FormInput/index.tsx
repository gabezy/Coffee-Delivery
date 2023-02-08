import React from "react";
import { FieldValues, useFormContext, UseFormRegister } from "react-hook-form";
import { InputContainer } from "./styles";

type FormInputProps = {
  label: string;
  type: string;
  id: string;
};

export const FormInput = ({ label, type, id }: FormInputProps) => {
  const { register } = useFormContext();

  return (
    <InputContainer>
      <input
        type={type}
        id={id}
        placeholder=" "
        {...register(id)}
        className={id === "cep" ? "cep" : ""}
      />
      <label htmlFor={id}>{label}</label>
    </InputContainer>
  );
};
