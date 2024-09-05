import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  Select,
  MenuItem,
  CardActions,
  Switch,
  FormControl,
  FormLabel
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useSelector, useDispatch } from 'react-redux';



export default function CommentModal ({commentsData,addComment,deleteComment,EditComment}) {
  const defaultImage = "images/people/9.png";
  const [open, setOpen] = useState(false);
  const handleCloseModal = () => {
    setOpen(false);
  };
  function createUniqueId() {
    const timestamp = new Date().getTime();
    const randomNumber = Math.floor(Math.random() * 1000000);
    return `${timestamp}-${randomNumber}`;
  }
  const handleClose = () => {
    setEdit(false);
  };
  const color = useSelector((state) => state.counter.color);
  const colorEdit = useSelector((state) => state.counter.colorEdit);
  const isFrench  = useSelector((state) => state.counter.isFrench);

  const handleSave = () => {
    setEdit(false);
    if(selectedComment === null){
      //ajouter un id au commentaire
      elementEdit.id = createUniqueId()

      addComment(elementEdit);
    }else{
      if(defaultImageCheck) {
        console.log('image default')
        elementEdit.image = defaultImage
      }
      console.log(elementEdit)
      EditComment(elementEdit)
    }
  };
  const [edit, setEdit ] = useState(false);
  const [elementEdit , setElementEdit] = useState({});
  const [selectedComment, setSelectedComment] = useState(null);
  const [defaultImageCheck,setDefaultImage] = useState(false);
  const handleEdit = (comment) => {
    setEdit(true);
    setSelectedComment(comment);
    setElementEdit(comment);
  };
  const handleAdd = () => {
    setEdit(true);
    setSelectedComment(null);
    setElementEdit({});
  };

  const changeLabelwithLanguage = () => {
    if(selectedComment === null && isFrench){
      return "Ajouter un commentaire"
    }else if(selectedComment === null && !isFrench){
      return "Add a comment"
    }else if(selectedComment !== null && isFrench){
      return "Modification du commentaire"
    }else if(selectedComment !== null && !isFrench){
      return "Edit comment"
    }
  }


  return (
    <div>
    {edit ? 

      <Dialog open={edit} onClose={handleClose}>
      <DialogTitle>{changeLabelwithLanguage()}</DialogTitle>
    <DialogContent>
    <DialogContentText>
     {isFrench ? "Remplissez les champs suivants" : "Fill the following fields"}
    </DialogContentText>
    <TextField
      margin="dense"
      label={isFrench ? "Auteur et métier" : "Author and job"}
      name="author"
      fullWidth
      value={elementEdit.name}
      onChange={(e)=> setElementEdit({...elementEdit, name:e.target.value})}
    />
    <TextField
      autoFocus
      margin="dense"
      label={isFrench ? "Description" : "Description"}
      name="description"
      fullWidth
      value={elementEdit.text}
      onChange={(e)=> setElementEdit({...elementEdit, text:e.target.value})}

      multiline
    />
    <input type="file" accept="image/*"  onChange={(e)=> setElementEdit({...elementEdit, image:URL.createObjectURL(e.target.files[0])})}/>
    <CardMedia
            component="img" 
            height="300"
            image={(elementEdit.image && !defaultImageCheck )? elementEdit.image : defaultImage}
            alt="green iguana"
    />
    <FormControl style={{flexDirection:"row"}}>
    <FormLabel>{isFrench ? "Mettre l'image par default" : "Set default image"}</FormLabel>
    <Switch
      checked={defaultImageCheck}
      inputProps={{ 'aria-label': 'controlled' }}
      onChange={()=>setDefaultImage(!defaultImageCheck)}
    />
    </FormControl>
    </DialogContent>
    <DialogActions>
    <Button onClick={handleClose}>{isFrench ? "Annuler" : "Cancel"}</Button>
    <Button onClick={handleSave} color="primary">
      {isFrench ? "Enregistrer" : "Save"}
    </Button>
    </DialogActions>
    </Dialog>
    
    
    
    
    :
    <div>
    <Button onClick={() => setOpen(true)} style={{marginTop:10,marginBottom:10,backgroundColor:color,color:"white"}}>{isFrench ? "Ajouter/Modifier les commentaires" : "Add/Edit comments"}</Button>
    <Dialog open={open} >
       <CardActions style={{justifyContent:"center"}}>
            <Button onClick={()=>handleAdd()} size="large" variant="contained" style={{backgroundColor:color,color:"white"}}>{isFrench ? "Ajouter un commentaire" : "Add a comment"}</Button>

        </CardActions>
    <DialogTitle>{isFrench ? 'Modifier une commentaire' : 'Edit a comment'}</DialogTitle>
    <DialogContent>
      {commentsData.map((comment, index) => (
        <Card key={index} sx={{ maxWidth: 545 ,mb:2,mt:2}}>
          <CardMedia
            component="img" 
            height="200"
            image={comment.image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {comment.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {comment.text}
            </Typography>
          </CardContent>
          <CardActions>
            <Button  onClick={() => handleEdit(comment)}  size="small">{isFrench ? "Modifier" : "Edit"}</Button>
            <Button onClick={() => deleteComment(comment)}  size="small">{isFrench ? "Supprimer" : "Delete"}</Button>
          </CardActions>
        </Card>
      ))}
    </DialogContent>
    <DialogActions>
      <Button variant="contained" style={{backgroundColor:color,color:"white"}} onClick={()=>handleCloseModal()}>{isFrench ? "Fermer" : "Close"}</Button>
    </DialogActions>
  </Dialog>
    </div>

  
  
  
  }
  </div>

);
};    