import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import Google_Play from '../img/google-play-badge.png';
import App_Store from "../img/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg";
// import Button from '@material-ui/core/Button';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';


function Project(props){
    const [open,setOpen] = useState(false);
    const handleIos = () => {
        window.location = props.ios;
    }
    const handleAndroid = () => {
        window.location = props.android;
    }
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    return(
        <div className = "project">
            <div className = "project-name-box">
                <p className = "project-name">
                    {props.name}
                </p>
            </div>
            <div className = "project-used-box">
                <p className = "project-used">
                    {props.used}
                </p>
            </div>
            <div onClick = {handleClickOpen} className = "img-box">
                <img className = "img" src = {props.img1} alt = "Not found"/>
                {props.image ? <img className = "img" src = {props.img2} alt = "Not found"/> : <div></div>}
            </div>
            <Modal 
            dialogClassName="modal-custom"
            centered
            show={open}
            onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className = "m-body">
                        <div className = "m-img-box">
                            <img className = "m-img"src = {props.img1} alt ="Not Found"/>
                            {props.image? <img className = "m-img" src = {props.img2} alt = "Not Found"/> : <div></div>}
                        </div>
                        <div className = "m-content">
                            <h4 className = "m-name">
                                {props.name}
                            </h4>
                            <h5 className = "m-used">
                                {props.used}
                            </h5>
                            <p className = "m-text">
                                {props.desc}
                            </p>
                            <div style = {{display: "flex", marginTop: '25px'}}>
                                {(props.ios.length !== 0) ? <img alt = "Not found" style = {{cursor: "pointer", height: "70px"}} className = "Apple" src = {App_Store} onClick={handleIos}/> : null}
                                {(props.android.length !== 0) ? <img alt = "Not found" style = {{cursor: "pointer", height: "100px", position: "relative", bottom: "14px"}} className="Google" src = {Google_Play} onClick={handleAndroid}/> : null}
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}  
export default Project;