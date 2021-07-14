import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

//Circular Interminate
const useStyles = makeStyles((theme) => ({
    root: {
      position: 'relative',
      left: 20,
      color: 'rgb(204,204,204)',

      

    },
    top: {
      animationDuration: '550ms',
      position: 'relative',
      color: 'rgb(204,204,204)',
      
    },
    circle: {
      strokeLinecap: 'round',
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
          size={30}
          thickness={5}
          {...props}
        />
      </div>
    );
  }
  
