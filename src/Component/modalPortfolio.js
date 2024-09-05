import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Modal,
  Backdrop,
  Fade,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  TextField,
} from '@material-ui/core';
import { Add, Delete } from '@material-ui/icons';
import { useSelector } from 'react-redux';


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: '50%',
    maxWidth: '600px',
  },
  button: {
    margin: theme.spacing(1),
  },
  list: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(2),
  },
}));

export default function MyModal({ sections, open, onClose, onSave }) {
  const classes = useStyles();
  const [newSectionName, setNewSectionName] = useState('');
  const [newSectionFilter, setNewSectionFilter] = useState('');
  const isFrench  = useSelector((state) => state.counter.isFrench);
  const handleSave = () => {
    onSave(sections);
    onClose();
  };

  const handleAddSection = () => {
    const newId = sections.length > 0 ? sections[sections.length - 1].id + 1 : 1;
    const newSection = { id: newId, name: newSectionName, filter: `.${newSectionName}` };
    onSave([...sections, newSection]);
    setNewSectionName('');
    setNewSectionFilter('');
  };

  const handleDeleteSection = (id) => {
    onSave(sections.filter((section) => section.id !== id));
  };

  const renderSection = (section) => (
    <ListItem key={section.id}>
      <ListItemText primary={section.name} secondary={section.filter} />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteSection(section.id)}>
          <Delete />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );

  return (
    <Modal
      className={classes.modal}
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <h2 id="modal-title">{isFrench ? "Modifier des sections" :  "Edit sections"}</h2>
          <TextField
            label={isFrench ? "Nom de la section" : "Section name"}
            value={newSectionName}
            onChange={(e) => setNewSectionName(e.target.value)}
            margin="normal"
            fullWidth
          />
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            startIcon={<Add />}
            onClick={handleAddSection}
          >
           {isFrench ?  "Ajouter une section" : "Add a section"}
          </Button>
          <List className={classes.list}>
            {sections.map((section) => renderSection(section))}
          </List>
          <Button className={classes.button} variant="contained" onClick={handleSave}>
            {isFrench ? "Sauvegarder une section" : "Save a section"}
          </Button>
        </div>
      </Fade>
    </Modal>
  );
}
