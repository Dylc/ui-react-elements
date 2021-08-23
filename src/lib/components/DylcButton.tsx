import React from "react";
import {
  SvgIconProps,
  ButtonGroupProps,
  ButtonProps,
  FadeProps,
  PopperProps,
  PaperProps,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Popper from "@material-ui/core/Popper";
import Fade from "@material-ui/core/Fade";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    borderRadius: (props: IDylcButton) => props.borderRadius,
  },
  secButRoot: {
    paddingLeft: 4,
    paddingRight: 4,
  },
  paper: {
    marginTop: 8,
    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.15)!important",
    border: "0.5px solid #D5DFE9!important",
  },
});

interface IDylcButton {
  mainButtonTitle: string;
  mainButtonOnClickHandler?: () => void;
  secButtonOnClickHandler?: () => void;
  children?: any;
  borderRadius?: number;
  buttonGroupProps?: ButtonGroupProps;
  mainButtonProps?: ButtonProps;
  secButtonProps?: ButtonProps;
  fadeProps?: FadeProps;
  popperProps?: PopperProps;
  paperProps?: PaperProps;
  secButtonTitle?: string | React.ReactElement<SvgIconProps>;
}

const DylcButton = (props: IDylcButton) => {
  const classes = useStyles(props);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const {
    children,
    buttonGroupProps,
    mainButtonOnClickHandler,
    secButtonOnClickHandler,
    mainButtonProps,
    secButtonProps,
    fadeProps,
    popperProps,
    paperProps,
    mainButtonTitle,
    secButtonTitle,
  } = props;

  const handleOnSecButtonClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  return (
    <div>
      <ButtonGroup classes={{ root: classes.root }} {...buttonGroupProps}>
        <Button
          classes={{ root: classes.root }}
          onClick={mainButtonOnClickHandler}
          {...mainButtonProps}
        >
          {mainButtonTitle}
        </Button>
        <Button
          classes={{
            root: `${classes.root} ${
              typeof secButtonTitle === "string" ? "" : classes.secButRoot
            }`,
          }}
          onClick={
            children
              ? (e) => handleOnSecButtonClick(e)
              : secButtonOnClickHandler
          }
          {...secButtonProps}
        >
          {secButtonTitle || <ArrowDropDownIcon />}
        </Button>
      </ButtonGroup>
      <Popper open={open} anchorEl={anchorEl} transition {...popperProps}>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350} {...fadeProps}>
            <Paper className={classes.paper} {...paperProps}>
              {children}
            </Paper>
          </Fade>
        )}
      </Popper>
    </div>
  );
};

export default DylcButton;
