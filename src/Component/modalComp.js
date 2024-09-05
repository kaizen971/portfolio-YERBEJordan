import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Slider,
  Typography,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';


const ModalAjoutCompetence = ({setTabCompetence,nbrElement,tabCompetence }) => {
  const [nom, setNom] = useState('');
  const [competences, setCompetences] = useState([]);
  const [progression, setProgression] = useState(0);
  const [open, setModalOpen] = useState(false);
  const color = useSelector((state) => state.counter.color);
  const colorEdit = useSelector((state) => state.counter.colorEdit);
  const isFrench = useSelector((state) => state.counter.isFrench);

  const ajouterCompetence = (competence) => {
    setCompetences([...competences, competence]);
    console.log(progression)
    setTabCompetence( [...tabCompetence,{id:tabCompetence.length,competence:nom,pourcentage:progression}])
    console.log(tabCompetence)
    setModalOpen(false);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };


  const handleSliderChange = (event, newValue) => {
    setProgression(newValue);

  };

  return (
    <div>
    <Button onClick={() => setModalOpen(true)} style={{marginTop:10,marginBottom:10,backgroundColor:color,color:"white"}}>{isFrench ? 'Ajouter une compétence' : 'Add a skill'}</Button>
    <Dialog open={open} onClose={handleCloseModal}>
      <DialogTitle>{isFrench ? 'Ajouter une compétence' : 'Add a skill'}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label={isFrench ? 'Nom de la compétence' : 'Skill name'}
          fullWidth
          value={nom}
          onChange={(event) => setNom(event.target.value)}
        />
        <Typography id="slider-label">{isFrench ? `Progression (${progression}%)` :`Progress (${progression}%)`} </Typography>
        <Slider
          value={progression}
          onChange={handleSliderChange}
          aria-labelledby="slider-label"
          marks
          step={10}
          min={0}
          max={100}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseModal}>{isFrench ? 'Annuler' : 'Cancel'}</Button>
        <Button onClick={ajouterCompetence}>{isFrench ? 'Ajouter' : 'Add'}</Button>
      </DialogActions>
    </Dialog>
    </div>
  );
};

export default ModalAjoutCompetence;
