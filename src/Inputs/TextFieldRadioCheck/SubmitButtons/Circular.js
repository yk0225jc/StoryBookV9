import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

//Circular Interminate
const useStyles = makeStyles((theme) => ({
    root: {
      position: 'relative',
      left: 150,
      top: -45,
      color: 'white',

      

    },
    top: {
      animationDuration: '550ms',
      position: 'relative',
      color: 'rgb(204,204,204)',
      
    },
    circle: {
      strokeLinecap: 'round',
      color: 'rgb(242,242,242)'
    },
  }));
  
  export function CircularLoading(props) {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <CircularProgress
          variant="indeterminate"
          disableShrink
          className={classes.top}
          classes={{
            circle: classes.circle,
          }}
          size={19}
          thickness={5}
          {...props}
        />
      </div>
    );
  }
  
