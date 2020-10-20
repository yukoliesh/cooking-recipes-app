import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Card, CardProps } from './Card';

export default {
  title: 'Example/Card',
  component: Card,
} as Meta;


const Template: Story<CardProps> = (args) => <Card {...args} />;

export const CardSample = Template.bind({});

CardSample.args ={
  imageUrl: "../images/agedashi-tofu.jpg",
  imageAlt: "Agedashi tofu with black pepper broth",
  title: "Agedashi tofu with black pepper broth",
  description: "This classic Japanese dish is an impressive side or light meal. This classic Japanese dish is an impressive side or light meal.",
  categoryName: "Singaporean",
  timeAmount: "60 min",
  effortName: "Easy"
}