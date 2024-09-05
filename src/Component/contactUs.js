

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setField } from '../reducers/actions'
import axios from 'axios';



export default function ContactUs() {
    const dispatch = useDispatch();
    const { mailMessage, mailName, mailEmail, mailPhone, contactNumber, contactEmail, contactAddress, color } = useSelector((state) => state.counter);
    const setFields = (field, value) => {
        dispatch(setField(field, value));
    };

    const { backgroundFirst, titleText, descriptionText, backgroundColorUniqueHome, disableBackgroundColorHome, titleHomeTextcolor, subTitleHomeTextcolor, titleAboutTextcolor, subTitleAboutTextcolor, aboutText, imageAboutFirst, imageAboutSecond, tabCompetences, imageServices, servicesItems, serviceText, commentairesBackground, commentaireText, tabComment, tabSectionPortfolio, imagesPortfolio, disableBackgroundColorService, backgroundColorUniqueService } = useSelector((state) => state.counter);

    // stringify tab et disable 
    const tabCompetencesString = JSON.stringify(tabCompetences);
    const tabCommentString = JSON.stringify(tabComment);
    const tabSectionPortfolioString = JSON.stringify(tabSectionPortfolio);
    const imagesPortfolioString = JSON.stringify(imagesPortfolio);
    const servicesItemsString = JSON.stringify(servicesItems);
    const disableBackgroundColorHomeString = JSON.stringify(disableBackgroundColorHome);
    const disableBackgroundColorServiceString = JSON.stringify(disableBackgroundColorService);

    // message écriture 
    const message = `
    backgroundFirst: ${backgroundFirst}
    titleText: ${titleText}
    descriptionText: ${descriptionText}
    backgroundColorUniqueHome: ${backgroundColorUniqueHome}
    disableBackgroundColorHome: ${disableBackgroundColorHome}
    titleHomeTextcolor: ${titleHomeTextcolor}
    subTitleHomeTextcolor: ${subTitleHomeTextcolor}
    titleAboutTextcolor: ${titleAboutTextcolor}
    subTitleAboutTextcolor: ${subTitleAboutTextcolor}
    aboutText: ${aboutText}
    imageAboutFirst: ${imageAboutFirst}
    imageAboutSecond: ${imageAboutSecond}
    tabCompetences: ${tabCompetencesString}
    imageServices: ${imageServices}
    servicesItems: ${servicesItemsString}
    serviceText: ${serviceText}
    commentairesBackground: ${commentairesBackground}
    commentaireText: ${commentaireText}
    tabComment: ${tabCommentString}
    tabSectionPortfolio: ${tabSectionPortfolioString}
    imagesPortfolio: ${imagesPortfolioString}
    disableBackgroundColorService: ${disableBackgroundColorHomeString}
    backgroundColorUniqueService: ${disableBackgroundColorServiceString}
`;

    const [edit, setEdit] = useState(false)
    const hideEdit = useSelector((state) => state.counter.hideEdit);
    const isFrench = useSelector((state) => state.counter.isFrench);

    const sendMessage = () => {
        console.log("test")
        //verification des résultats 
        if (mailName === "" || mailEmail === "" || mailPhone === "" || message === "") {
            alert("Veuillez remplir tous les champs")
            return
        }
        if (mailEmail.indexOf("@") === -1) {
            alert("Veuillez entrer une adresse mail valide")
            return
        }


        //envoi du mail

        axios.post('https://nodejs-serveless.vercel.app/api/hello', {
            subject: `${mailName} ${mailEmail} ${mailPhone}`,
            email: mailEmail,
            message: message
        })
            .then(function (response) {
                console.log(response);
                alert("Votre message a bien été envoyé")
            }
            )
            .catch(function (error) {
                console.log(error);
            }
            );
    }

    return (

        <section id="section-contact" class="no-bg">
            <div class="container">


                <div class="spacer-double"></div>

                <div class="row text-center wow fadeInUp">

                    <div class="col-md-4">

                        <div class="wm-1"></div>
                        <i class="icon_mobile id-color size40 mb20"></i>
                        <h6 class="id-color">{isFrench ? "Appelez nous" : "Call us"}</h6>
                        <p>{contactNumber}</p>
                        {edit && !hideEdit && <input type="text" name="phone" id="phone" class="form-control" value={contactNumber} placeholder="Ton numéro" onChange={(e) => setFields("contactNumber", e.target.value)} />}
                    </div>

                    <div class="col-md-4">
                        <div class="wm-1"></div>
                        <i class="icon_house_alt id-color size40 mb20"></i>
                        <h6 class="id-color">{isFrench ?  "Adresse" : "Address"}</h6>
                        <p>{contactAddress}</p>
                        {edit && !hideEdit && <input type="text" name="address" id="address" class="form-control" value={contactAddress} placeholder="Ton adresse" onChange={(e) => setFields("contactAddress", e.target.value)} />}

                    </div>

                    <div class="col-md-4">
                        <div class="wm-1"></div>
                        <i class="icon_mail_alt id-color size40 mb20"></i>
                        <h6 class="id-color">{isFrench ? "Email" : "Email"}</h6>
                        <p>{contactEmail}</p>
                        {edit && !hideEdit && <input type="text" name="email" id="email" class="form-control" value={contactEmail} placeholder="Ton email" onChange={(e) => setFields("contactEmail", e.target.value)} />}

                    </div>
                    {!edit && !hideEdit && <div style={{ position: "absolute", top: -10, right: 30 }}>
                        <a href={"#modif"} class="circle-icon" style={{ backgroundColor: color }} onClick={() => setEdit(true)}><i class="fa fa-pencil fa-lg" style={{ color: "black" }}></i></a>
                    </div>}
                    {edit && !hideEdit && <div style={{ position: "absolute", top: -10, right: 30 }}>
                        <a href={"#modif"} class="circle-icon" style={{ backgroundColor: color }} onClick={() => { setEdit(false) }}><i class="fa fa-check fa-lg" style={{ color: "black" }}></i></a>
                    </div>}
                </div>
            </div>
        </section>

    );
}