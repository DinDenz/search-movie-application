/* eslint-disable no-plusplus */
import { useState } from 'react';
import { Select, rem } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import classes from './FilterYear.module.css';

export default function FilterYear() {
  const [opened, setOpened] = useState(false);
  const dataYears = [];
  for (let year = 2024; year >= 1950; year--) {
    dataYears.push(year.toString());
  }

  const icon = (
    <IconChevronDown
      style={{
        width: rem(16),
        height: rem(16),
        transition: 'transform 300ms ease',
        transform: opened ? 'rotate(180deg)' : 'rotate(0deg)',
      }}
    />
  );

  return (
    <p>
      <Select
        data={dataYears}
        rightSectionPointerEvents="none"
        rightSection={icon}
        placeholder="Your favorite library"
        onDropdownOpen={() => setOpened(true)}
        onDropdownClose={() => setOpened(false)}
        comboboxProps={{ shadow: 'md' }}
        className={classes.select}
        maxDropdownHeight={200}
      />
    </p>
  );
}
