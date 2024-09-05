import React, { useState } from "react";
import { IconButton, Typography } from "@mui/material";
import { Modal, Grid, useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import "animate.css/animate.min.css";
import WallpaperIcon from '@mui/icons-material/Wallpaper';

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
    flexDirection: "column"
  },
  grid: {
    flexGrow: 1,
  },
}));

const GridModal = ({ label, listItems, setImage, handleFileUpload, style }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const smallScreen = useMediaQuery("(max-width: 600px)");
  const mediumScreen = useMediaQuery("(min-width: 601px) and (max-width: 960px)");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const gridItems = listItems;

  let gridCols = 3;
  if (smallScreen) {
    gridCols = 2;
  } else if (mediumScreen) {
    gridCols = 2;
  }

  return (
    <div>
      <Button variant="contained" startIcon={<WallpaperIcon />} onClick={handleOpen} style={style}>

        {label}
      </Button>

      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <div className={`animate__animated animate__zoomIn`}
          onEnter={(e) => e.currentTarget.classList.remove("hidden")} style={{
            backgroundColor: "white",
            minWidth: 300,
            maxWidth: 600,
            padding: 30,
            borderRadius: 10,
            flexDirection: "column"
          }}>
          <h2 id="modal-title">Choisis une image :</h2>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <input type="file" name="file" id="file" className="inputfile" accept="image/*" onChange={(event) => handleFileUpload(event, 0)} />
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <p style={{ color: "red" }}>L'image doit faire 300x300</p>
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
        </div>
      </Modal>
    </div>
  );
};

export default GridModal;