import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { MainRecipes, MainRecipesProps } from './MainRecipes';
// import * as HeaderStories from './Header.stories';

export default {
  title: 'Example/MainRecipes',
  component: MainRecipes,
} as Meta;

const Template: Story<MainRecipesProps> = (args) => <MainRecipes {...args} />;

export const MainRecipesField = Template.bind({});


