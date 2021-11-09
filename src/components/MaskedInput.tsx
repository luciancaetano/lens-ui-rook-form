import React from 'react';
import { MaskedInput as LensMaskedInput, IMaskedInputProps as LensIMaskedInputProps } from 'lens-ui';
import { Control, Controller } from 'react-hook-form';

export interface ILuifMaskedInputProps extends Omit<LensIMaskedInputProps, 'value' | 'defaultValue'> {
  name: string;
  control: Control<any>;
}

export const MaskedInput: React.FC<ILuifMaskedInputProps> = ({ control, name, ...props }) => (
  <Controller
    name={name}
    control={control}
    render={({ field }) => (
      <LensMaskedInput
        {...props}
        {...field}
      />
    )}
  />
);
