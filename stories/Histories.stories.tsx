import React, { useCallback, useState } from 'react';
import {
  LensProvider, FormGroup, Button,
} from 'lens-ui';
import { useForm } from 'react-hook-form';
import {
  CheckBox, DateInput, MaskedInput, MoneyInput, RadioGroup, Select, Switch, TextInput,
} from '../src/index';

export default {
  component: CheckBox,
  title: 'Components',
  excludeStories: /.*Data$/,
};

export const _Checkbox = () => {
  const { control, handleSubmit } = useForm();
  const [json, setJson] = useState('');

  const onSubmit = useCallback((data) => {
    setJson(JSON.stringify(data, null, '\t'));
  }, []);

  return (
    <LensProvider>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <CheckBox label="HTML Label" name="CheckBox" control={control} />
          <Button type="submit">Send</Button>
        </FormGroup>
      </form>
      <pre>{json}</pre>
    </LensProvider>
  );
};

export const _DateInput = () => {
  const { control, handleSubmit } = useForm();
  const [json, setJson] = useState('');

  const onSubmit = useCallback((data) => {
    setJson(JSON.stringify(data, null, '\t'));
  }, []);

  return (
    <LensProvider>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <DateInput
            name="DateInput"
            displayFormat="MM/DD/YYYY"
            control={control}
          />
          <Button type="submit">Send</Button>
        </FormGroup>
      </form>
      <pre>{json}</pre>
    </LensProvider>
  );
};

export const _MaskedInput = () => {
  const { control, handleSubmit } = useForm();
  const [json, setJson] = useState('');

  const onSubmit = useCallback((data) => {
    setJson(JSON.stringify(data, null, '\t'));
  }, []);

  return (
    <LensProvider>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <MaskedInput
            name="MaskedInput"
            mask="99/99/9999"
            control={control}
          />
          <Button type="submit">Send</Button>
        </FormGroup>
      </form>
      <pre>{json}</pre>
    </LensProvider>
  );
};

export const _MoneyInput = () => {
  const { control, handleSubmit } = useForm();
  const [json, setJson] = useState('');

  const onSubmit = useCallback((data) => {
    setJson(JSON.stringify(data, null, '\t'));
  }, []);

  return (
    <LensProvider>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <MoneyInput
            name="MoneyInput"
            control={control}
          />
          <Button type="submit">Send</Button>
        </FormGroup>
      </form>
      <pre>{json}</pre>
    </LensProvider>
  );
};

export const _RadioGroup = () => {
  const { control, handleSubmit } = useForm();
  const [json, setJson] = useState('');

  const onSubmit = useCallback((data) => {
    setJson(JSON.stringify(data, null, '\t'));
  }, []);

  return (
    <LensProvider>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <RadioGroup
            name="RadioGroup"
            options={[{ label: 'Option1', value: '1' }, { label: 'Option2', value: '2' }, { label: 'Option3', value: '3' }]}
            control={control}
          />
          <Button type="submit">Send</Button>
        </FormGroup>
      </form>
      <pre>{json}</pre>
    </LensProvider>
  );
};

export const _Select = () => {
  const { control, handleSubmit } = useForm();
  const [json, setJson] = useState('');

  const onSubmit = useCallback((data) => {
    setJson(JSON.stringify(data, null, '\t'));
  }, []);

  return (
    <LensProvider>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Select
            name="Select"
            options={[{ label: 'Option1', value: '1' }, { label: 'Option2', value: '2' }, { label: 'Option3', value: '3' }]}
            control={control}
          />
          <Button type="submit">Send</Button>
        </FormGroup>
      </form>
      <pre>{json}</pre>
    </LensProvider>
  );
};

export const _Switch = () => {
  const { control, handleSubmit } = useForm();
  const [json, setJson] = useState('');

  const onSubmit = useCallback((data) => {
    setJson(JSON.stringify(data, null, '\t'));
  }, []);

  return (
    <LensProvider>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Switch label="Night Mode" name="Switch" control={control} />
          <Button type="submit">Send</Button>
        </FormGroup>
      </form>
      <pre>{json}</pre>
    </LensProvider>
  );
};

export const _TextInput = () => {
  const { control, handleSubmit } = useForm();
  const [json, setJson] = useState('');

  const onSubmit = useCallback((data) => {
    setJson(JSON.stringify(data, null, '\t'));
  }, []);

  return (
    <LensProvider>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <TextInput
            name="input"
            control={control}
          />

          <Button type="submit">Send</Button>
        </FormGroup>
      </form>
      <pre>{json}</pre>
    </LensProvider>
  );
};
