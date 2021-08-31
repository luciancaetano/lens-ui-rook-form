import React, { useState } from 'react';
import {
  DesignProvider, TextInput,
} from '@luciancaetano/lens-ui';

export default {
  component: TextInput,
  title: 'Inputs/TextInput',
  excludeStories: /.*Data$/,
};

export const Uncontrolled = () => (
  <DesignProvider>
    <TextInput
      name="input"
      defaultValue="Hello World"
    />

    <br />

    <TextInput
      name="input"
      isError
      defaultValue="Hello World"
    />
  </DesignProvider>
);

export const Controlled = () => {
  const [state, setState] = useState('');

  return (
    <DesignProvider>
      <div>Value is {state} </div>
      <TextInput
        name="input"
        onChange={(v) => setState(v as any)}
        value={state}
      />
    </DesignProvider>
  );
};

export const Search = () => (
  <DesignProvider>
    <TextInput
      name="input"
      type="search"
      defaultValue="Hello World"
    />
  </DesignProvider>
);

export const AsTextArea = () => (
  <DesignProvider>
    <TextInput
      name="input"
      defaultValue="Hello World"
      type="textarea"
    />
  </DesignProvider>
);
