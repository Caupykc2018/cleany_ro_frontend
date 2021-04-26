import { makeStyles } from '@material-ui/core';

const styles = makeStyles({
  root: {
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  paper: {
    width: '40%',
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    marginBottom: 10,
  },
  toggleButton: {
    width: 100,
    fontSize: 10,
    padding: 5,
  },
});

export default styles;
