import React, { useState } from 'react';
import { Button, Modal, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useSelector } from 'react-redux';
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    maxWidth: 500,
    width: '90%',
    textAlign: 'center',
  },
  title: {
    marginBottom: 10,
  },
  description: {
    marginBottom: 10,
  },
  image: {
    maxWidth: '100%',
    marginBottom: 10,
  },
  closeButton: {
    marginLeft: 'auto',
  },
}));

const CustomModalItemPortfolio = ({ open, onClose, item }) => {
  const classes = useStyles();
  const isFrench = useSelector((state) => state.counter.isFrench);

  return (
    <Modal
      open={open}
      onClose={onClose}
      className={classes.modal}
    >
      <div className={classes.modalContent}>
        <Typography variant="h5" component="h2" className={classes.title}>
          {item?.name}
        </Typography>
        <Typography variant="body1" className={classes.description}>
          {item?.description}
        </Typography>
        {item?.image && (
          <img src={item?.image} alt="Modal" className={classes.image} />
        )}
      <div className={classes.modalContent}>

<Button variant="contained" onClick={onClose} className={classes.closeButton}>
    {isFrench ? 'Fermer' : 'Close '}
  </Button>
</div>
      </div>

    </Modal>
  );
};

export default CustomModalItemPortfolio;
