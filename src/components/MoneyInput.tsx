import React from 'react';
import { MoneyInput as LensMoneyInput, IMoneyInputProps as LensIMoneyInputProps } from 'lens-ui';
import { Control, Controller } from 'react-hook-form';

export interface ILuifMoneyInputProps extends Omit<LensIMoneyInputProps, 'value' | 'defaultValue'> {
  name: string;
  control: Control<any>;
}

export const MoneyInput: React.FC<ILuifMoneyInputProps> = ({ control, name, ...props }) => (
  <Controller
    name={name}
    control={control}
    render={({ field }) => (
      <LensMoneyInput
        {...props}
        {...field}
      />
    )}
  />
);
