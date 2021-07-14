import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';

import Checkmark from './Checkboxes_image/checkmark.svg'

const useStyles = makeStyles({
  root: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  icon: {
    borderRadius: 3,
    width: 24,
    height: 24,
    boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#f5f8fa',
    backgroundImage: Checkmark,

    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)',
    },
  },
  checkedIcon: {
    backgroundColor: 'white',
    backgroundImage: `url(${Checkmark})`,
    '&:before': {
      width: 20,
      height: 50,
      backgroundImage: Checkmark,
      content: '""',
    },

  },
});

function StyledCheckbox(props) {
  const classes = useStyles();

  return (
    <div id="greenhitarea">
    <Checkbox
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      inputProps={{ 'aria-label': 'decorative checkbox' }}
      {...props}
    />
    </div>
  );
}

export  function CustomizedCheckbox() {
  return (
    <div>
      <StyledCheckbox  />
    </div>
  );
}
