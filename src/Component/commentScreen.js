
import { useState } from 'react';
import { TestimonialCarousel } from './Caroussel';
import ModalEditBackground from './modalEditBackground';
import {setCommentairesBackground,setCommentaireText,setTabComments} from '../reducers/actions';
import { useSelector, useDispatch } from 'react-redux';
import {setField} from '../reducers/actions'


export default function CommentScreen() {
    
    const dispatch = useDispatch();
    const setImage = (commentairesBackground) => dispatch(setCommentairesBackground(commentairesBackground));
    const setText = (commentaireText) => dispatch(setCommentaireText(commentaireText));
    const setTabComment = (tabComment) => dispatch(setTabComments(tabComment));
    const tabComment = useSelector((state) => state.counter.tabComment);
    const addComment = (comment) => {
        if (!comment.image) {
            comment.image = "images/people/9.png"
        }
        setTabComment([...tabComment, comment])


        setTimeout(() => {
            setTabComment([...tabComment, comment])
        }, 1000);
    }
   
    const deleteComment = (comment) => {
        let newTabComment = tabComment.filter((element) => element !== comment)

        setTabComment(newTabComment)

        setTimeout(() => {
            setTabComment(tabComment.filter((element) => element !== comment))
        }, 1000);
    }
    const color = useSelector((state) => state.counter.color);
    const colorEdit = useSelector((state) => state.counter.colorEdit);

    const EditComment = (comment) => {
        //Editer un commentaire déjà existant
        if (!comment.image) {
            comment.image = "images/people/9.png"
        }
        for (let i = 0; i < tabComment.length; i++) {
            if (tabComment[i].id === comment.id) {
                tabComment[i] = comment;
            }
        }
        setTabComment([...tabComment])
        setTimeout(() => {
            setTabComment([...tabComment])
        }
            , 1000);
    }
    const [file, setFile] = useState("");

    
    const image = useSelector((state) => state.counter.commentairesBackground);
    const text = useSelector((state) => state.counter.commentaireText);
    const isFrench = useSelector((state) => state.counter.isFrench);
    const [showModal, setShowModal] = useState(false);

    const listItems = [{ id: 0, image: "images/misc/3.jpg" },
    { id: 1, image: "images/misc/2a.jpg" },
    { id: 2, image: "images/misc/2b.jpg" },
    { id: 4, image: "images/misc/3a.jpg" },
    { id: 5, image: 'images/background/green-01.webp' },
    { id: 6, image: "images/background/peinture.jpg" },
    { id: 7, image: "images/background/mosaiqueTortue.jpg" },
    { id: 8, image: "images/background/paysage.jpg" },
    ];
    const [edit, setEdit] = useState(false);
    const handleFileUpload = (event, id) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            if (id == 0) {
                setImage(reader.result);
            }
        };
        reader.readAsDataURL(file);
        setFile(event.target.files[0]);
    };

    const dispatchEnableBackgroundColorComment= (value) =>{
        dispatch(setField("disableBackgroundColorComment",value))
      }

      const dispatchBackgroundColorUniqueComment = (value) =>{
        dispatch(setField("backgroundColorUniqueComment",value.hex))
      }
      const backgroundColorUniqueComment = useSelector((state) => state.counter.backgroundColorUniqueComment);
      const disableBackgroundColorComment = useSelector((state) => state.counter.disableBackgroundColorComment);
      const hideEdit = useSelector((state) => state.counter.hideEdit);

    return (
        <section id="section-testimonial" class="custom-1" data-bgcolor="#D1F3E5" style={{ backgroundImage: disableBackgroundColorComment ? "none" : image ? `url(${process.env.PUBLIC_URL}${image})` : `url(${process.env.PUBLIC_URL}/images/background/green-01.webp)`,  backgroundColor:backgroundColorUniqueComment, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
           {!hideEdit &&<ModalEditBackground setEnableBackgroundColorHome={dispatchEnableBackgroundColorComment} setImageBackgroundColorUnique={dispatchBackgroundColorUniqueComment} showModal={showModal} setShowModal={setShowModal} handleFileUpload={(event) => handleFileUpload(event, 0)} style={{ marginTop: 10, marginBottom: 10, backgroundColor: color, position: "absolute", top: 50, left: 50 }} listItems={listItems} setImage={setImage} label={isFrench ? "Changer le fond d'image" : "Change Background"} />}

            <div class="container">
                <div class="row">
                    <div class="col-lg-6 offset-lg-3">
                        <div class="text-center">

                            <h2>{isFrench ? "Commentaires" : "Testimonials"}</h2>
                            <p>{text}</p>
                            {!edit && !hideEdit &&<div style={{ position: "absolute", top: -20, right: 30 }}>
                                <a href={"#modif"} class="circle-icon" style={{backgroundColor:color}} onClick={() => setEdit(true)}><i class="fa fa-pencil fa-lg" style={{ color: "black" }}></i></a>
                            </div>}
                            {edit &&  !hideEdit &&<div style={{ position: "absolute", top: -20, right: 30 }}>
                                <a href={"#modif"}  class="circle-icon" style={{backgroundColor:color}} onClick={() => { setEdit(false) }}><i class="fa fa-check fa-lg" style={{ color: "black" }}></i></a>
                            </div>}
                            {edit &&  !hideEdit &&<textarea type="text" style={{ width: "100%", height: 100 }} onChange={(text) => setText(text.target.value)} defaultValue={text} placeholder="Title" />}
                            <div class="spacer-30"></div>
                        </div>
                    </div>
                </div>
                {tabComment && <TestimonialCarousel comments={tabComment} addComment={addComment} deleteComment={deleteComment} EditComment={EditComment} />}
            </div>
        </section>
    )
}