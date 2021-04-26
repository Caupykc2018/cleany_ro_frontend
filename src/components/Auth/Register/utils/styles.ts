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
  containerRole: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'Center',
    marginTop: 5,
  },
  dropDownButton: {
    padding: 2,
  },
});

export default styles;
