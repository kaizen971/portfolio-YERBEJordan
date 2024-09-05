const initialState = {
  color: "#10afa0",
  colorEdit: "#10afa0",
  backgroundFirst: "images/background/green-01.webp",
  titleText:"Bienvenue sur mon portfolio !",
  descriptionText:"Je suis Jordan Yerbe, développeur FullStack passionné par la création d'applications web et mobiles innovantes. Je transforme chaque idée en réalité digitale. Explorons ensemble mes projets et mon parcours.",
  aboutText:"Passionné avec une expérience solide dans le développement d'applications web et mobiles. J'ai travaillé sur des projets variés allant de la création d'applications sociales à des solutions logistiques innovantes, en utilisant des technologies comme React JS, React Native, Node.js, et Mongo DB. Motivé par la résolution de problèmes complexes.",
  imageAboutFirst : "images/misc/challenge.jpeg",
  imageAboutSecond : "images/misc/photoProfil.jpeg",
  tabCompetences : [
    {id:0, competence:"React JS/React Native", pourcentage:100},
    {id:1, competence:"Node.js/Express.js", pourcentage:100},
    {id:3, competence:"Mongo DB", pourcentage:100},
    {id:3, competence:"AWS (Amazon Web Services)", pourcentage:80},
    {id:4, competence:"CI/CD", pourcentage:80},
    {id:4, competence:"Docker", pourcentage:80},


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
  tabSectionPortfolio : [{ id: 1, name: 'all projects', filter: '*' }, { id: 2, name: 'React-Native', filter: '.React-Native' }, { id: 4, name: 'Node', filter: '.Node' }, { id: 5, name: 'ASPNET', filter: '.ASPNET' } ,  { id: 6, name: 'Mongo Db', filter: '.MongoDB' },{ id: 7, name: 'React', filter: '.React' }],
  imagesPortfolio : [{ id: 1, name: "Multi Images", filter: "illustration", image: "images/portfolio/GreenSearcher.gi" }, { id: 2, name: "Slider Images", filter: "photography", image: "images/portfolio/2.jpg" }, { id: 3, name: "Youtube Video", filter: "illustration", image: "images/portfolio/3.jpg" }, { id: 4, name: "Multi Images Big", filter: "photography illustration", image: "images/portfolio/4.jpg" }, { id: 5, name: "Slider Images Big", filter: "photography mobile", image: "images/portfolio/5.jpg" }],
  mailMessage:"",
  mailName:"",
  mailEmail:"",
  mailPhone:"",
  contactNumber:"(+33)0787854176",
  contactEmail:"Paris,75000",
  contactAddress:"yerbe.jordan@gmail.com",
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
