import { makeStyles } from '@material-ui/core';
import { CSSProperties } from 'react';

const centerAlign: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const styles = makeStyles({
  container: {
    ...centerAlign,
  },
  containerFields: {
    ...centerAlign,
    marginBottom: 15,
  },
});

export default styles;
