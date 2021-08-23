import React, { ComponentProps } from "react";

import { Story, Meta } from "@storybook/react";

import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";

import DylcButton from "./DylcButton";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Components/Button",
  component: DylcButton,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof DylcButton>> = (args) => (
  <DylcButton {...args} />
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
const TemplateWithChildren: Story<ComponentProps<typeof DylcButton>> = (
  args
) => (
  <DylcButton {...args}>
    <h3 style={{ margin: 8 }}> Hello there </h3>
  </DylcButton>
);

export const DefaultWithSimplePopper = TemplateWithChildren.bind({});

DefaultWithSimplePopper.args = {
  ...PrimaryOutlined.args,
};
//👇 We create a “template” of how args map to rendering
const TemplateWithListChildren: Story<ComponentProps<typeof DylcButton>> = (
  args
) => (
  <DylcButton {...args}>
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
  </DylcButton>
);

export const DefaultWithListPopper = TemplateWithListChildren.bind({});

DefaultWithListPopper.args = {
  ...PrimaryOutlined.args,
};
