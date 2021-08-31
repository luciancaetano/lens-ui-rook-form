import React, { useState } from 'react';
import {
  DesignProvider, CheckBox, FormGroup,
} from '@luciancaetano/lens-ui';

export default {
  component: CheckBox,
  title: 'Inputs/Checkbox',
  excludeStories: /.*Data$/,
};

export const Uncontrolled = () => (
  <DesignProvider>
    <FormGroup>
      <CheckBox label="HTML Label" />
    </FormGroup>
  </DesignProvider>
);

export const Controlled = () => {
  const [state, setState] = useState(false);

  return (
    <DesignProvider>
      <div>Item is chacked: {JSON.stringify(state)}</div>
      <FormGroup>
        <CheckBox label="HTML Label" checked={state} onChange={(v) => setState(v)} />
      </FormGroup>
    </DesignProvider>
  );
};
