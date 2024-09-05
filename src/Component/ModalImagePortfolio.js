import { useState } from 'react';
import { Grid, IconButton, Modal, Box, Typography, Button, FormControl, InputLabel, Select,  MenuItem, TextField, } from '@mui/material';
import { Delete, Add } from '@mui/icons-material';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

import styled from 'styled-components';

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
    maxWidth: '1000px',
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


export const ModalExample = ({ imagesPortfolio, setImagePortfolio,tabSectionPortfolios }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const color = useSelector((state) => state.counter.color);
  const isFrench = useSelector((state) => state.counter.isFrench);
  const widthScreen = window.innerWidth;
  const mobileScreen = useMediaQuery({ maxWidth: 767 });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDelete = (id) => {
    const newImages = imagesPortfolio.filter((image) => image.id !== id);
    setImagePortfolio(newImages);
  };

  const handleImageSelect = (event) => {
    const file = event.target.files[0];
    const maxSize = 5 * 1024 * 1024; // 5 Mo
    if (file && file.size <= maxSize) {
    const reader = new FileReader();
    localStorage.setItem('saveImage', JSON.stringify(event.target.files[0]));
    reader.onloadend = () => {
      const base64Image = reader.result;
      localStorage.setItem("myImage", base64Image);
      setSelectedImage(base64Image);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  } else if (file) {
    alert("Le fichier est trop volumineux (max 5 Mo)");
  }
  
  };

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleDescription = (event) => {
    setDescription(event.target.value);
  };


  const handleFilterSelect = (event) => {
    setSelectedFilter(event.target.value);
  };

  const handleSubmit = () => {
    const newImage = { id: imagesPortfolio.length + 1, name: name,description:description , filter: selectedFilter, image: selectedImage };
    setImagePortfolio([...imagesPortfolio, newImage]);
    setSelectedImage(null);
    setSelectedFilter('');
    setOpen(false);
  };

  return (
    <div>
    <Button onClick={handleOpen} variant="contained" style={{marginTop:10,marginBottom:10,backgroundColor:color}}>
        {isFrench ? "Ajouter une image" : "Add a image" }
      </Button>      
      
      <Modal
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      style={{zoom: mobileScreen ? 0.6 : 0}}

    >    
        <Box sx={{ width: 800, bgcolor: 'background.paper' , p:5}}>
          <Typography variant="h4">{isFrench ? "Image de portfolio" : "Portfolio Image" }</Typography>

          <div style={{ maxHeight: '600px', overflow: 'auto' }}> 
          <Grid container xs={12} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' , alignSelf:"center", alignItems:"center",flexDirection:"column"}}>
              <Box sx={{ p: 1 }}>
                {selectedImage ? (
                  <img src={selectedImage} alt="New Image" style={{ width: 200, height: 'auto', objectFit: 'cover', borderRadius: 8, transition: 'transform .2s' }} onMouseOver={(event) => event.currentTarget.style.transform = 'scale(1.1)'} onMouseOut={(event) => event.currentTarget.style.transform = 'scale(1)'} />
                ) : (
                  <label htmlFor="image-upload" style={{ display: 'block', width: '100%', height: '100%', cursor: 'pointer' }}>
                    <Box sx={{ bgcolor: 'grey.200', p: 1, borderRadius: 8 }} fullWidth>
                      <Typography variant="subtitle1" sx={{ textAlign: 'center' }} >{isFrench ? "Ajouter une image" : "Add a image" }</Typography>
                    </Box>
                  </label>
                )}
          
              </Box>
              <Box>
                <TextField id="outlined-basic" label={isFrench ? "Nom de l'image" : "Image name"} variant="outlined" onChange={handleName} />
              </Box>
              <Box>
                <TextField 
                  id="outlined-multiline-static"
                  label="Description"
                  multiline
                  rows={4}
                  defaultValue=""
                  onChange={handleDescription}
                  sx={{marginTop:2}}
                />

                </Box>
              <Box sx={{ p: 1 }}>

              <input id="image-upload" type="file" accept="image/*" onChange={handleImageSelect} style={{ display: 'none' }} />
                <FormControl variant="outlined" sx={{ mt: 1, minWidth: 120 }}>
                  <InputLabel id="filter-label">{isFrench ? "Filtre" : "filter"}</InputLabel>
                  <Select labelId="filter-label" value={selectedFilter} onChange={handleFilterSelect} label="Filter">
                    {
                      tabSectionPortfolios.map((section) => (
                        <MenuItem value={section.name}>{section.name}</MenuItem>
                      ))
                    }
                  </Select>
                </FormControl>
                </Box>
              <Box sx={{ p: 1,justifyContent:"center",textAlign:"center",alignSelf:"center" }}>
              <Button aria-label="add" variant="contained" onClick={handleSubmit} disabled={!selectedImage || !selectedFilter}>{isFrench ? "Ajouter" : "Add"}</Button>
              </Box>
            </Grid>
          <Grid container >
          
            {imagesPortfolio.map((image) => (
              <Grid key={image.id} item xs={4} sx={{ position: 'relative' }}>
                <Box sx={{ p: 1 }}>
                  <img src={image.image} alt={image.name} style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: 8, transition: 'transform .2s' }} onMouseOver={(event) => {event.currentTarget.style.transform = 'scale(1.1)' ; event.currentTarget.style.backgroundColor = 'red' }} onMouseOut={(event) => event.currentTarget.style.transform = 'scale(1)'} />
                  <Typography variant="subtitle1" sx={{ mt: 1 }}>{image.name}</Typography>
                  <Typography variant="caption">{image.filter}</Typography>
                  <IconButton aria-label="delete" sx={{ position: 'absolute', top: 0, left: 0 }} onClick={() => handleDelete(image.id)}><Delete /></IconButton>
                </Box>
              </Grid>
            ))}

          </Grid>
          </div>
          <Button variant="contained" color="secondary" style={{ marginTop: 15, backgroundColor:color }} onClick={handleClose}>
              {isFrench ? "Fermer" : "Close"}
            </Button>
        </Box>
      </Modal>
    </div>

  );
};