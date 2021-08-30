/* eslint-disable react/destructuring-assignment */
import React, { useState } from "react";
// import { ButtonProps } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button } from "@material-ui/core";

const useStyles = makeStyles({
  fitContent: {
    width: "fit-content"
  },
  container: {
    backgroundColor: '#EEEEEF',
    borderRadius: 100,
    padding: 2
  },
  selected:{
    fontWeight: 600,
    color: '#2A323C !important',
    backgroundColor: '#FFFFFF !important',
    background: '#FFFFFF',
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.15)!important',
    borderRadius: 100,
    '&:hover': {
      borderRadius: 100,
    },
  },
  button: {
    '&:hover': {
      borderRadius: 100,
    },
  }
});

interface IItem {
  label: string
  handler: any
}

interface ISwitch {
  items: IItem[]
  selected?: number
}

const Switch = (props: ISwitch) => {
  const classes = useStyles(props);

  const {
    items
  } = props;

  const [selected, setSelected] = useState<number>(props.selected || 0);

  const handleOnSelectClick = (val:number, handler: any) => {
    setSelected(val)
    handler()
  }

  return (
    <Grid container className={`${classes.fitContent} ${classes.container}`}>
      {items.map((item, key) => (
        <Grid key={item.label} item  >
          <Button 
            className={`${classes.button} ${selected===key?classes.selected:""}`} 
            disableFocusRipple
            onClick={()=>handleOnSelectClick(key, item.handler)}
          > 
            {item.label} 
          </Button>
        </Grid>
      ))}
      
    </Grid>
  );
};

export default Switch;
