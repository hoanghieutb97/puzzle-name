import React, { useState, useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import * as constants from "./../constants";


function InputName(props) {
    const [maxLetter, setMaxLetter] = useState(false);
    const MaxLetter = constants.MaxLetter;
    const [expanded, setExpanded] =useState('panel1');
    let changeLineName = (value, key) => {
        let arrValue = value.split("");
        if (arrValue.length > MaxLetter) setMaxLetter(true)
        else {
            if (maxLetter === true) setMaxLetter(false)
            let namedefault = [...props.name];
            namedefault[key] = arrValue;
            props.setName(namedefault);
        }
    }
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    return (

        <Accordion>
            <AccordionSummary expanded={expanded === 'panel1'} aria-controls="panel1a-content" id="panel1a-header" onChange={handleChange('panel1')} >
                <Typography>
                    Text & figures
                    <br />
                    {(maxLetter === true) ? <span className="max-letter">max letter = {MaxLetter}</span> : ""}

                </Typography>


            </AccordionSummary>
            <AccordionDetails>
                <div>
                    {props.name.map((item, key) => <p key={key} className='input-text'>
                        <span className="input">
                            <input type="text" placeholder="Name Here ..." onChange={(e) => changeLineName(e.target.value, key)} value={props.name[key].join("")} />
                            <span>
                            </span>
                        </span>
                        <svg onClick={(key) => props.deleteLine(key)} data-v-3af7fc61="" width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="trash-line">
                            <path data-v-3af7fc61="" d="M14 1H10.5L9.5 0H4.5L3.5 1H0V3H14V1ZM1 4V16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1Z" fill="#BCBCBC"></path>
                        </svg>
                    </p>)
                    }
                </div>
                {props.name.length < 3 ? <Button variant="outlined" className="btn-addline" onClick={() => props.setName([...props.name, []])}>add line</Button> : ""}


            </AccordionDetails>
        </Accordion>


    );
}

export default InputName;