import React, { useState } from 'react';
import { Button, Modal, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ChromePicker } from 'react-color';
import { useSelector, useDispatch } from 'react-redux';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import { setField } from '../reducers/actions'
import { IconButton } from '@mui/material';
import BrushIcon from '@mui/icons-material/Brush';
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

const ModalTextColor = ({ style,titleColor,subTitle , styleMobile}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [pickerColor, setPickerColor] = useState('#000000');
  const [showPicker, setShowPicker] = useState(true);
  const color = useSelector((state) => state.counter.color);
  const titleHomeTextcolor = useSelector((state) => state.counter[titleColor]);
  const subTitleHomeTextcolor = useSelector((state) => state.counter[subTitle]);
  const isFrench = useSelector((state) => state.counter.isFrench);

  const widthScreen = window.innerWidth;
  const desktopScreen = widthScreen > 768;
  const mobileScreen = useMediaQuery({ maxWidth: 767 });

  const dispatch = useDispatch()
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePickerTitleChange = (newColor) => {
    setPickerColor(newColor.hex);
    dispatch(setField(titleColor, newColor.hex));
  };

  const handlePickerSubTitleChange = (newColor) => {
    setPickerColor(newColor.hex);
    dispatch(setField(subTitle, newColor.hex));
  };

  return (
    <div>

      {mobileScreen ?
      <IconButton  style={styleMobile}>
        <BrushIcon onClick={handleOpen}/>
      </IconButton>
      :
      <Button variant="contained" startIcon={<BrushIcon />} color="primary" onClick={handleOpen} style={style}>
        {isFrench ? 'Changer la couleur du texte' : 'Change text color'}
      </Button>
      }
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        style={{zoom:mobileScreen ? 0.8 : 0}}

      >
        <div className={classes.paper}>
          <Typography id="modal-title" variant="h6" component="h2" className={color}>
            {isFrench ? 'Changer la couleur du texte' : 'Change text color'}
          </Typography>
          <div style={{ textAlign: "center" }}>
            <div style={{ textAlign: "center" }}>

              <Typography id="modal-title" variant="h6" component="h2" style={{color:titleHomeTextcolor}}>
                {isFrench ? 'Titre' : 'Title'}
              </Typography>
              {showPicker && (
                <ChromePicker
                  color={titleHomeTextcolor}
                  onChangeComplete={handlePickerTitleChange}
                  disableAlpha={true}
                />
              )}
            </div>
            <div style={{ textAlign: "center" , marginTop:20}}>

              <Typography id="modal-title" variant="h6" component="h2" style={{color:subTitleHomeTextcolor}}>
                {isFrench ? 'Sous-titre' : 'Subtitle'}
              </Typography>
              {showPicker && (
                <ChromePicker
                  color={subTitleHomeTextcolor}
                  onChangeComplete={handlePickerSubTitleChange}
                  disableAlpha={true}
                />
              )}
            </div>
          </div>

          <Button variant="contained" color="secondary" style={{ marginTop: 15 }} onClick={handleClose}>
            {isFrench ? 'Fermer' : 'Close'}
          </Button>


        </div>
      </Modal>
    </div>
  );
};

export default ModalTextColor;

