import React from 'react';
import { TextInput as LensTextInput, ITextInputProps as LensITextInputProps } from '@luciancaetano/lens-ui';
import { Control, Controller } from 'react-hook-form';

export interface ILuifTextInputProps extends Omit<LensITextInputProps, 'value' | 'defaultValue'>{
  name: string;
  control: Control<any>;
}

export const TextInput: React.FC<ILuifTextInputProps> = ({ control, name, ...props }) => (
  <Controller
    name={name}
    control={control}
    render={({ field }) => (
      <LensTextInput
        {...props}
        {...field}
      />
    )}
  />
);
