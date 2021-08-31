import React from 'react';
import {
  DesignProvider, FormGroup, Divider, FormFooter,
} from '@luciancaetano/lens-ui';

export default {
  component: FormGroup,
  title: 'Inputs/FormGroup',
  excludeStories: /.*Data$/,
  decorators: [],
};

export const _FormGroup = () => (
  <DesignProvider>
    <FormGroup
      label="Input Label"
      helperText="Helper text"
      helperTextIntent="danger"
      required
      labelFor="inputId"
      inline
    >
      <input type="text" id="inputId" />
    </FormGroup>
  </DesignProvider>
);

export const _Divider = () => (
  <DesignProvider>
    <FormGroup
      label="Input 1"
    >
      <input type="text" />
    </FormGroup>
    <Divider>Divider title</Divider>

    <FormGroup
      label="Input 1"
    >
      <input type="text" />
    </FormGroup>
  </DesignProvider>
);

export const _FormFooter = () => (
  <DesignProvider>
    <FormFooter
      cancelIsReset
      state="ready"
      onSave="submit"
      onCancel={() => { }}
      onDelete={() => { }}
    />
  </DesignProvider>
);
