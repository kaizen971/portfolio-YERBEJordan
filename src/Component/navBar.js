import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {setField,refresh} from '../reducers/actions'
import RefreshIcon from '@mui/icons-material/Refresh';
import { useMediaQuery } from 'react-responsive';

function NavBar() {
    const [title, setTitle] = useState("Jordan YERBE");
    const [edit, setEdit] = useState(false);
    const [facebook, setFacebook] = useState("https://www.facebook.com/jordan.yerbe.3");
    const [twitter, setTwitter] = useState("https://twitter.com/JordanYerbe");
    const [linkedin, setLinkedin] = useState("www.linkedin.com/in/jordan-yerbe");
    const [instagram, setInstagram] = useState("https://www.instagram.com/jordan_yerbe/");
    const [openNavBar, setOpenNavBar] = useState(false);
    const color = useSelector((state) => state.counter.color);
    const colorEdit = useSelector((state) => state.counter.colorEdit);
    const dispatch = useDispatch();
    const widthScreen = window.innerWidth;
    const desktopScreen = widthScreen > 768;
    const mobileScreen = useMediaQuery({ maxWidth: 767 });
    const isFrench = useSelector((state) => state.counter.isFrench);


    const changeLanguage = (value) => {
        
        dispatch(setField("isFrench", value))

    }

    const setRefresh = () => {
        dispatch(
            refresh()
        )

    }

    const setColor = (color) => {
        return {
            type: 'SET_COLOR',
            payload: color,
        };
    };
    const hideEdit = useSelector((state) => state.counter.hideEdit);

    return (
        <header class="header-light transparent scroll-light" style={{ height: `${openNavBar ? "400px" : "90px"}` }}>

            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="d-flex justify-content-between">
                            {/* <div class="align-self-center header-col-left">
                                <div>

                                    <div id="logo" style={{ display: "flex", position: "relative" }}>
                                        {!edit && !hideEdit && <div style={{ position: "absolute", top: 5, right: 0 }}>
                                            <a href={"#modif"} class="circle-icon" style={{ backgroundColor: `${color}` }} onClick={() => setEdit(true)}><i class="fa fa-pencil fa-lg"></i></a>
                                        </div>}
                                        {edit && !hideEdit && <div style={{ position: "absolute", top: -10, right: 0, backgroundColor: `${color}` }}>
                                            <a href={"#modif"} class="circle-icon" style={{ backgroundColor: `${color}` }} onClick={() => { setEdit(false) }}><i class="fa fa-check fa-lg"></i></a>
                                        </div>}
                                        {!edit && !hideEdit && <a href="index.html">
                                            {title}
                                        </a>}
                                    </div>
                                    {edit && !hideEdit && <input type="text" style={{ width: 180 }} onChange={(text) => setTitle(text.target.value)} placeholder="Nom prénom" />}

                                </div>
                            </div> */}
                      <div style={mobileScreen ?  {position:"absolute", top:10, top:10,display:"flex", flexDirection:"row", justifyContent:"space-between", width:100,margin:10} : {display:"flex", flexDirection:"row", justifyContent:"space-between", width:100,margin:10}}>
                            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center",marginRight:10}}>
                                <a href={'#'} onClick={() => changeLanguage(true)}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png" style={{width:50, height:30}}/></a>
                                <p style={{fontSize:10}}>Français</p>
                            </div>
                            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                            <a href={'#'} onClick={() => changeLanguage(false)}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Great_Britain_%281707%E2%80%931800%29.svg/2560px-Flag_of_Great_Britain_%281707%E2%80%931800%29.svg.png" style={{width:50, height:30}}/></a>
                                <p style={{fontSize:10}}>English</p>
                        </div>

                        </div> 
                            <div class="align-self-center ml-auto header-col-mid" >
                                <ul id="mainmenu" class="scrollnav">
                                    <li><a href="#section-hero" >{isFrench ? "Acceuil" : "Home"}</a></li>
                                    <li></li>
                                    <li><a href="#section-about">{isFrench ? "A propos" : "About"}</a></li>
                                    <li></li>
                                    <li><a href="#section-services">{isFrench ? "Services" : "Services"}</a></li>
                                    <li></li>
                                    <li><a href="#section-portfolio">{isFrench ? "Portfolio" : "Portfolio"}</a></li>
                                    <li></li>
                                    <li><a href="#section-contact">{isFrench ? "Contact" : "Contact"}</a></li>
                                    <li></li>

                                </ul>
                                
                            </div>

                            <div class="align-self-center ml-auto header-col-right">

                                <div id="logo" style={{ display: "flex", position: "relative" }}>
                                    {!edit && !hideEdit && <div style={{ position: "absolute", top: -10, right: 5 }}>
                                        <a href={"#modif"} class="circle-icon" style={{ backgroundColor: `${color}` }} onClick={() => { setEdit(true); setOpenNavBar(openNavBar ? false : true) }}><i class="fa fa-pencil fa-lg"></i></a>
                                    </div>}
                                    {edit && !hideEdit && <div style={{ position: "absolute", top: -10, right: 5 }}>
                                        <a href={"#modif"} class="circle-icon" style={{ backgroundColor: `${color}` }} onClick={() => { setEdit(false); setOpenNavBar(openNavBar ? false : true) }}><i class="fa fa-check fa-lg"></i></a>
                                    </div>}
                                </div>
                                <div class="social-icons">
                                    <a href={`${linkedin}`}><i class="fa fa-linkedin fa-lg" style={{ backgroundColor: `${color}` }}></i></a>
                                </div>
                                <div style={{ display: "flex", position: "relative", flexDirection: "column", position: "absolute" }}>
                                    {edit && !hideEdit && <input type="text" style={{ width: 200, zIndex: 1, }} onChange={(text) => setFacebook(text.target.value)} placeholder={isFrench ? "Lien Facebook" : "Facebook link"} />}
                                    {edit && !hideEdit && <input type="text" style={{ width: 200, zIndex: 1 }} onChange={(text) => setTwitter(text.target.value)} placeholder={isFrench ? "Lien Twitter" : "Twitter link"} />}
                                    {edit && !hideEdit && <input type="text" style={{ width: 200, zIndex: 1 }} onChange={(text) => setLinkedin(text.target.value)} placeholder={isFrench ? "Lien Linkedin" : "Linkedin link"} />}
                                    {edit && !hideEdit && <input type="text" style={{ width: 200, zIndex: 1 }} onChange={(text) => setInstagram(text.target.value)} placeholder={isFrench ? "Lien Instagram" : "Instagram link"} />}

                                </div>
                                <span id="menu-btn" onClick={() => setOpenNavBar(openNavBar ? false : true)}></span>
                            </div>
          


                            <div class="clearfix"></div>

                        </div>
                    </div>
                </div>
            </div>
        </header>
    )








}

export default NavBar;