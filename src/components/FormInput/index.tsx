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
  optional?: boolean;
};

export const FormInput = ({
  label,
  type,
  id,
  parttern,
  inputmode,
}: FormInputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[id]?.message;

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
          error={error?.toString()}
          autoComplete="off"
        />
        <LabelInputForm htmlFor={id}>{label}</LabelInputForm>
      </div>
    </InputContainer>
  );
};
