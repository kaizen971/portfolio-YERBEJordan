import React, { useState } from 'react';
import { Button, Modal, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ChromePicker } from 'react-color';
import { useSelector, useDispatch } from 'react-redux';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import { setField } from '../reducers/actions'
import { IconButton } from '@mui/material';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import { useMediaQuery } from 'react-responsive';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  text: {
    color: 'black',
  },
  button: {
    marginTop: theme.spacing(4),
  },
  red: {
    color: 'red',
  },
  green: {
    color: 'green',
  },
}));

const ColorChangingModal = ({ style }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const widthScreen = window.innerWidth;
  const desktopScreen = widthScreen > 768;
  const mobileScreen = useMediaQuery({ maxWidth: 767 });
  const [pickerColor, setPickerColor] = useState('#000000');
  const [showPicker, setShowPicker] = useState(true);
  const color = useSelector((state) => state.counter.color);
  const isFrench = useSelector((state) => state.counter.isFrench);
  const setColorRedux = (color) => {
    return {
      type: 'SET_COLOR',
      payload: color,
    };
  };
  const dispatch = useDispatch()
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleColorChange = (newColor) => {
    setColorRedux(newColor);
    setShowPicker(false);
  };

  const handlePickerChange = (newColor) => {
    setPickerColor(newColor.hex);
    setColorRedux(newColor.hex);
    dispatch(setField("color", newColor.hex));

  };

  const handleShowPicker = () => {
    setShowPicker(!showPicker);
  };

  return (
    <div>
      {mobileScreen ?
        <IconButton style={{backgroundColor:color,top:10 , left:110,position:'absolute', color:'white'}} >
          <FormatColorFillIcon onClick={handleOpen} />
        </IconButton>
        :
        <Button variant="contained" startIcon={<FormatColorFillIcon />} color="primary" onClick={handleOpen} style={style}>
          {isFrench ? "Changer le théme" : "Change theme"}
        </Button>
      }

      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <div className={classes.paper}>
          <Typography id="modal-title" variant="h6" component="h2" style={{ color: color }} className={color}>
            {isFrench ? "Changer la couleur" : "Change  color"}
          </Typography>
          <div style={{ textAlign: "center" }}>
            {showPicker && (
              <ChromePicker
                color={pickerColor}
                onChangeComplete={handlePickerChange}
                disableAlpha={true}
              />
            )}
            <Button variant="contained" color="secondary" style={{ marginTop: 15 }} onClick={handleClose}>
              {isFrench ? "Fermer" : "Close"}
            </Button>

          </div>

        </div>
      </Modal>
    </div>
  );
};

export default ColorChangingModal;

