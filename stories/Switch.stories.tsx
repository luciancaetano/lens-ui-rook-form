import React, { useState } from 'react';
import {
  DesignProvider, FormGroup, Switch,
} from '@luciancaetano/lens-ui';

export default {
  component: Switch,
  title: 'Inputs/Switch',
  excludeStories: /.*Data$/,
};

export const Uncontrolled = () => (
  <DesignProvider>
    <FormGroup>
      <Switch label="Night Mode" />
    </FormGroup>
  </DesignProvider>
);

export const Controlled = () => {
  const [state, setState] = useState(false);

  return (
    <DesignProvider>
      <div>Item is chacked: {JSON.stringify(state)}</div>
      <FormGroup>
        <Switch label="Night Mode" checked={state} onChange={(v) => setState(v)} />
      </FormGroup>
    </DesignProvider>
  );
};
