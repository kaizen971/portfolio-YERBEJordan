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
  Box
 } from "@mui/material";
import OwlCarousel from 'react-owl-carousel';
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CommentModal from "./modalAddComment";
import { useSelector } from "react-redux";

const Testimonial = ({ name, image, text }) => (
  <blockquote className="testimonial-big" >
    <img src={image} alt="" />
    {text}
    <span className="name">{name}</span>
  </blockquote>
);

export const TestimonialCarousel = ({comments,addComment,deleteComment,EditComment}) => {
  const hideEdit = useSelector((state) => state.counter.hideEdit);

  return(
  <div className="row">
    <div className="col-md-8 offset-md-2" >
    { !hideEdit &&<CommentModal commentsData={comments} addComment={addComment} deleteComment={deleteComment} EditComment={EditComment}/>}

      {comments &&<OwlCarousel
        className="owl-carousel owl-theme wow fadeInUp"
        items={1}
        loop
        autoplay
      >
      

        {comments.map((comment, index) => (
          <Testimonial
            key={index}
            name={comment.name}
            image={comment.image}
            text={comment.text}
          />
        ))}
      </OwlCarousel>}
    </div>
  </div>
  )
        };