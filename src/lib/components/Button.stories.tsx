import React, { ComponentProps } from "react";

import { Story, Meta } from "@storybook/react";

// import Paper from '@material-ui/core/Paper';
import Button from "./Button";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Components/Button",
  component: Button
} as Meta;

const Template: Story<ComponentProps<typeof Button>> = (args) => (
  <Button {...args} />
);

export const DefaultWithoutBorder = Template.bind({});

DefaultWithoutBorder.args = {
  title: 'Click me'
};


export const WithDefaultBorder = Template.bind({});

WithDefaultBorder.args = {
  border: true,
  title: 'Click me'
};

export const WithCustomBorder = Template.bind({});

WithCustomBorder.args = {
  border: '3px solid #D5DFE9!important',
  title: 'Click me'
};

export const ButtonList = Template.bind({});

ButtonList.decorators = [
  (MStory) => (
    <div
      style={{
        width: "fit-content",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.15)",
      }}
    >
      <MStory />
      <MStory />
    </div>
  ),
];
ButtonList.args = {
  title: 'Option'
};


