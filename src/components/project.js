import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import LazyLoad from 'react-lazyload';
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
            <LazyLoad offset = {[0,250]}>
                <div className = "project-name-box">
                    <p className = "project-name">
                        {props.name}
                    </p>
                </div>
            </LazyLoad>
            <LazyLoad offset = {[0,250]}>
                <div className = "project-used-box">
                    <p className = "project-used">
                        {props.used}
                    </p>
                </div>                                      
            </LazyLoad>
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