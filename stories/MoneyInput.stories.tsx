import React, { useState } from 'react';
import {
  DesignProvider, MoneyInput,
} from '@luciancaetano/lens-ui';

export default {
  component: MoneyInput,
  title: 'Inputs/MoneyInput',
  excludeStories: /.*Data$/,
};

export const Uncontrolled = () => (
  <DesignProvider>
    <MoneyInput
      name="input"
      defaultValue={100}
    />

    <br />

    <MoneyInput
      name="input"
      isError
      defaultValue={100}
    />
  </DesignProvider>
);

export const Controlled = () => {
  const [state, setState] = useState(0);

  return (
    <DesignProvider>
      <div>Value is {state} </div>
      <MoneyInput
        name="input"
        onChange={(v) => setState(v as any)}
        value={state}
      />
    </DesignProvider>
  );
};
