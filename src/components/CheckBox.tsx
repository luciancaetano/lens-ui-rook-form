import React from 'react';
import { CheckBox as LensCheckBox, ICheckBoxProps } from '@luciancaetano/lens-ui';
import { Control, Controller } from 'react-hook-form';

export interface ILuifCheckboxProps extends Omit<ICheckBoxProps, 'checked' | 'defaultChecked' > {
  name: string;
  control: Control<any>;
}

export const CheckBox: React.FC<ILuifCheckboxProps> = ({ control, name, ...props }) => (
  <Controller
    name={name}
    control={control}
    render={({ field }) => (
      <LensCheckBox
        {...props}
        {...field}
      />
    )}
  />
);
