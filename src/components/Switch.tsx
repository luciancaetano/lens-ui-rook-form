import React from 'react';
import { Switch as LensSwitch, ISwitchProps as LensISwitchProps } from 'lens-ui';
import { Control, Controller } from 'react-hook-form';

export interface ILuifSwitchProps extends Omit<LensISwitchProps, 'checked' | 'defaultChecked'> {
  name: string;
  control: Control<any>;
}

export const Switch: React.FC<ILuifSwitchProps> = ({ control, name, ...props }) => (
  <Controller
    name={name}
    control={control}
    render={({ field }) => (
      <LensSwitch
        {...props}
        {...field}
      />
    )}
  />
);
