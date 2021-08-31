import { formatISO } from 'date-fns';
import React, { useState } from 'react';
import { DesignProvider, DateInput } from '@luciancaetano/lens-ui';

export default {
  component: DateInput,
  title: 'Inputs/DateInput',
  excludeStories: /.*Data$/,
};

export const Controlled = () => {
  const [state, setState] = useState(formatISO(new Date('1991-03-03')));

  return (
    <DesignProvider>
      <div>Value is {state} </div>
      <DateInput
        name="input"
        displayFormat="MM/DD/YYYY"
        onChange={(v) => setState(v as any)}
        value={state}
      />
    </DesignProvider>
  );
};

export const Uncontrolled = () => (
  <DesignProvider>
    <DateInput
      name="input"
      value={formatISO(new Date())} /* value work as initialValue */
    />
  </DesignProvider>
);
export const _MultiDateInput = () => (
  <DesignProvider>
    <DateInput
      name="input"
      type="multiple"
      value={['1991-03-03 00:00:00']}
    />
  </DesignProvider>
);

export const Range = () => (
  <DesignProvider>
    <DateInput
      name="input"
      type="range"
    />
  </DesignProvider>
);

export const MonthPicker = () => (
  <DesignProvider>
    <DateInput
      type="month-only"
      name="input"
      displayFormat="MM"
    />
  </DesignProvider>
);

export const YearPicker = () => (
  <DesignProvider>
    <DateInput
      name="input"
      type="year-only"
      displayFormat="YYYY"
    />
  </DesignProvider>
);

export const TimePicker = () => (
  <DesignProvider>
    <DateInput
      name="input"
      type="time-only"
      time="analog"
      displayFormat="HH:mm:ss"
    />
  </DesignProvider>
);
