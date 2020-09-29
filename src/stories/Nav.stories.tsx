import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Nav, NavProps } from './Nav/Nav';

export default {
  title: 'Example/Nav',
  component: Nav,

} as Meta;

const Template: Story<NavProps> = (args) => <Nav {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};