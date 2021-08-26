import React from "react";
// import { ButtonProps } from "@material-ui/core";
// eslint-disable-next-line import/no-named-default
import { default as MaterialButton } from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  button: {
    padding: '10px 16px !important',
    fontFamily: 'Nunito',
    fontWeight: 'normal',
    fontSize: '16px !important',
    lineHeight: '22px !important',
    letterSpacing: '-1.30385e-09px !important',
    color: '#1B1D1F!important' as '#1B1D1F',
    margin: 4,
    opacity: 0.9,
    textTransform: 'capitalize!important' as 'capitalize',
    '&:hover': {
      background: '#EEF3F9!important' as '#EEF3F9',
    },
    '& span': {
      justifyContent: 'left!important',
    },
  },
  withBorder: {
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.15)!important',
    border: (props: IButton) => props.border || '0.5px solid #D5DFE9!important',
  }
});

interface IButton {
  title: string
  border: any
}

const Button = (props: IButton) => {
  const classes = useStyles(props);

  const { title, border } = props;
  return (
    <MaterialButton
      className={`${classes.button} ${border ? classes.withBorder : ""}`}
    >
      {title}
    </MaterialButton>
  );
};

export default Button;
