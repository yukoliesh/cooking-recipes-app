import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Menu, MenuProps } from './Menu/Menu';

export default {
  title: 'Example/Menu',
  component: Menu,

} as Meta;

const Template: Story<MenuProps> = (args) => <Menu {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};