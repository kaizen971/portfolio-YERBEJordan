import React, { useState } from "react";
import { IconButton, Switch, Typography } from "@mui/material";
import { Modal, Dialog,Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import "animate.css/animate.min.css";
import WallpaperIcon from '@mui/icons-material/Wallpaper';
import { ChromePicker } from 'react-color';
import { useSelector, useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",


  },
  paper: {
    backgroundColor: "white",
    minWidth: 300,
    maxWidth: 600,
    padding: 30,
    borderRadius: 10,

  },
  grid: {
    flexGrow: 1,
  },
}));

const GridModal = ({ label, listItems, setImage, handleFileUpload, style, setImageBackgroundColorUnique,setEnableBackgroundColorHome,disableBackgroundColorType,disableResponsive}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const disableBackgroundColor = useSelector((state) => state.counter[disableBackgroundColorType]);
  const [pickerColor, setPickerColor] = useState('#000000');
  const [showPicker, setShowPicker] = useState(disableBackgroundColor);

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const color = useSelector((state) => state.counter.color);
  const widthScreen = window.innerWidth;
  const desktopScreen = widthScreen > 768;
  const mobileScreen = useMediaQuery({ maxWidth: 767 });
  const isFrench = useSelector((state) => state.counter.isFrench);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleColorPicker = () => {
    setShowPicker(!disableBackgroundColor);
    setEnableBackgroundColorHome(!showPicker);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleColorChange = (newColor) => {
    setPickerColor(newColor);
    setImageBackgroundColorUnique(newColor);
  };

  const gridItems = listItems;

  let gridCols = 3;
  if (isMobile) {
    gridCols = 2;
  } else if (isTablet) {
    gridCols = 2;
  }

  return (
    <div>
    { mobileScreen && !disableResponsive ?      
      <IconButton aria-label="delete" onClick={handleOpen} style={{backgroundColor:color,top:10 , left:60,position:'absolute', color:'white'}}>
          <WallpaperIcon />
      </IconButton>
      :
      <Button variant="contained"  startIcon={<WallpaperIcon />}  onClick={handleOpen} style={style}>

        {label}
      </Button>}

      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        style={{zoom:mobileScreen ? 0.6 : 0}}
      >

      <div className={`${classes.paper} animate__animated animate__zoomIn`}
          onEnter={(e) => e.currentTarget.classList.remove("hidden")}>
             
          <h2 id="modal-title">{isFrench ? "Choisis une image" : "Choose an image"}</h2>
          {!showPicker &&  <div >
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <input type="file" name="file" id="file" className="inputfile" accept="image/*" onChange={(event) => handleFileUpload(event, 0)} />
          </div>
       
          <div style={{ width: "100%", height: 1, backgroundColor: "black", marginBottom: 10 }}></div>
          <Grid container spacing={2} className={classes.grid}>
            {gridItems.map((item, index) => (
              <Grid item key={index} xs={12 / gridCols}>

                <div style={{ border: "1px solid black", height: 100, cursor: "pointer" }} onClick={(event) => { setImage(item.image); handleClose() }} >
                  <a >
                    <img src={item.image} alt="preview" style={{ width: "100%", height: "100%" }} />
                  </a>
                </div>
              </Grid>
            ))}
          </Grid>
          <div style={{ width: "100%", height: 1, backgroundColor: "black", marginBottom: 10,marginTop:10 }}></div>
          </div>}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Typography variant="h6" style={{ marginRight: 10 }}>{isFrench ? "Couleur de fond" : "Background color"}</Typography>

          <Switch checked={disableBackgroundColor} onChange={handleColorPicker} label={"Couleur unique"}/>
          </div>


          <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>

          {showPicker && (
            <ChromePicker
              color={pickerColor}
              onChangeComplete={handleColorChange}
              disableAlpha={true}
            />
          )}
          </div>
          <Button variant="contained" color="secondary" style={{ marginTop: 15, backgroundColor:color }} onClick={handleClose}>
            {isFrench ? "Fermer" : "Close"}
            </Button>
        </div>

      </Modal>
    </div>
  );
};

export default GridModal;