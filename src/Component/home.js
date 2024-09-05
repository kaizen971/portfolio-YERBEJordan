
import React, { useState } from 'react'
import ModalEditBackground from './modalEditBackground';
import ColorChangingModal from './modalColorChange'
import { useSelector, useDispatch } from 'react-redux';
import { setField } from '../reducers/actions'
import ModalTextColor from './modalTextColor';
import Button from "@mui/material/Button";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { IconButton } from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import WelcomeModal from './modalFirstComming';
import { useMediaQuery } from 'react-responsive';

export default function Home() {
  const [edit, setEdit] = useState(false);
  const widthScreen = window.innerWidth;
  const desktopScreen = widthScreen > 768;
  const mobileScreen = useMediaQuery({ maxWidth: 767 });
  const [showModal, setShowModal] = useState(false);
  const title = useSelector((state) => state.counter.titleText);
  const description = useSelector((state) => state.counter.descriptionText);
  const dispatch = useDispatch()
  const [file, setFile] = useState("");
  const color = useSelector((state) => state.counter.color);
  const image = useSelector((state) => state.counter.backgroundFirst);
  const backgroundColorUniqueHome = useSelector((state) => state.counter.backgroundColorUniqueHome);
  const disableBackgroundColorHome = useSelector((state) => state.counter.disableBackgroundColorHome);
  const titleHomeTextcolor = useSelector((state) => state.counter.titleHomeTextcolor);
  const subTitleHomeTextcolor = useSelector((state) => state.counter.subTitleHomeTextcolor);
  const hideEdit = useSelector((state) => state.counter.hideEdit);

  const handleFileUpload = (event, id) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      if (id == 0) {
        dispatchBackground(reader.result);
      }
    };
    reader.readAsDataURL(file);
    setFile(event.target.files[0]);
  };
  const listItems = [{ id: 0, image: "images/misc/3.webp" },
  { id: 1, image: "images/misc/2a.webp" },
  { id: 2, image: "images/misc/2b.webp" },
  { id: 3, image: "images/misc/3.webp" },
  { id: 4, image: "images/misc/3a.webp" },
  { id: 5, image: 'images/background/green-01.webp' },
  { id: 6, image: "images/background/peinture.webp" },
  { id: 7, image: "images/background/mosaiqueTortue.webp" },
  { id: 8, image: "images/background/paysage.webp" },
  ];

  const dispatchBackground = (value) => {

    dispatch(setField("backgroundFirst", value))

  }
  const dispatchTitle = (value) => {
    dispatch(setField("titleText", value))
  }
  const dispatchDescription = (value) => {
    dispatch(setField("descriptionText", value))
  }
  const colorEdit = useSelector((state) => state.counter.colorEdit);
  const dispatchBackgroundColorUniqueHome = (value) => {
    dispatch(setField("backgroundColorUniqueHome", value.hex))
  }
  const dispatchEnableBackgroundColorHome = (value) => {
    dispatch(setField("disableBackgroundColorHome", value))
  }
  const dispatchHideEdit = (value) => {
    dispatch(setField("hideEdit", value))
  }

  const isFrench = useSelector((state) => state.counter.isFrench);


  const changeLanguage = (value) => {
      
      dispatch(setField("isFrench", value))

  }

  const convertTitleButton = () => {
    if (isFrench && hideEdit) {
      return "Cacher les boutons d'édition"
    }
    else if (!isFrench && hideEdit) {
      return "Hide edit buttons"
    }
    else if (isFrench && !hideEdit) {
      return "Visualisation les boutons d'édition"
    }
    else if (!isFrench && !hideEdit) {
      return "Show edit buttons"
    }
  }



  return (
    <div class="no-bottom no-top" id="content">

      <div id="top"></div>

      <section id="section-hero" class="vertical-center custom-1" aria-label="section" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/background/green-01.webp)` ,  backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
        <WelcomeModal />
        <div class="container">
          {!hideEdit && <ModalEditBackground disableBackgroundColorType={"disableBackgroundColorHome"} showModal={showModal} setShowModal={setShowModal} handleFileUpload={(event) => handleFileUpload(event, 0)} listItems={listItems} setEnableBackgroundColorHome={dispatchEnableBackgroundColorHome} style={{ marginTop: 10, marginBottom: 10, backgroundColor: "#10afa0", position: "absolute", top: 100, left: 100, backgroundColor: color }} setImage={dispatchBackground} setImageBackgroundColorUnique={dispatchBackgroundColorUniqueHome} label={isFrench ? "Changer le fond d'image" : "Change background image"} />}
          {!hideEdit && <ColorChangingModal style={{ marginTop: 10, marginBottom: 10, backgroundColor: color, position: "absolute", top: 150, left: 100 }} />}
          {!hideEdit && <ModalTextColor styleMobile={{backgroundColor:color,top:10 , left:160 ,position:'absolute', color:'white'}} style={{ marginTop: 10, marginBottom: 10, backgroundColor: color, position: "absolute", top: 200, left: 100 }} titleColor={"titleHomeTextcolor"} subTitle={"subTitleHomeTextcolor"} />}
          <div class="row align-items-center">
            <div class="col-lg-5 offset-lg-4 align-center">
              <div id="logo" style={{ display: "flex", position: "relative" }}>
                {!edit && !hideEdit && <div style={{ position: "absolute", top: -10, right: 10 }}>
                  <a href={"#modif"} class="circle-icon" style={{ backgroundColor: color }} onClick={() => setEdit(true)}><i class="fa fa-pencil fa-lg" style={{ color: "black" }}></i></a>
                </div>}
                {edit && !hideEdit && <div style={{ position: "absolute", top: -10, right: 10 }}>
                  <a href={"#modif"} class="circle-icon" style={{ backgroundColor: color }} onClick={() => { setEdit(false) }}><i class="fa fa-check fa-lg" style={{ color: "black" }}></i></a>
                </div>}
                {edit && !hideEdit && <input type="text" style={{ width: 500 }} onChange={(text) => dispatchTitle(text.target.value)} defaultValue={title} placeholder="Title" />}
              </div>
              <h1 class="wow fadeInUp" data-wow-delay=".5s" style={{ color: titleHomeTextcolor }}>{title}</h1>
              <p class="lead wow fadeInUp" data-wow-delay=".75s" style={{ color: subTitleHomeTextcolor }}>{description}</p>
              <div style={{ display: "flex", position: "relative" }}>
                {!edit && !hideEdit && <div style={{ position: "absolute", top: -10, right: 10 }}>
                  <a href={"#modif"} class="circle-icon" style={{ backgroundColor: color }} onClick={() => setEdit(true)}><i class="fa fa-pencil fa-lg" style={{ color: "black" }}></i></a>
                </div>}
                {edit && !hideEdit && <div style={{ position: "absolute", top: -10, right: 10 }}>
                  <a href={"#modif"} class="circle-icon" style={{ backgroundColor: color }} onClick={() => { setEdit(false) }}><i class="fa fa-check fa-lg" style={{ color: "black" }}></i></a>
                </div>}
                {edit && !hideEdit && <textarea type="text-area" style={{ width: 500 }} onChange={(text) => dispatchDescription(text.target.value)} defaultValue={description} placeholder="Description" rows="5" cols="33" />}
              </div>
              <div class="spacer-20"></div>
              <a class="btn-custom scroll-to wow fadeInUp" data-wow-delay="1s" style={{ backgroundColor: color }} href="#section-about">{isFrench ? "En savoir plus" : "Learn more"}</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )


}