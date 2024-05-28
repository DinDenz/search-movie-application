import { TextInput, TextInputProps, useMantineTheme, rem, Button, Group } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import classes from './SearchInput.module.css';

export default function InputWithButton(props: TextInputProps) {
  const theme = useMantineTheme();

  return (
    <TextInput
      radius="8px"
      placeholder="Search movie title"
      rightSectionWidth={42}
      leftSection={<IconSearch style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
      rightSection={
        <Group>
          <Button
            className={classes.search_button}
            color={theme.primaryColor}
            style={{ flex: 1 }}
            >Search
          </Button>
        </Group>
      }
      {...props}
      className={classes.search_input}
    />
  );
}
