import React, { useState } from 'react';
import  ModaleImage  from './modalEditBackground';
import ModalAjoutCompetence from './modalComp';
import LinearProgress from '@material-ui/core/LinearProgress';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { setAboutText ,setImageAboutFirst ,setImageAboutSecond ,setTabCompetences ,setImageServices } from '../reducers/actions';
import ModalTextColor from './modalTextColor';
import imageBis from './image/IconFauteuil.jpg';

export default function About() {
    const [edit, setEdit] = useState(false);
    const about = useSelector((state) => state.counter.aboutText);
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const color = useSelector((state) => state.counter.color);
    const titleAboutTextcolor = useSelector((state) => state.counter.titleAboutTextcolor);
    const subTitleAboutTextcolor = useSelector((state) => state.counter.subTitleAboutTextcolor);
    const hideEdit = useSelector((state) => state.counter.hideEdit);
    const isFrench = useSelector((state) => state.counter.isFrench);

    const tabCompetence = useSelector((state) => state.counter.tabCompetences);
    const handleFileUpload = (event,id) => {
      const file = event.target.files[0];
      const maxSize = 5 * 1024 * 1024; // 5 Mo
      if (file && file.size <= maxSize) {
      const reader = new FileReader();
      reader.onload = () => {
        if(id==0){
          dispatchImage(reader.result);
        }else{
          dispatchImageSecond(reader.result);
        }
      };
      reader.readAsDataURL(file);
      setFile(event.target.files[0]);
      } else if (file) {
        alert("Le fichier est trop volumineux (max 5 Mo)");
      }
    };
    const [file, setFile] = useState("");
  
    const theme = createTheme({
      status: {
        danger: '#e53e3e',
      },
      palette: {
        primary: {
          main: "#10afa0",
          darker: '#fff',
        },
        neutral: {
          main: '#64748B',
          contrastText: '#fff',
        },
        secondary: {
          main: color,
        },
      },
    });

    const dispatchAbout = (value) =>{

      dispatch(setAboutText(value));
    }

    const dispatchImage = (value) =>{
      dispatch(setImageAboutFirst(value));
    }

    const dispatchImageSecond = (value) =>{
      dispatch(setImageAboutSecond(value));
    }

    const dispatchCompetence = (value) =>{
      dispatch(setTabCompetences(value));
    }

  

    const listItems = [ {id:0, image:"images/misc/3.jpg"},
    {id:1, image:"images/misc/2a.jpg"},
    {id:2, image:"images/misc/2b.jpg"},
    {id:3, image:"images/misc/3.jpg"},
    {id:4, image:"images/misc/3a.jpg"} ,
    {id:5, image:"images/misc/3b.jpg"},
    {id:6, image:"images/misc/profile-1.jpg"},
    {id:7, image:"images/misc/profile-2.jpg"},
    ];



    const deleteElementCompetence = (id) => {
        const newTab = tabCompetence.filter((competence) => competence.id !== id);
        dispatchCompetence(newTab);
    }
    const colorEdit = useSelector((state) => state.counter.colorEdit);

    
return(
    <section id="section-about">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 mb-sm-30 text-center">
          <div class="de-images">
                                    {!edit && !hideEdit &&<div style={{ position: "absolute", top: -10 ,right:10,zIndex:2}}>
                                        <a href={"#modif"} class="circle-icon" style={{backgroundColor:color}} onClick={()=>setEdit(true)}><i class="fa fa-pencil fa-lg" style={{color:"black"}}></i></a>
                                    </div>}
                                    {edit && !hideEdit &&<div style={{ position: "absolute", top: -10 ,right:10,zIndex:2}}>
                                        <a href={"#modif"} class="circle-icon"style={{backgroundColor:color}}  onClick={()=>{setEdit(false)}}><i class="fa fa-check fa-lg" style={{color:"black"}}></i></a>
                                    </div>}
                                    {edit && !hideEdit && <ModaleImage showModal={showModal} setShowModal={setShowModal} handleFileUpload={(event) => handleFileUpload(event,1)} listItems={listItems} setImage={dispatchImageSecond} label={isFrench ? "Modifier l'image n°1" : "Edit image n°1"} style={{marginTop:10,marginBottom:10,backgroundColor:color}} disableResponsive={true}/>}
                                    {edit && !hideEdit && <ModaleImage showModal={showModal} setShowModal={setShowModal} handleFileUpload={(event) => handleFileUpload(event,0)}  listItems={listItems} setImage={dispatchImage} label={isFrench ? "Modifier l'image n°2" : "Edit image n°2"} style={{marginTop:10,marginBottom:10,backgroundColor:color}} disableResponsive={true}/>}
                                    <img class="img-fluid wow fadeInRight" src={imageBis} alt="" />
          </div>
        </div>
        <div class="col-lg-5 offset-md-1 wow fadeInLeft" data-wow-delay=".5s">
        {!hideEdit &&<ModalTextColor style={{ marginTop: 10, marginBottom: 10, backgroundColor: color}} styleMobile={{backgroundColor:color,top:10 , right:0 ,position:'absolute', color:'white',zIndex:2}} titleColor={"titleAboutTextcolor"} subTitle={"subTitleAboutTextcolor"} />}

          <h2 style={{color:titleAboutTextcolor}}>{isFrench ? "A propos" : "About "}<span class="id-color" style={{color:color}}>{isFrench ? "Moi" : "Me"}</span></h2>
          <p style={{color:subTitleAboutTextcolor}}>
            {about}
          </p>
          <div class="spacer-10"></div>

          <div  style={{ display: "flex", position: "relative" }}>
                                    {!edit && !hideEdit &&<div style={{ position: "absolute", top: -10 ,right:10}}>
                                        <a href={"#modif"} class="circle-icon" onClick={()=>setEdit(true)} style={{backgroundColor:color}}><i class="fa fa-pencil fa-lg" style={{color:"black"}}></i></a>
                                    </div>}
                                    {edit && !hideEdit &&<div style={{ position: "absolute", top: -10 ,right:10}}>
                                        <a href={"#modif"} class="circle-icon" onClick={()=>{setEdit(false)}} style={{backgroundColor:color}}><i class="fa fa-check fa-lg" style={{color:"black"}}></i></a>
                                    </div>}
                                    {edit && !hideEdit &&<textarea type="text" style={{width:"100%",height:200}} onChange={(text) =>dispatchAbout(text.target.value)} defaultValue={about} placeholder="Title" />}
          </div>
          <a href={process.env.PUBLIC_URL + "/cv.pdf"} 
             download="CV_Camara_Amlnata.pdf" 
             className="btn-border wow fadeInUp" 
             data-wow-delay="1s" 
             style={{borderColor:color, textDecoration:'none', cursor:'pointer'}}
          >
            {isFrench ? "Télécharger mon CV" : "Download my CV"}
          </a>
        </div>

      </div>
    </div>

  </section>







)





}