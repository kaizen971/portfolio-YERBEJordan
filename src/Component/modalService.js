import React, { useState } from "react";
import {
  Button,
  IconButton,
  Modal,
  Paper,
  Stepper,
  Step,
  StepLabel,
  TextField,
  Typography,
  Box
} from "@mui/material";
import {Person, Work, School, Code, Language, Gavel, Public, MonetizationOn, Settings, Help, Email, Phone, LocationOn, CalendarToday, Folder, InsertDriveFile, PhotoCamera, Videocam, Web, ArtTrack, LibraryBooks, SportsEsports, Flight, Home, AccountBalance, BusinessCenter, VerifiedUser, Favorite, Mood, ThumbUp , BugReport, DeveloperBoard, DesktopWindows, Functions, Extension, Storage, Memory, Http, Cloud, CloudQueue, StorageOutlined, DataUsage, Devices, Mouse, Keyboard, Laptop, SettingsApplications, SettingsInputComponent, SettingsEthernet, CodeOutlined, DeveloperMode, HttpsOutlined, Router, WbIncandescentOutlined, Apps, BubbleChart, DesktopAccessDisabled}from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { Icon } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';


const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledPaper = styled(Paper)`
  position: absolute; 
  width: 1000px;
  max-width: 95vw;
  padding: 32px;
  outline: none;
  transform: scale(0.8);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &.zoom-enter {
    transform: scale(0);
  }
  &.zoom-enter-active { 
    transform: scale(0.8);
  }
  &.zoom-exit {
    transform: scale(0.8);
  }
  &.zoom-exit-active {
    transform: scale(0);
  }
`;

const ModalService = ({setServiceItems,serviceItems}) => {
  const [activeStep, setActiveStep] = useState(0);
  const [icon, setIcon] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [open, setOpen] = useState(false);
  const widthScreen = window.innerWidth;
  const desktopScreen = widthScreen > 768;
  const mobileScreen = useMediaQuery({ maxWidth: 767 });
  const handleOpen = () => setOpen(true);
  const handleClose = () =>{setOpen(false); };
  const handleFinish = () => {
    setOpen(false);
    setServiceItems([...serviceItems, { icon, title, description }]);

  };
  const handleNext = () => setActiveStep(activeStep + 1);
  const handleBack = () => setActiveStep(activeStep - 1);
  const handleReset = () => {
    setActiveStep(0);
    setIcon("");
    setTitle("");
    setDescription("");
  };
  const getStepContent = (stepIndex) => {
    const iconButton = [
      { name: "Person", value: Person },
      { name: "Work", value: Work },
      { name: "School", value: School },
      { name: "Code", value: Code },
      { name: "Language", value: Language },
      { name: "Gavel", value: Gavel },
      { name: "Public", value: Public },
      { name: "MonetizationOn", value: MonetizationOn },
      { name: "Settings", value: Settings },
      { name: "Help", value: Help },
      { name: "Email", value: Email },
      { name: "Phone", value: Phone },
      { name: "LocationOn", value: LocationOn },
      { name: "CalendarToday", value: CalendarToday },
      { name: "Folder", value: Folder },
      { name: "InsertDriveFile", value: InsertDriveFile },
      { name: "PhotoCamera", value: PhotoCamera },
      { name: "Videocam", value: Videocam },
      { name: "Web", value: Web },
      { name: "ArtTrack", value: ArtTrack },
      { name: "LibraryBooks", value: LibraryBooks },
      { name: "SportsEsports", value: SportsEsports },
      { name: "Flight", value: Flight },
      { name: "Home", value: Home },
      { name: "AccountBalance", value: AccountBalance },
      { name: "BusinessCenter", value: BusinessCenter },
      { name: "VerifiedUser", value: VerifiedUser },
      { name: "Favorite", value: Favorite },
      { name: "Mood", value: Mood },
      { name: "ThumbUp", value: ThumbUp },
      { name: "BugReport", value: BugReport },
      { name: "DeveloperBoard", value: DeveloperBoard },
      { name: "DesktopWindows", value: DesktopWindows },
      { name: "Functions", value: Functions },
      { name: "Extension", value: Extension },
      { name: "Storage", value: Storage },
      { name: "Memory", value: Memory },
      { name: "Http", value: Http },
      { name: "Cloud", value: Cloud },
      { name: "CloudQueue", value: CloudQueue },
      { name: "StorageOutlined", value: StorageOutlined },
      { name: "DataUsage", value: DataUsage },
      { name: "Devices", value: Devices },
      { name: "Mouse", value: Mouse },
      { name: "Keyboard", value: Keyboard },
      { name: "Laptop", value: Laptop },
      { name: "SettingsApplications", value: SettingsApplications },
      { name: "SettingsInputComponent", value: SettingsInputComponent },
      { name: "SettingsEthernet", value: SettingsEthernet },
      { name: "CodeOutlined", value: CodeOutlined },
      { name: "DeveloperMode", value: DeveloperMode },
      { name: "HttpsOutlined", value: HttpsOutlined },
      { name: "Router", value: Router },
      { name: "WbIncandescentOutlined", value: WbIncandescentOutlined },
      { name: "Apps", value: Apps },
      { name: "BubbleChart", value: BubbleChart },
      { name: "DesktopAccessDisabled", value: DesktopAccessDisabled }
    ];


    
    switch (stepIndex) {
      case 0:
        return (
          <div>
            <div>
           {iconButton.map(({name,value}) => {
                return(
                    <IconButton
                    onClick={() => setIcon(name)}
                    color={ "primary" }

                    >
                        <Icon className="id-color" component={value} sx={{fontSize:'3rem'}} />
                    </IconButton>
                )
            })}
            
            </div>
            
       
          </div>
        );
      case 1:
        return (
          <Box sx={{p:4}}>
            <TextField
              label="Titre"
              value={title}
              p={10}
              mt={10}
              sx={{ marginBottom: "16px" }}
              onChange={(e) => setTitle(e.target.value)}
              fullWidth
            />
            <TextField
              label="Description"
              value={description}
              p={10}
              mt={10}

              onChange={(e) => setDescription(e.target.value)}
              fullWidth
              multiline
              rows={4}
            />
          </Box>
        );
      default:
        return null;
    }
  };
  const color = useSelector((state) => state.counter.color);
  const colorEdit = useSelector((state) => state.counter.colorEdit);
  const isFrench = useSelector((state) => state.counter.isFrench);
  const steps = [isFrench ? "Choisir une icône" : "Choose an icon", isFrench ? "Remplir les informations" : "Fill in the information"];
  return (
    <div>
      <Button onClick={handleOpen} variant="contained" style={{marginTop:10,marginBottom:10,backgroundColor:color}}>
       {isFrench ? "Ajouter un service" : "Add a service"}
      </Button>
      <StyledModal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        disableEnforceFocus
        style={{zoom:mobileScreen ? 0.7 : 0}}

      >
        <StyledPaper
          className="zoom"
          elevation={5}
          sx={{ borderRadius: "8px" }}
          >
          <Stepper activeStep={activeStep}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {getStepContent(activeStep)}
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            {activeStep === 0 ? (
              <Button onClick={handleClose}>{isFrench ? "Annuler" : "Cancel"}</Button>
            ) : (
              <Button onClick={handleBack}>{isFrench ? "Précédent" : "Back"}</Button>
            )}
            {activeStep === steps.length - 1 ? (
              <div/>
            ) : (
              <Button onClick={handleNext}>{isFrench ? "Suivant" : "Next"}</Button>
            )}
            {activeStep === steps.length - 1 && (
              <Button
                variant="contained"
                color="primary"
                onClick={handleFinish}
              >
                {isFrench ? "Terminer" : "Finish"}
              </Button>
            )}
          </div>
        </StyledPaper>
      </StyledModal>
    </div>
);
};

export default ModalService;