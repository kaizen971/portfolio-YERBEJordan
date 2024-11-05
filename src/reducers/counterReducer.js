const initialState = {
  color: "#007bff",
  colorEdit: "#007bff",
  backgroundFirst: "images/background/background-sable.jpg",
  titleText:'Bienvenue à "Un moment Z-G"',
  descriptionText:"Votre havre de détente et bien-être en plein cœur de Hyères. Nous offrons une expérience unique de relaxation et de bien-être.",
  aboutText:"Àgée de trente six ans,  employée étages équipière et citoyenne engagée au service des autres. Mon parcours professionnel a toujours était du service à la personne. Je suis une personne bienveillante, disponible et à l'écoute. Patiente et ayant la maîtrise de soi. Je suis animés par profond désir d'être utile aux autres et attaché au respect de toute personnne, quelles que soient son origines et sa situation sociale. Mon parcours, mes savoirs, mes savoirs-faire, mes savoirs-être sont en cohérence avec mon projet. ",
  imageAboutFirst : "images/misc/IconFauteuil.jpg",
  imageAboutSecond : "images/misc/IconFauteuil.jpg",
  tabCompetences : [



  ],
  imageServices: "images/background/4.webp",
  servicesItems: [{ icon: "NotificationsActive", title: "Gestion de Notifications", description: "Mise en place de systèmes de notification en temps réel pour améliorer l'engagement utilisateur et les interactions sur les applications." }, { icon: "Api", title: "API et Automatisation", description: "Intégration d'API externes, telles que WhatsApp, pour automatiser les communications et enrichir les fonctionnalités des applications." }, { icon: "Insights", title: "Suivi et Analyse de l'Audience", description: "Implémentation de solutions de suivi avancé avec Firebase Analytics pour une meilleure compréhension des comportements utilisateurs et l'optimisation de l'expérience client." }, { icon: "BuildCircle", title: "Automatisation du Déploiement (CI/CD)", description: "Mise en place de pipelines d'intégration et de déploiement continus (CI/CD) pour garantir une livraison rapide et fiable des mises à jour et des nouvelles fonctionnalités." },{ icon: "CloudQueue", title: "Architecture Cloud", description: "Conception et déploiement d'architectures cloud sur AWS, intégrant des solutions de conteneurisation avec Docker et ECR (Elastic Container Registry) pour assurer une performance optimale, la scalabilité et la sécurité des applications." }],
  isLoggedIn: false,
  serviceText: "Je me spécialise dans la création de solutions numériques robustes et évolutives, en intégrant des technologies pour optimiser l'expérience utilisateur et les performances des applications.",
  commentairesBackground: "/images/background/green-01.webp",
  commentaireText : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  tabComment: [{ id: 0, name: "John", image: "images/people/1.jpg", text: "I'm always impressed with the services. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip." },
  { id: 1, name: "Sandra", image: "images/people/2.jpg", text: "I'm always impressed with the services. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip." },
  { id: 2, name: "Michael", image: "images/people/3.jpg", text: "I'm always impressed with the services. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip." }],
  tabSectionPortfolio : [{ id: 1, name: 'Tout', filter: '*' }, { id: 2, name: 'Titan 2', filter: '.Titan' }, { id: 4, name: 'Mediforme', filter: '.Mediforme' }],
  mailMessage:"",
  mailName:"",
  mailEmail:"",
  mailPhone:"",
  contactNumber:"06 67 80 75 14",
  contactEmail:"5 Place Massillon 83400 Hyères",
  contactAddress:"aminatacamara2602@gmail.com",
  hideEdit : true,
  isFrench : true,
  visited:true
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_COLOR':
      return { ...state, color: action.payload.color };
    case 'SET_BACKGROUNDFIRST':
    return { ...state, backgroundFirst: action.payload };
    case 'SET_TITLE':
      return { ...state, titleText: action.payload };
    case 'SET_DESCRIPTION':
      return { ...state, descriptionText: action.payload };
    case 'SET_ABOUT':
      return { ...state, aboutText: action.payload };
    case 'SET_IMAGEABOUTFIRST':
      return { ...state, imageAboutFirst: action.payload };
    case 'SET_IMAGEABOUTSECOND':
      return { ...state, imageAboutSecond: action.payload };
    case 'SET_TABCOMPETENCES':
      return { ...state, tabCompetences: action.payload };
    case 'SET_IMAGESERVICES':
      return { ...state, imageServices: action.payload };
    case 'SET_SERVICESITEMS':
      return { ...state, servicesItems: action.payload };
    case 'SET_SERVICE_TEXT':
      return { ...state, serviceText: action.payload };
    case 'SET_COMMENTAIRESBACKGROUND':
      return { ...state, commentairesBackground: action.payload };
    case 'SET_COMMENTAIRETEXT':
      return { ...state, commentaireText: action.payload };
    case 'SET_TABCOMMENT':
      return { ...state, tabComment: action.payload };
    case "SET_TABSECTIONPORTFOLIO" :
      return { ...state, tabSectionPortfolio: action.payload };
    case "SET_IMAGESPORTFOLIO" :
      return { ...state, imagesPortfolio: action.payload };
    case "SET_FIELD" :
        return { ...state, [action.payload.field]: action.payload.value };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

export default counterReducer;
