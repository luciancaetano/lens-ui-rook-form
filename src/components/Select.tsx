import React from 'react';
import { Select as LensSelect, ISelectProps as LensISelectProps } from 'lens-ui';
import { Control, Controller } from 'react-hook-form';

export interface ILuifSelectProps extends Omit<LensISelectProps, 'value' | 'defaultValue'> {
  name: string;
  control: Control<any>;
}

export const Select: React.FC<ILuifSelectProps> = ({ control, name, ...props }) => (
  <Controller
    name={name}
    control={control}
    render={({ field }) => (
      <LensSelect
        {...props}
        {...field}
      />
    )}
  />
);
