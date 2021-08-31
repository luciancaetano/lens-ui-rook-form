import React from 'react';
import { RadioGroup as LensRadioGroup, IRadioGroupProps as LensIRadioGroupProps } from '@luciancaetano/lens-ui';
import { Control, Controller } from 'react-hook-form';

export interface ILuifRadioGroupProps extends Omit<LensIRadioGroupProps, 'value' | 'defaultValue'> {
  name: string;
  control: Control<any>;
}

export const RadioGroup: React.FC<ILuifRadioGroupProps> = ({ control, name, ...props }) => (
  <Controller
    name={name}
    control={control}
    render={({ field }) => (
      <LensRadioGroup
        {...props}
        {...field}
      />
    )}
  />
);
