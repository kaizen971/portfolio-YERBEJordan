import React, { useState,useRef,useEffect } from 'react';
import MyModal from './modalPortfolio';
import { Button, ButtonIcon } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { ModalExample } from './ModalImagePortfolio';
import ModeIcon from '@mui/icons-material/Mode';
import { useSelector, useDispatch } from 'react-redux';
import { setTabSectionPortfolios, setImagesPortfolio } from '../reducers/actions';
import CustomModalItemPortfolio from './modalItemPortfolio';

export default function PortfolioScreen() {
    const dispatch = useDispatch();
    const color = useSelector((state) => state.counter.color);
    const colorEdit = useSelector((state) => state.counter.colorEdit);

    const tabSectionPortfolios = useSelector((state) => state.counter.tabSectionPortfolio);
    const setTabSectionPortfolio = (value) => dispatch(setTabSectionPortfolios(value));
    const myElementRef = useRef(null);

    const hideEdit = useSelector((state) => state.counter.hideEdit);

    if (localStorage.getItem('imagesPortfolio') != null) {
        var imagesPortfolio = JSON.parse(localStorage.getItem('imagesPortfolio'));
    } else {
        var imagesPortfolio = [{ id: 1, name: "GreenSearcher", filter: "React-Native Node MongoDB", image: "images/portfolio/GreenSearcher.gif" , descriptif:"Application mobile React Native pour scanner des QR codes et connaître les impacts environnementaux des produits via Node.js et MongoDB."},
            { id: 2, name: "FoodCheck", filter: "React-Native Node MongoDB", image: "images/portfolio/FoodCheck.gif" , descriptif:"Application mobile React Native permettant d'obtenir des informations sur les nutriments des produits alimentaire, avec Node.js et MongoDB."},
            { id: 3, name: "HoomizPro", filter: "React-Native Node MongoDB", image: "images/portfolio/HoomizPro.gif" , descriptif:"Application d'aide à domicile facilitant le quotidien des auxiliaires pour pointer, visualiser leurs interventions, et gérer leurs tâches."},
            { id: 4, name: "HoomizFamily", filter: "React-Native Node MongoDB", image: "images/portfolio/HoomizFamily.gif" , descriptif:"Application permettant aux clients de visualiser leurs factures, suivre leurs interventions, et demander de nouvelles prestations."},
            { id: 5, name: "BackOffice Hoomiz", filter: "React MongoDB Node", image: "images/portfolio/BackOffice.gif" , descriptif:"Outil permettant aux responsables de secteur de planifier les interventions et de rechercher des auxiliaires disponibles."},
            { id: 6, name: "TheStadium", filter: "React-Native ASPNET", image: "images/portfolio/TheStadium.gif" , descriptif:"Application pour visualiser les matchs en Grande-Bretagne, suivre les buteurs et accéder aux statistiques en temps réel"},
            { id: 6, name: "CheckListTogether", filter: "React-Native Node MongoDB", image: "images/portfolio/CheckListTogether.gif" , descriptif:"Application collaborative pour gérer une check-list en groupe et faire évoluer des créatures en accomplissant des tâches."}

        ]
    }
    const [imagesPortfolios, setImagePortfolio] = useState(imagesPortfolio)
    const [openItem, setOpenItem] = useState(false);
    const [item, setItem] = useState(null);
    const [open, setOpen] = useState(false);
    const onSave = (value) => {
        setTabSectionPortfolio(value);
        //window.location.reload();
    }

    const onSavePhoto = (value) => {
        setImagePortfolio(value);
        console.log(value)
        localStorage.setItem('imagesPortfolio', JSON.stringify(value));
        window.location.reload();

    }
    const [selectedItem, setSelectedItem] = useState(0); // Initialize with the default selected item index
    useEffect(() => {
        if (myElementRef.current) {
          const className = myElementRef.current.className;
          console.log(className);
        }
      }, [myElementRef]);
    
        const rootStyles = document.documentElement.style;
        rootStyles.setProperty('--primary-color', color);

        const openModalItem = (item) => {
            setItem(item);
            setOpenItem(true);
        }
     
    return (
        <section id="section-portfolio">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <h2 >Portfolio</h2>
                    </div>
                   <CustomModalItemPortfolio open={openItem} onClose={() => setOpenItem(false)} item={item} />
                   <MyModal sections={tabSectionPortfolios} open={open} onClose={() => setOpen(false)} onSave={(value) => onSave(value)} /> 
                    <div class="spacer-single"></div>
                    <div class="col-md-12 text-center">
                        <ul id="filters">
                            {tabSectionPortfolios.map((item, index) => {
                                if (index === selectedItem) {
                                    return <li><a ref={myElementRef} href="#" data-filter={item.filter} className="selected" onClick={() => setSelectedItem(index)} style={{padding:8, borderRadius:80}}>{item.name}</a></li>;
                                }
                                return <li><a href="#" data-filter={item.filter} onClick={() => setSelectedItem(index)}>{item.name}</a></li>;
                            })} 
                            {!hideEdit && <IconButton style={{ backgroundColor: color }}>
                                <ModeIcon variant="contained" onClick={() => setOpen(true)} />
                            </IconButton>}
                        </ul>
                        {!hideEdit &&<ModalExample imagesPortfolio={imagesPortfolios} setImagePortfolio={onSavePhoto} tabSectionPortfolios={tabSectionPortfolios} />}

                        <div id="gallery" class="gallery full-gallery de-gallery pf_full_width pf_3_cols grid sequence">
                            {imagesPortfolios.map((item, index) => {
                                return (
                                    <div class={`item ${item.filter} gallery-item pf-click`} data-value="project-details-image.html" onClick={() => openModalItem(item)}>
                                        <div class="picframe wow">
                                            <span class="overlay" style={{ backgroundColor: color }}>
                                                <span class="pf_text">
                                                    <span class="project-name" style={{color:"#AF5010"}}>{item.name}</span>
                                                    <span class="project-name" style={{color:"white"}}>{item.descriptif}</span>
                                                </span>
                                            </span>

                                            <img src={`${item.image}`} alt="" />
                                        </div>
                                    </div>
                                )
                            })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}