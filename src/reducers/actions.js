

export const setTitleText = (text) => {
  return {
    type: 'SET_TITLE',
    payload: text,
  };
}

export const setDescriptionText = (text) => {
    return {
        type: 'SET_DESCRIPTION',
        payload: text,
    };
}

export const setAboutText = (text) => {
    return {
        type: 'SET_ABOUT',
        payload: text,
    };
}

export const setImageAboutFirst = (image) => {
    return {
        type: 'SET_IMAGEABOUTFIRST',
        payload: image,
    };
}

export const setImageAboutSecond = (image) => {
    return {
        type: 'SET_IMAGEABOUTSECOND',
        payload: image,
    };
}

export const setTabCompetences = (tab) => {
    return {
        type: 'SET_TABCOMPETENCES',
        payload: tab,
    };
}

export const setImageServices = (image) => {
    return {
        type: 'SET_IMAGESERVICES',
        payload: image,
    };
}

export const setTabServices = (tab) => {
    return {
        type: 'SET_SERVICESITEMS',
        payload: tab,
    };
}

export const setServiceText = (text) => {
    return {
        type: 'SET_SERVICE_TEXT',
        payload: text,
    };
}

export const setCommentairesBackground = (image) => {
    return {
        type: 'SET_COMMENTAIRESBACKGROUND',
        payload: image,
    };
}

export const setCommentaireText = (text) => {
    return {
        type: 'SET_COMMENTAIRETEXT',
        payload: text,
    };
}

export const setTabComments = (tab) => {
    return {
        type: 'SET_TABCOMMENT',
        payload: tab,
    };
}

export const setTabSectionPortfolios = (tab) => {
    return {
        type: 'SET_TABSECTIONPORTFOLIO',
        payload: tab,
    };
}

export const setImagesPortfolio = (tab) => {
    return {
        type: 'SET_IMAGESPORTFOLIO',
        payload: tab,
    };
}

export const setField = (field,value) => {
    return {
        type: 'SET_FIELD',
        payload: {field:field,value:value}
    };
}

export const refresh = (field,value) => {
    return {
        type: 'RESET',
    };
}