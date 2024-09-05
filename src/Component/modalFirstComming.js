import React, { useState, useEffect } from 'react';
import { Button, Modal, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';

const WelcomeModal = () => {
  const [open, setOpen] = useState(false);
  const color = useSelector((state) => state.counter.color);
  const isFrench = useSelector((state) => state.counter.isFrench);

  useEffect(() => {
    const visited = localStorage.getItem('visited');
    if (!visited) {
      setOpen(true);
      localStorage.setItem('visited', 'true');
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'white',
          padding: '20px',
          maxWidth: '400px',
          borderRadius: '4px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
        }}
      >
        <Typography variant="h5" style={{ marginBottom: '20px', fontWeight: 'bold', fontSize: '24px' }}>
        {isFrench ? "Bienvenue sur PortfolioExpress!" : "Welcome to PortfolioExpress!"}
        </Typography>
        <Typography variant="body1" style={{ marginBottom: '20px', fontSize: '16px' }}>
        {isFrench ? "Grâce à ce site, vous pourrez faire une demande pour créer votre propre portfolio." : "With this site, you will be able to make a request to create your own portfolio."}
        </Typography>
        <div style={{ margin: '20px 0' }}>
          <Typography variant="body2" style={{ marginBottom: '10px' }}>
          {isFrench ? <Typography variant="body1" style={{ marginBottom: '20px', fontSize: '16px' }}><strong style={{ marginRight: '8px' }}>Etape 1:</strong>  Faites les modifications sur le site en utilisant les icônes de modifications.</Typography>

          :
          <Typography variant="body1" style={{ marginBottom: '20px', fontSize: '16px' }}> <strong style={{ marginRight: '8px' }}>Step 1:</strong>         Make the changes on the site using the edit icons.</Typography>
          }
          </Typography>
          {isFrench ? <Typography variant="body1" style={{ marginBottom: '20px', fontSize: '16px' }}> <strong style={{ marginRight: '8px' }}>Etape 2:</strong> Envoyez une demande pour que je puisse créer votre portfolio.</Typography>
          :
          <Typography variant="body1" style={{ marginBottom: '20px', fontSize: '16px' }}> <strong style={{ marginRight: '8px' }}>Step 2:</strong> Send a request so that I can create your portfolio.</Typography>}
        </div>
        <Button variant="contained" onClick={handleClose} style={{ backgroundColor: color, color: 'white', alignSelf: 'center' ,justifyContent:'center'}}>
         {isFrench ? "Compris" : "Understood"}
        </Button>
      </div>
    </Modal>
  );
};

export default WelcomeModal;

