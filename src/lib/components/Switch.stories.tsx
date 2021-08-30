import React, { ComponentProps } from "react";

import { Story, Meta } from "@storybook/react";

// import Paper from '@material-ui/core/Paper';
import Switch from "./Switch";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Components/Switch",
  component: Switch
} as Meta;

const Template: Story<ComponentProps<typeof Switch>> = (args) => (
  <Switch {...args} />
);

export const Default = Template.bind({});

Default.args = {
  items: [
    {
      label: 'Start',
      handler: () => {console.log('Start')}
    },
    {
      label: 'End',
      handler: () => {console.log('End')}
    }
  ]
};


export const MultiItems = Template.bind({});

MultiItems.args = {
  items: [
    {
      label: 'First',
      handler: () => {console.log('First')}
    },
    {
      label: 'Second',
      handler: () => {console.log('Second')}
    },
    {
      label: 'Third',
      handler: () => {console.log('Third')}
    }
  ]
};


export const Selected = Template.bind({});

Selected.args = {
  items: [
    {
      label: 'First',
      handler: () => {console.log('First')}
    },
    {
      label: 'Second',
      handler: () => {console.log('Second')}
    },
    {
      label: 'Third',
      handler: () => {console.log('Third')}
    }
  ],
  selected: 1
};



