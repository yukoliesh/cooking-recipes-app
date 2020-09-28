import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Loading, LoadingProps } from './Loading/Loading';


export default {
  title: 'Example/Loading',
  component: Loading,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<LoadingProps> = (args) => <Loading {...args} />;

export const Large = Template.bind({});
Large.args = {
  size: 'large'
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium'
};

export const Small = Template.bind({});
Small.args = {
  size: 'small'
};