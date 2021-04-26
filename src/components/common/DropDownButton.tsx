import React, { useState, MouseEvent, useCallback, useEffect, FC } from 'react';
import { Button, makeStyles, Popover } from '@material-ui/core';

interface Props {
  list: Array<{ display: string; value: any }>;
  initialValue: any;
  onChangeValue?: (value: any) => void;
  variant?: 'text' | 'outlined' | 'contained' | undefined;
  styleClasses?: {
    button?: string;
  };
}

const useStyles = makeStyles({
  popover: {
    display: 'flex',
    flexDirection: 'column',
  },
});

const DropDownButton: FC<Props> = ({
  list = [],
  initialValue,
  onChangeValue,
  variant,
  styleClasses,
}) => {
  const [anchor, setAnchor] = useState<Element | null>(null);
  const [value, setValue] = useState<any>(null);

  const classes = useStyles();

  const handleOnClickButton = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => setAnchor(event.currentTarget),
    []
  );

  const handleOnClosePopover = useCallback(() => setAnchor(null), []);

  const handleOnClickButtonItem = useCallback(
    (value: any) => () => {
      setValue(value);
      handleOnClosePopover();
    },
    []
  );

  useEffect(() => {
    setValue(initialValue);
  }, []);

  useEffect(() => {
    if (onChangeValue && value) {
      onChangeValue(value);
    }
  }, [value, onChangeValue]);

  return (
    <>
      <Button
        onClick={handleOnClickButton}
        variant={variant}
        className={styleClasses?.button}
      >
        {list.find(({ value: valueItem }) => valueItem === value)?.display}
      </Button>
      <Popover
        open={Boolean(anchor)}
        anchorEl={anchor}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        onClose={handleOnClosePopover}
      >
        <div className={classes.popover}>
          {list.map(({ display, value: valueItem }, index) => (
            <Button
              key={index}
              onClick={handleOnClickButtonItem(valueItem)}
              disabled={valueItem === value}
            >
              {display}
            </Button>
          ))}
        </div>
      </Popover>
    </>
  );
};

export default DropDownButton;
