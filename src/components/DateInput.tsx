import React from 'react';
import { DateInput as LensDateInput, IDateInputProps as LensIDateInputProps } from '@luciancaetano/lens-ui';
import { Control, Controller } from 'react-hook-form';

export interface ILuifDateInputProps extends Omit<LensIDateInputProps, 'value'> {
  name: string;
  control: Control<any>;
}

export const DateInput: React.FC<ILuifDateInputProps> = ({ control, name, ...props }) => (
  <Controller
    name={name}
    control={control}
    render={({ field }) => (
      <LensDateInput
        {...props}
        {...field}
      />
    )}
  />
);
