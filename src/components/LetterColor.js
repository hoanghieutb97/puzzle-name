import React from 'react';
import * as ColorToArray from "./ColorToArray";
import * as constants from "./../constants";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
function LetterColor(props) {


    const [expanded, setExpanded] = React.useState('panel1');
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    let ListColor = constants.ListColor;
    let colorName = props.colorName;
    ListColor = ListColor.map(item => [ColorToArray.ColorToArray(constants[item], 6), item]);
    let activeColor = <svg width="18" height="14" viewBox="0 0 18 14" xmlns="http://www.w3.org/2000/svg" className="active-color" ><path d="M5.9999 10.7887L1.7999 6.58872L0.399902 7.98872L5.9999 13.5887L17.9999 1.58872L16.5999 0.188721L5.9999 10.7887Z"></path></svg>
    // console.log(listHex);
    return (
        <Accordion expanded={expanded === 'panel1'} aria-controls="panel1a-content" id="panel1a-header" onChange={handleChange('panel1')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                <Typography> Colors</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <div className="div">
                    <div className="all-color">
                        {/* Rainbow */}
                        {ListColor.map((item, key) =>
                            <div className="cadr-one-color" key={key} onClick={() => props.changeActiveColorName(item[1])}>
                                <div className="ctn-avtivecolor">
                                    <div className="one-color">
                                        {item[0].map((itemColor, keyColor) => <div className="one-hex" key={keyColor} style={{ background: itemColor }} >
                                        </div>)}
                                    </div>
                                    {(colorName === item[1]) ? activeColor : ""}
                                </div>

                                <div className="name-color">{item[1]}</div>
                            </div>
                        )}


                    </div>
                </div >

            </AccordionDetails>
        </Accordion>



    );
}

export default LetterColor;