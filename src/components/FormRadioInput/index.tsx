import React, { ReactNode } from "react";
import { useFormContext } from "react-hook-form";
import { FormRadioInputContainer, RadioInput, RadioLabel } from "./styles";

type FormRadioInputProps = {
  children: ReactNode;
  id: string;
  name: string;
  value: string;
};

export const FormRadioInput = ({
  children,
  id,
  name,
  value,
}: FormRadioInputProps) => {
  const { register } = useFormContext();

  return (
    <FormRadioInputContainer>
      <RadioInput id={id} value={value} {...register(name)} />
      <RadioLabel htmlFor={id}>{children}</RadioLabel>
    </FormRadioInputContainer>
  );
};
