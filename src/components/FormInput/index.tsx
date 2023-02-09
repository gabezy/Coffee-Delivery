import React from "react";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "../../styles/global";
import { InputContainer, InputForm, LabelInputForm } from "./styles";

type FormInputProps = {
  label: string;
  type: string;
  id: string;
  inputmode?: boolean;
  parttern?: string;
  error?: any;
};

export const FormInput = ({
  label,
  type,
  id,
  parttern,
  inputmode,
  error,
}: FormInputProps) => {
  const { register } = useFormContext();

  return (
    <InputContainer>
      <div className="inputWrapper">
        <InputForm
          type={type}
          id={id}
          placeholder=" "
          {...register(id)}
          pattern={parttern}
          inputMode={inputmode ? "numeric" : "text"}
          className={id === "cep" ? "cep" : ""}
        />
        <LabelInputForm htmlFor={id}>{label}</LabelInputForm>
      </div>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputContainer>
  );
};
