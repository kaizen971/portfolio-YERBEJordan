import React, { useState,useRef,useEffect } from 'react';
import MyModal from './modalPortfolio';
import { Button, ButtonIcon } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { ModalExample } from './ModalImagePortfolio';
import ModeIcon from '@mui/icons-material/Mode';
import { useSelector, useDispatch } from 'react-redux';
import { setTabSectionPortfolios, setImagesPortfolio } from '../reducers/actions';
import CustomModalItemPortfolio from './modalItemPortfolio';
import image from './image/FauteuilBlack.jpg';
import image2 from './image/FauteuilWhite.jpg';


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
        var imagesPortfolio = [
            { id: 2, name: "Titan 2", filter: "Titan", image: image2 , descriptif:"Équipé des dernières technologies pour vous offrir un massage complet et relaxant."},
            { id: 3, name: "Médiforme", filter: "Mediforme", image: image , descriptif:"Un massage complet, de la tête aux pieds."},
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
                        <h2 >Galerie</h2>
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
                                                    <span class="project-name" style={{color:"#20c997", textAlign:"center",marginTop:"-50px"}}>{item.name}</span>
                                                    <span class="project-name" style={{color:"white", textAlign:"center"}}>{item.descriptif}</span>
                                                </span>
                                            </span>

                                            <img src={item.image} alt={item.name} />
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