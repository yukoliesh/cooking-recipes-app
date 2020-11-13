import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { DetailsPage, DetailsPageProps } from './Details';

export default {
  title: 'Example/DetailPage',
  component: DetailsPage,
} as Meta;

const Template: Story<DetailsPageProps> = (args) => <DetailsPage {...args} />;

export const DetailsPageSample = Template.bind({});

DetailsPageSample.args ={
  imageUrl: "../images/agedashi-tofu.jpg",
  imageAlt: "Agedashi tofu with black pepper broth",
  title: "Agedashi tofu with black pepper broth",
  description: "This classic Japanese dish is an impressive side or light meal. This classic Japanese dish is an impressive side or light meal.",
  categoryName: "Singaporean",
  prepTime: 10,
  cookTime: 40,
  difficulty: "Easy",
}