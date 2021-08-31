import React, { useState } from 'react';
import { DesignProvider, MaskedInput } from '@luciancaetano/lens-ui';

export default {
  component: MaskedInput,
  title: 'Inputs/MaskedInput',
  excludeStories: /.*Data$/,
};

export const Uncontrolled = () => (
  <DesignProvider>
    <MaskedInput
      name="input"
      mask="99/99/9999"
      defaultValue="03/03/1991"
    />

    <br />

    <MaskedInput
      name="input"
      isError
      mask="99/99/9999"
      defaultValue="03/03/1991"
    />
  </DesignProvider>
);

export const Controlled = () => {
  const [state, setState] = useState('03/03/1991');

  return (
    <DesignProvider>
      <div>Value is {state} </div>
      <MaskedInput
        name="input"
        onChange={(v) => setState(v as any)}
        mask="99/99/9999"
        value={state}
      />
    </DesignProvider>
  );
};
