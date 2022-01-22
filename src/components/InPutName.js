import React, { useState, useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import * as constants from "./../constants";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import PropTypes from 'prop-types';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

function InputName(props) {
    const [maxLetter, setMaxLetter] = useState(false);
    const MaxLetter = constants.MaxLetter;
    const [expanded, setExpanded] = useState('panel1');
    let changeLineName = (value, key) => {
        let arrValue = (value.length !== 0) ? value.match(/[a-zA-Z]+/g)[0].toLowerCase() : "";
        if (arrValue.length > MaxLetter) setMaxLetter(true)
        else if (arrValue.length > 0) {
            arrValue = arrValue.split("");
            if (maxLetter === true) setMaxLetter(false)
            let namedefault = [...props.name];
            namedefault[key] = arrValue;
            props.setName(namedefault);
        }
        else if (value.length === 0) {
            let namedefault = [...props.name];
            namedefault[key] = [];
            props.setName(namedefault);
        }
    }
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };


    const [open, setOpen] = React.useState(false);
    const [selectAnimal, setSelectAnimal] = useState([null, null]); // [indexline , LeftOrRight]
    const ListAnimal = constants.ListAnimal;
    const handleClickOpen = (indexLine, LeftOrRight) => {
        setOpen(true);
        setSelectAnimal([indexLine, LeftOrRight])
    };
    const handleClose = () => {
        setOpen(false);
    };
    let setPositionAnimal = (nameAnimal) => {
        props.showAnimal(nameAnimal, selectAnimal);
        setOpen(false);
    }
    let animal = [...props.animal];

    return (
        <React.Fragment>
            <Accordion expanded={expanded === 'panel1'} aria-controls="panel1a-content" id="panel1a-header" onChange={handleChange('panel1')}>
                <AccordionSummary >
                    <Typography>
                        Text & figures
                        <br />
                        {(maxLetter === true) ? <span className="max-letter">max letter = {MaxLetter}</span> : ""}

                    </Typography>




                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        <div className="ctn-add-animal-top">
                            {animal[0].map((item, key) => <img className="img-add-animal-top" key={key} onClick={() => handleClickOpen(key, "top")} src={`https://res.cloudinary.com/hieudz/image/upload/v1642654904/puzzle-name/animal/${animal[0][key]}.png`} alt="" />)}
                            <img onClick={() => handleClickOpen(0, "top-add")} src="https://res.cloudinary.com/hieudz/image/upload/v1642827053/puzzle-name/btn-add.png" alt="add animal" className="add-animal" />


                        </div>

                        {props.name.map((item, key) => <div className="ctn-one-line-input" key={key} >

                            {(animal[key + 1][0] === null) ? <img onClick={() => handleClickOpen(key, "left")} src="https://res.cloudinary.com/hieudz/image/upload/v1642827053/puzzle-name/btn-add.png" alt="add animal" className="add-animal" />
                                : <img className="img-add-animal" onClick={() => handleClickOpen(key, "left")} src={`https://res.cloudinary.com/hieudz/image/upload/v1642654904/puzzle-name/animal/${animal[key + 1][0]}.png`} alt="" />}

                            <p className='input-text'>
                                <span className="input">
                                    <input type="text" placeholder="Name Here ..." onChange={(e) => changeLineName(e.target.value, key)} value={props.name[key].join("")} />
                                    <span>
                                    </span>
                                </span>
                                <svg onClick={() => props.deleteLine(key)} data-v-3af7fc61="" width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="trash-line">
                                    <path data-v-3af7fc61="" d="M14 1H10.5L9.5 0H4.5L3.5 1H0V3H14V1ZM1 4V16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1Z" fill="#BCBCBC"></path>
                                </svg>
                            </p>

                            {(animal[key + 1][1] === null) ? <img onClick={() => handleClickOpen(key, "left")} src="https://res.cloudinary.com/hieudz/image/upload/v1642827053/puzzle-name/btn-add.png" alt="add animal" className="add-animal" />
                                : <img className="img-add-animal" onClick={() => handleClickOpen(key, "right")} src={`https://res.cloudinary.com/hieudz/image/upload/v1642654904/puzzle-name/animal/${animal[key + 1][1]}.png`} alt="" />}

                        </div>)
                        }
                        <div className="ctn-add-animal-top">
                            {animal[4].map((item, key) => <img className="img-add-animal-top" key={key} onClick={() => handleClickOpen(key, "bottom")} src={`https://res.cloudinary.com/hieudz/image/upload/v1642654904/puzzle-name/animal/${animal[4][key]}.png`} alt="" />)}
                            <img onClick={() => handleClickOpen(0, "bottom-add")} src="https://res.cloudinary.com/hieudz/image/upload/v1642827053/puzzle-name/btn-add.png" alt="add animal" className="add-animal" />


                        </div>



                    </div>
                    {/* {props.name.length < 3 ? <Button variant="outlined" className="btn-addline" onClick={() => props.setName([...props.name, []])}>add line</Button> : ""} */}


                </AccordionDetails>
            </Accordion>




            {/* dialog selec animal */}
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Select Animal
                </BootstrapDialogTitle>
                <DialogContent dividers className="ctn-list-animal">
                    {/* start content */}
                    <div className="container">
                        <div className="row">
                            {ListAnimal.map((item, key) => <div className="col-3 one-animal" key={key}>
                                <img onClick={() => setPositionAnimal(item)} src={`https://res.cloudinary.com/hieudz/image/upload/v1642654904/puzzle-name/animal/${item}.png`} alt="" className="img-animal" />
                            </div>)}
                        </div>
                    </div>
                    {/* end content */}
                </DialogContent>
                {/* <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Save changes
                    </Button>
                </DialogActions> */}
            </BootstrapDialog>

        </React.Fragment>
    );
}

export default InputName;