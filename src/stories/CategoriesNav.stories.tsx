import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { CategoriesNav, CategoriesNavProps } from './Categories/CategoriesNav';

export default {
  title: 'Example/CategoriesNav',
  component: CategoriesNav,
} as Meta;

const Template: Story<CategoriesNavProps> = (args) => <CategoriesNav {...args} />;

export const CategoriesField = Template.bind({});


