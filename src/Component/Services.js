
import React, { useEffect, useState, Suspense } from 'react'
import ModalService from './modalService';
import { Icon, Avatar, Box } from "@mui/material";
import { Person, Work, School, Code, Language, Gavel, Public, MonetizationOn, Settings, Help, Email, Phone, LocationOn, CalendarToday, Folder, InsertDriveFile, PhotoCamera, Videocam, Web, ArtTrack, LibraryBooks, SportsEsports, BuildCircle, Flight, Home, AccountBalance, BusinessCenter, VerifiedUser, Favorite, Mood, ThumbUp, BugReport, DeveloperBoard, DesktopWindows, Functions, Extension, Storage, Memory, Http, Cloud, CloudQueue, StorageOutlined, DataUsage, Devices, Mouse, Keyboard, Laptop, SettingsApplications, SettingsInputComponent, SettingsEthernet, CodeOutlined, DeveloperMode, HttpsOutlined, Router, WbIncandescentOutlined, Apps, BubbleChart, DesktopAccessDisabled, NotificationsActive, Api, Insights } from "@mui/icons-material";
import ModalEditBackground from './modalEditBackground';
import { setImageServices, setTabServices, setServiceText } from '../reducers/actions';
import { useSelector, useDispatch } from 'react-redux';
import ModalTextColor from './modalTextColor';
import { setField } from '../reducers/actions'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Video from './image/green-01.mp4';
export default function Services() {
    const [showModal, setShowModal] = useState(false);
    const color = useSelector((state) => state.counter.color);
    const image = useSelector((state) => state.counter.imageServices);
    const serviceText = useSelector((state) => state.counter.serviceText);
    const servicesItems = useSelector((state) => state.counter.servicesItems);
    const titleServicesTextcolor = useSelector((state) => state.counter.titleServicesTextcolor);
    const subTitleServicesTextcolor = useSelector((state) => state.counter.subTitleServicesTextcolor);
    const dispatch = useDispatch();

    const dispatchImage = (value) => {
        dispatch(setImageServices(value));
    }

    const dispatchServiceText = (value) => {
        dispatch(setServiceText(value));
    }
    const colorEdit = useSelector((state) => state.counter.colorEdit);
    const backgroundColorUniqueService = useSelector((state) => state.counter.backgroundColorUniqueService);
    const isFrench = useSelector((state) => state.counter.isFrench);
    const disableBackgroundColorService = useSelector((state) => state.counter.disableBackgroundColorService);
    const [edit, setEdit] = useState(false);
    const [services, setServices] = useState("Cette section est dédiée à vous présenter les compétences et les services que je propose en tant que développeur. Que vous cherchiez à créer un site web, une application mobile ou un logiciel personnalisé, je suis là pour vous aider à transformer votre idée en réalité. Avec des années d'expérience dans le développement de logiciels, je suis en mesure de fournir des solutions innovantes et personnalisées pour répondre à vos besoins spécifiques. Parcourez mes services pour en savoir plus sur ce que je peux vous offrir et n'hésitez pas à me contacter pour discuter de votre projet.");
    const [icon, setIcon] = useState([]);

    const [file, setFile] = useState("");
    const deleteIcon = (object) => {

        let newTab = servicesItems.map((item, index) => {

            return { ...item, icon: item.icon }
        })
        const value = replaceValueWithIcon(object)

        newTab = newTab.filter((item, index) => item.title !== value.title)
        setTabsServices(newTab)
    }
    function FloatingShapes() {
        return (
            <Canvas>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Suspense fallback={null}>
                    {/* Ajouter différentes formes flottantes ici */}
                    <mesh position={[-2, 0, 0]}>
                        <sphereGeometry args={[0.5, 32, 32]} />
                        <meshStandardMaterial color="aqua" />
                    </mesh>
                    <mesh position={[2, 0, 0]}>
                        <boxGeometry args={[1, 1, 1]} />
                        <meshStandardMaterial color="orange" />
                    </mesh>
                    {/* Autres formes géométriques */}
                </Suspense>
                <OrbitControls />
            </Canvas>
        );
    }
    const handleFileUpload = (event, id) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            if (id == 0) {
                dispatchImage(reader.result);
            }
        };
        reader.readAsDataURL(file);
        setFile(event.target.files[0]);
    };
    const listItems = [{ id: 0, image: "images/misc/3.jpg" },
    { id: 1, image: "images/misc/2a.jpg" },
    { id: 2, image: "images/misc/2b.jpg" },
    { id: 3, image: "images/misc/3.jpg" },
    { id: 4, image: "images/background/4.jpg" },
    { id: 5, image: 'images/background/green-01.webp' },
    { id: 6, image: "images/background/peinture.jpg" },
    { id: 7, image: "images/background/mosaiqueTortue.jpg" },
    { id: 8, image: "images/background/paysage.jpg" },

    ];
    useEffect(() => {
        let newTab = servicesItems.map((item, index) => {
            return { ...item, icon: item.icon }
        })

        setIcon(replaceIconWithValue(newTab));
    }, [servicesItems]);

    const setTabsServices = (value) => {
        dispatch(setTabServices(value));
    }

    function replaceIconWithValue(objList) {
        const iconButton = {
            Person,
            Work,
            School,
            Code,
            Language,
            Gavel,
            Public,
            MonetizationOn,
            Settings,
            Help,
            Email,
            Phone,
            LocationOn,
            CalendarToday,
            Folder,
            InsertDriveFile,
            PhotoCamera,
            Videocam,
            Web,
            ArtTrack,
            LibraryBooks,
            SportsEsports,
            Flight,
            Home,
            AccountBalance,
            BusinessCenter,
            VerifiedUser,
            Favorite,
            Mood,
            ThumbUp,
            BugReport,
            DeveloperBoard,
            DesktopWindows,
            Functions,
            Extension,
            Storage,
            Memory,
            Http,
            Cloud,
            CloudQueue,
            StorageOutlined,
            DataUsage,
            Devices,
            Mouse,
            Keyboard,
            Laptop,
            SettingsApplications,
            SettingsInputComponent,
            SettingsEthernet,
            CodeOutlined,
            DeveloperMode,
            HttpsOutlined,
            Router,
            WbIncandescentOutlined,
            Apps,
            BubbleChart,
            DesktopAccessDisabled,
            NotificationsActive,
            Api,
            Insights,
            CloudQueue,
            BuildCircle

        };

        return objList.map(obj => {
            const { icon, ...rest } = obj;
            return { ...rest, icon: iconButton[icon] };
        });
    }

    function replaceValueWithIcon(obj) {
        const iconButton = {
            Person,
            Work,
            School,
            Code,
            Language,
            Gavel,
            Public,
            MonetizationOn,
            Settings,
            Help,
            Email,
            Phone,
            LocationOn,
            CalendarToday,
            Folder,
            InsertDriveFile,
            PhotoCamera,
            Videocam,
            Web,
            ArtTrack,
            LibraryBooks,
            SportsEsports,
            Flight,
            Home,
            AccountBalance,
            BusinessCenter,
            VerifiedUser,
            Favorite,
            Mood,
            ThumbUp,
            BugReport,
            DeveloperBoard,
            DesktopWindows,
            Functions,
            Extension,
            Storage,
            Memory,
            Http,
            Cloud,
            CloudQueue,
            StorageOutlined,
            DataUsage,
            Devices,
            Mouse,
            Keyboard,
            Laptop,
            SettingsApplications,
            SettingsInputComponent,
            SettingsEthernet,
            CodeOutlined,
            DeveloperMode,
            HttpsOutlined,
            Router,
            Insights,
            BuildCircle,
            WbIncandescentOutlined,
            Apps,
            BubbleChart,
            DesktopAccessDisabled,
            BuildCircle
        };

        const icon = Object.keys(iconButton).find(key => iconButton[key] === obj.icon);
        return { ...obj, icon };
    }

    const dispatchEnableBackgroundColorService = (value) => {
        dispatch(setField("disableBackgroundColorService", value))
    }

    const dispatchBackgroundColorUniqueService = (value) => {
        dispatch(setField("backgroundColorUniqueService", value.hex))
    }
    const hideEdit = useSelector((state) => state.counter.hideEdit);

    return (
        <section id="section-services" class="text-light" data-bgcolor="#008477" >
            <video autoPlay loop muted playsInline className="video-background" style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                pointerEvents: 'none',
                zIndex: 0
            }}>
                <source src={process.env.PUBLIC_URL + '/images/background/green-01.mp4'} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div class="container">

                {!hideEdit && <ModalEditBackground disableBackgroundColorType={"disableBackgroundColorService"} showModal={showModal} setShowModal={setShowModal} handleFileUpload={(event) => handleFileUpload(event, 0)} setEnableBackgroundColorHome={dispatchEnableBackgroundColorService} style={{ marginTop: 10, marginBottom: 10, backgroundColor: color, position: "absolute", top: 50, left: 50 }} listItems={listItems} setImage={dispatchImage} setImageBackgroundColorUnique={dispatchBackgroundColorUniqueService} label={isFrench ? "Changer le fond" : "Change background"} titleColor={"titleServicesTextcolor"} subTitle={"subTitleServicesTextcolor"} />}
                {!hideEdit && <ModalTextColor styleMobile={{ backgroundColor: color, top: 10, left: 10, position: 'absolute', color: 'white' }} style={{ marginTop: 10, marginBottom: 10, backgroundColor: color, position: "absolute", top: 100, left: 50 }} titleColor={"titleServicesTextcolor"} subTitle={"subTitleServicesTextcolor"} />}

                <div class="row">
                    <div class="col-lg-6 offset-lg-3">

                        <div class="text-center">

                            <h2 style={{ color: titleServicesTextcolor }}>{isFrench ? "Services" : "Services"}</h2>
                            <p style={{ color: subTitleServicesTextcolor }}>{serviceText}</p>
                            {!edit && !hideEdit && <div style={{ position: "absolute", top: -10, right: 30 }}>
                                <a href={"#modif"} class="circle-icon" style={{ backgroundColor: color }} onClick={() => setEdit(true)}><i class="fa fa-pencil fa-lg" style={{ color: "black" }}></i></a>
                            </div>}
                            {edit && !hideEdit && <div style={{ position: "absolute", top: -10, right: 30 }}>
                                <a href={"#modif"} class="circle-icon" style={{ backgroundColor: color }} onClick={() => { setEdit(false) }}><i class="fa fa-check fa-lg" style={{ color: "black" }}></i></a>
                            </div>}
                            {edit && !hideEdit && <textarea type="text" style={{ width: "100%", height: 200 }} onChange={(text) => dispatchServiceText(text.target.value)} defaultValue={services} placeholder="Title" />}
                            <div class="spacer-30"></div>
                        </div>
                    </div>
                </div>
                {!hideEdit && <ModalService setServiceItems={setTabsServices} serviceItems={servicesItems} />}

                <div class="row">
                    {icon.map((item, index) => {
                        return (
                            <div class="col-lg-4 col-md-6 mb30 wow fadeInRight" data-wow-delay="0s">
                                {!hideEdit && <div style={{ position: "absolute", top: -10, right: 30 }}>
                                    <a href={"#modif"} class="circle-icon" onClick={() => { deleteIcon(item) }} style={{ backgroundColor: color }}><i class="fa fa-trash fa-lg" style={{ color: "black" }}></i></a>
                                </div>}
                                <div class=" f-icon-circle f-border">
                                    <div style={{ marginBottom: 20 }}>

                                        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                                            <Avatar sx={{ bgcolor: 'transparent', width: 56, height: 56 }}>
                                                <Icon component={item.icon} sx={{ fontSize: '3rem', color: color }} />
                                            </Avatar>
                                            <Box
                                                sx={{
                                                    position: 'absolute',
                                                    top: -3,
                                                    left: -3,
                                                    width: 62,
                                                    height: 62,
                                                    borderRadius: '50%',
                                                    border: `1px solid ${color}`,

                                                    backgroundColor: 'transparent'
                                                }}
                                            />
                                        </Box>
                                    </div>
                                    <div class="fb-text">
                                        <h4>{item.title}</h4>
                                        <p>{item.description}</p>
                                    </div>
                                </div>

                            </div>)
                    }

                    )}

                </div>

            </div>
        </section>
    )


}