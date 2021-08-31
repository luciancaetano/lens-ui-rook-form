import React, { useState } from 'react';
import { DesignProvider, RadioGroup } from '@luciancaetano/lens-ui';

export default {
  component: RadioGroup,
  title: 'Inputs/RadioGroup',
  excludeStories: /.*Data$/,
};

export const Uncontrolled = () => (
  <DesignProvider>
    <RadioGroup
      name="input"
      options={[{ label: 'Option1', value: '1' }, { label: 'Option2', value: '2' }, { label: 'Option3', value: '3' }]}
      defaultValue="2"
    />
  </DesignProvider>
);

export const Controlled = () => {
  const [state, setState] = useState('');

  return (
    <DesignProvider>
      <div>Selected Option is {state} </div>
      <RadioGroup
        name="input"
        options={[
          { label: 'Option1', value: 1 },
          { label: 'Option2', value: '2' },
          { label: 'Option3', value: '3' },
        ]}
        onChange={(v) => setState(v as any)}
        value={state}
      />
    </DesignProvider>
  );
};
