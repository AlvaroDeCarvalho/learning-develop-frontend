/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Control, Controller, FieldValues } from "react-hook-form";
import * as S from "./styles";

export interface IOptions {
  label: string;
  value: string;
}

interface DropdownFilterProps {
  label?: string;
  options: IOptions[];
  onChange?: (value: string) => void;
  labelField?: string;
  valueField?: string;
  disabled?: boolean;
  placeholder?: string;
  name: string;
  control: Control<FieldValues>;
}

export const DropdownFilter = ({
  label,
  placeholder = "Selecione uma opção",
  name,
  control,
  options,
  disabled,
  onChange,
}: DropdownFilterProps) => {
  return (
        <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <S.DropdownContainer disabled={disabled}>
          {label && <S.StyledLabel>{label}</S.StyledLabel>}
          <S.StyledSelect
            {...field}
            value={field.value || ""}
            onChange={(e) => {
              field.onChange(e.target.value);
              onChange && onChange(e.target.value);
            }}
          >
            <option value="">{placeholder}</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </S.StyledSelect>
        </S.DropdownContainer>
      )}
    />
  );
};
