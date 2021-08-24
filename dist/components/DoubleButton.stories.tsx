import React, { ComponentProps } from "react";

import { Story, Meta } from "@storybook/react";

import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

import DoubleButton from "./DoubleButton";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Components/Button",
  component: DoubleButton,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof DoubleButton>> = (args) => (
  <DoubleButton {...args} />
);

export const Default = Template.bind({});

Default.args = {
  mainButtonTitle: "Merge",
};

export const PrimaryContained = Template.bind({});

PrimaryContained.args = {
  ...Default.args,
  buttonGroupProps: {
    color: "primary",
    variant: "contained",
  },
};

export const PrimaryOutlined = Template.bind({});

PrimaryOutlined.args = {
  ...Default.args,
  buttonGroupProps: {
    color: "primary",
    variant: "outlined",
  },
};

export const CustomRadius = Template.bind({});

CustomRadius.args = {
  ...Default.args,
  borderRadius: 22,
};

export const CustomTitleString = Template.bind({});

CustomTitleString.args = {
  ...Default.args,
  secButtonTitle: "More",
};

export const CustomTitleIcon = Template.bind({});

CustomTitleIcon.args = {
  ...Default.args,
  secButtonTitle: <AttachMoneyIcon />,
};

//👇 We create a “template” of how args map to rendering
const TemplateWithChildren: Story<ComponentProps<typeof DoubleButton>> = (
  args
) => (
  <DoubleButton {...args}>
    <p style={{ margin: 8 }}> Hello there </p>
  </DoubleButton>
);

export const DefaultWithSimplePopper = TemplateWithChildren.bind({});

DefaultWithSimplePopper.args = {
  ...PrimaryOutlined.args,
};
//👇 We create a “template” of how args map to rendering
const TemplateWithListChildren: Story<ComponentProps<typeof DoubleButton>> = (
  args
) => (
  <DoubleButton {...args}>
    <List component="nav" aria-label="main mailbox folders">
      <ListItem button>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItem>
    </List>
  </DoubleButton>
);

export const DefaultWithListPopper = TemplateWithListChildren.bind({});

DefaultWithListPopper.args = {
  ...PrimaryOutlined.args,
};
